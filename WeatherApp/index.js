const mapEle = document.getElementById("mapIcon");
const overlayELE = document.getElementById("overlayID");
const overlaycont = document.querySelector(".modelBackground");
const sbtbtn = document.querySelector(".submitbtn");
const searchELE = document.getElementById("searchID");
const data = document.querySelector(".header");
const cont1 = document.querySelector(".sub1Cont");
const cont2 = document.querySelector(".sub2Cont");
const APIkey = "56e6217860aff99ca87654d3ffa991ca";

mapEle.addEventListener("click", () => {
  overlayELE.style.display = "Block";
  searchELE.style.display = "flex";
});

overlayELE.addEventListener("click", () => {
  overlayELE.style.display = "None";
  searchELE.style.display = "None";
});

sbtbtn.addEventListener("click", () => {
  const cityName = document.querySelector(".inputarea").value;
  if (cityName.trim() === "") {
    alert("Please enter the city name");
  } else {
    overlayELE.style.display = "None";
    searchELE.style.display = "None";
    display(cityName);
    display2(cityName);
  }
});

function tempConvert(temp) {
  return (temp - 273).toFixed(2);
}

function timeronlyhourminute(dt, timeZone) {
  const utcSeconds = parseInt(dt, 10) + parseInt(timeZone, 10);
  const date = new Date(utcSeconds * 1000); // Create a Date object

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

async function display(city_name) {
  try {
    const fetched = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${APIkey}`
    );
    if (!fetched.ok) {
      throw new Error(`HTTP error! Status: ${fetched.status}`);
    }

    const fetched_json = await fetched.json();
    const {
      name: city,
      coord: { lon, lat },
      main: { temp, humidity, feels_like, pressure },
      weather: [{ icon }],
      visibility,
      wind: { speed },
      dt,
      sys: { sunrise, sunset },
      timezone,
    } = fetched_json;
    const weatherElement = document.createElement("div");
    weatherElement.style.textAlign = "center";

    weatherElement.innerHTML = `
          <h3 class="header">${city}</h3>
            <img
              src="https://openweathermap.org/img/wn/${icon}@2x.png"
              alt=""
              class="imgCont"
            />
            <div class="tempCentering">
              <i class="at-celcius-bold"></i>
              <p class="temp">: ${tempConvert(temp)}°C</p>
            </div>
      `;
    cont1.innerHTML = "";
    cont1.appendChild(weatherElement);

    const embbedcont = document.createElement("div");
    embbedcont.classList.add("divemmbed");

    embbedcont.innerHTML = `
      <iframe
        src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>          
    `;
    cont2.innerHTML = "";
    cont2.appendChild(embbedcont);

    const riseandsetcont = document.querySelector(".daily1");
    const createdriseandset = document.createElement("div");
    createdriseandset.classList.add("daily10");
    createdriseandset.innerHTML = `
      <div class="sunrise">
        <h class="sunriseheading">Sun Rise</h>
        <i class="at-sunrise-bold"></i>
        <p class="sunrisetime">${timeronlyhourminute(sunrise, timezone)}</p>
      </div>
      <div class="sunset">
        <h class="sunriseheading">Sun Set </h>
        <i class="at-moon-bold"></i>
        <p class="sunsettime">${timeronlyhourminute(sunset, timezone)}</p>
      </div>
    `;
    const createdcurrenttime = document.createElement("div");
    createdcurrenttime.classList.add("daily11");
    createdcurrenttime.innerHTML = `
      <div class="currentTime">
        <h class="sunriseheading">Current Time</h>
        <p class="sunrisetime"><span>${timeronlyhourminute(dt, timezone)}</span></p>
      </div>
      <div class="windSpeed">
        <h class="sunriseheading">Wind Speed</h>
        <i class="at-strong-wind-bold"></i>
        <p class="sunrisetime">${speed} m/s</p>
      </div>
    `;
    riseandsetcont.innerHTML = "";
    riseandsetcont.appendChild(createdriseandset);
    riseandsetcont.appendChild(createdcurrenttime);

    const humiditycont = document.querySelector(".daily2");
    const createdhumidcont = document.createElement("div");
    createdhumidcont.classList.add("daily20");
    createdhumidcont.innerHTML = `
    <p class="smallcase">Humidity</p>
    <div class="samllfeater">
      <i class="at-green-water-bold"></i>
      <h3><span>${humidity}%</span></h3>
    </div>
    `;
    const createdpressurecont = document.createElement("div");
    createdpressurecont.classList.add("daily21");
    createdpressurecont.innerHTML = `
    <p class="smallcase">Pressure</p>
    <div class="samllfeater">
      <i class="at-water-bold"></i>
      <h3><span>${pressure}</span></h3>
    </div>
    `;
    const createdvisiblity = document.createElement("div");
    createdvisiblity.classList.add("daily22");
    createdvisiblity.innerHTML = `
    <p class="smallcase">Visibility</p>
    <div class="samllfeater">
      <i class="at-eye-plus-bold"></i>
      <h3><span>${visibility}</span></h3>
    </div>
    `;
    const createdfeelslike = document.createElement("div");
    createdfeelslike.classList.add("daily23");
    createdfeelslike.innerHTML = `
    <p class="smallcase">Feels Like</p>
      <div class="samllfeater">
      <i class="at-thermometer-alert-bold"></i>
      <h3><span>${tempConvert(feels_like)}</span></h3>
    </div>
    `;
    humiditycont.innerHTML = "";
    humiditycont.appendChild(createdhumidcont);
    humiditycont.appendChild(createdpressurecont);
    humiditycont.appendChild(createdvisiblity);
    humiditycont.appendChild(createdfeelslike);

  } catch (error) {
    alert(error);
  }
}

async function display2(cityName) {
  try {
    const fetched = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`
    );
    if (!fetched.ok) {
      throw new Error(`HTTP error! Status: ${fetched.status}`);
    }
    const fetched_json = await fetched.json();

    const {
      cod,
      message,
      cnt,
      list,
      city: {
        id,
        name,
        coord: { lat, lon },
        country,
        population,
        timezone,
        sunrise,
        sunset,
      },
    } = fetched_json;


    const hourly = document.querySelector(".hourly");
    hourly.innerHTML = ``;
    list.slice(0,8).forEach((ele) => {
      const {
        dt,
        main: { temp },
        weather: [{ icon }],
      } = ele;

      const smallcont = document.createElement("div");
      smallcont.classList.add("smallcont");
      smallcont.innerHTML = 
      `
      <h4 class="timer">${timeronlyhourminute(dt,timezone)}</h4>
      <img
        src="https://openweathermap.org/img/wn/${icon}@2x.png"
        alt=""
        class="imgContsmall"
      />
      <p>${tempConvert(temp)}°C</p>
      `;

      hourly.appendChild(smallcont);
    });

  } catch (error) {
    alert(error);
  }
}
