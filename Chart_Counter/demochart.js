document.getElementById("showingquantity").addEventListener("click",function(){
    let color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var color3 = document.querySelector(".color3");
    var color4 = document.querySelector(".color4");
    var color5 = document.querySelector(".color5");
    var count1 = parseInt(color1.innerHTML, 10);
    var count2 = parseInt(color2.innerHTML, 10);
    var count3 = parseInt(color3.innerHTML, 10);
    var count4 = parseInt(color4.innerHTML, 10);
    var count5 = parseInt(color5.innerHTML, 10);
    alert("Color 1: "+count1+"\nColor 2: "+count2+"\nColor 3: "+count3+"\nColor 4: "+count4+"\nColor 5: "+count5);
});

document.getElementById("Reset").addEventListener("click",function(){
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var color3 = document.querySelector(".color3");
    var color4 = document.querySelector(".color4");
    var color5 = document.querySelector(".color5");
    color1.innerHTML = 0;
    color2.innerHTML = 0;  
    color3.innerHTML = 0;
    color4.innerHTML = 0;
    color5.innerHTML = 0;
    alert("Chart Reseted")
})

document.getElementById("add1").addEventListener("click",function(){
    var color1 = document.querySelector(".color1");
    var count = parseInt(color1.innerHTML,10);
    count++;
    color1.innerHTML = count;
})

document.getElementById("add2").addEventListener("click",function(){
    var color2 = document.querySelector(".color2");
    var count2 = parseInt(color2.innerHTML,10);
    count2++;
    color2.innerHTML = count2;
})

document.getElementById("add3").addEventListener("click",function(){
    var color3 = document.querySelector(".color3");
    var count3 = parseInt(color3.innerHTML,10);
    count3++;
    color3.innerHTML = count3;
})

document.getElementById("add4").addEventListener("click",function(){
    var color4 = document.querySelector(".color4");
    var count4 = parseInt(color4.innerHTML,10);
    count4++;
    color4.innerHTML = count4;
})

document.getElementById("add5").addEventListener("click",function(){
    var color5 = document.querySelector(".color5");
    var count5 = parseInt(color5.innerHTML,10);
    count5++;
    color5.innerHTML = count5;
})

document.getElementById("block1").addEventListener("click",function(){
    var color1 = document.querySelector(".color1");
    var count1 = parseInt(color1.innerHTML,10);
    if (count1 >= 10){
        alert("You have reached the limit of 10")
        return;
    }
    count1++;
    color1.innerHTML = count1;
})

document.getElementById("block2").addEventListener("click",function(){
    var color2 = document.querySelector(".color2");
    var count2 = parseInt(color2.innerHTML,10);
    if (count2 >= 10){
        alert("You have reached the limit of 10")
        return;
    }
    count2++;
    color2.innerHTML = count2;
})

document.getElementById("block3").addEventListener("click",function(){
    var color3 = document.querySelector(".color3");
    var count3 = parseInt(color3.innerHTML,10);
    if (count3 >= 10){
        alert("You have reached the limit of 10")
        return;
    }
    count3++;
    color3.innerHTML = count3;
})

document.getElementById("block4").addEventListener("click",function(){
    var color4 = document.querySelector(".color4");
    var count4 = parseInt(color4.innerHTML,10);
    if (count4 >= 10){
        alert("You have reached the limit of 10")
        return;
    }
    count4++;
    color4.innerHTML = count4;
})

document.getElementById("block5").addEventListener("click",function(){
    var color5 = document.querySelector(".color5");
    var count5 = parseInt(color5.innerHTML,10);
    if (count5 >= 10){
        alert("You have reached the limit of 10")
        return;
    }
    count5++;
    color5.innerHTML = count5;
})