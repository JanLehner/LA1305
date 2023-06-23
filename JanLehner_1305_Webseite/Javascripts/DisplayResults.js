import { UpdateClock } from "./Clock.js";
import { SetTime } from "./Clock.js";

var locationDiv = document.getElementById('locationDiv');

export function CityNotFound(){
    locationDiv.innerHTML = "City not found"
}

export function DisplayResults(result){
    PrintLocation(result.city);
    SetTime(result.time)
    setInterval(() => {
        UpdateClock()
    }, 1000)
}

function PrintLocation(location){
    locationDiv.innerHTML = `In  ${location} ist es gerade: `;
}