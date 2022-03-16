
var display = document.querySelector(".display")

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    console.log(h)
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 0;
    }
    
    if(h > 12){
        // h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
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

showTime();