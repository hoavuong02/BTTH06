
var display = document.querySelector(".display")

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var H1 = document.querySelector(".H1")
    var H2 = document.querySelector(".H2")
    var M1 = document.querySelector(".M1")
    var M2 = document.querySelector(".M2")
    var S1 = document.querySelector(".S1")
    var S2 = document.querySelector(".S2")
    H1.src = "./Assets/BTTH_icons/0" + Math.floor(h/10)+ ".gif"
    H2.src = "./Assets/BTTH_icons/0" + h%10+ ".gif"
    M1.src = "./Assets/BTTH_icons/0" + Math.floor(m/10)+ ".gif"
    M2.src = "./Assets/BTTH_icons/0" + m%10+ ".gif"
    S1.src = "./Assets/BTTH_icons/0" + Math.floor(s/10)+ ".gif"
    S2.src = "./Assets/BTTH_icons/0" + s%10 + ".gif"
    if(h>=0 && h<12){
        display.innerHTML = "Chào buổi Sáng";
    }
    else if(h>=12 && h<17){
        display.innerHTML = "Chào buổi Chiều";
    }
    else{
        display.innerHTML = "Chào buổi Tối";
    }

}

function blink(){
    display.style.color = "black";
    // display.style.fontSize = "20px";
    setTimeout(function(){
        display.style.color = "red";
        // display.style.fontSize = "30px";

    },350)
}
setInterval("showTime()",0)
setInterval("blink()",600)
