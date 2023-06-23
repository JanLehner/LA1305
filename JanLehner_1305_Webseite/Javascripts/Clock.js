var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

export function UpdateClock() { 
    if(hour.innerHTML >= 8 && hour.innerHTML < 20){
        main.style.backgroundImage = "url('./Images/backgroundDay.jpg')";
    }else{
        main.style.backgroundImage = "url('./Images/backgroundNight.jpg')";
    }


    if (second.innerHTML < 59) {
        second.innerHTML++
    } else {
        second.innerHTML = 0
        if (minute.innerHTML < 59) {
            minute.innerHTML++
        }
        else {
            minute.innerHTML = 0
            if (hour.innerHTML < 23) {
                hour.innerHTML++
            } else {
                hour.innerHTML = 0
            }
        }
    }

    if (second.innerHTML.length < 2) {
        second.innerHTML = "0" + second.innerHTML;
    }

    if (minute.innerHTML.length < 2) {
        minute.innerHTML = "0" + minute.innerHTML;
    }

    if (hour.innerHTML.length < 2) {
        hour.innerHTML = "0" + hour.innerHTML;
    }
}

export function SetTime(timeArray){
    hour.innerHTML = timeArray[0]
    minute.innerHTML = timeArray[1]
    second.innerHTML = timeArray[2]
}

export function ClearClock(){
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
}