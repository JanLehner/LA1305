import { GetUserInput } from "./Javascripts/GetUserInput.js";
import { FetchTime } from "./Javascripts/FetchTime.js";
import { UpdateClock } from "./Javascripts/Clock.js";
import { SetTime } from "./Javascripts/Clock.js";
import { ClearClock } from "./Javascripts/Clock.js";


var locationDiv = document.getElementById('locationDiv');
var clockInterval;

const btn_search = document.getElementById("btn-search");
btn_search.addEventListener("click", ClickSearchBtn);

const btn_clear = document.getElementById("btn-clear");
btn_clear.addEventListener("click", Reset);

function ClickSearchBtn(){ 
    Reset();
    const userInput = GetUserInput();
    /*CSS für den Loader*/
    /*Kopiert von https://loading.io/css/*/
    locationDiv.innerHTML = `<div id="loadingDiv">
    <p id="loadingText">Loading</p>
    <div class="lds-facebook"><div></div><div></div><div></div></div></div>`;
    /*--------------------------------------------------------------------------*/
    FetchTime(userInput, DisplayResults, CityNotFound);
}

function CityNotFound(){
    locationDiv.innerHTML = "City not found"
}

function DisplayResults(result){
    PrintLocation(result.city);
    SetTime(result.time)
    clockInterval = setInterval(() => {
        UpdateClock()
    }, 1000)
}

function PrintLocation(location){
    locationDiv.innerHTML = `In ${location} it is currently: `;
}

function Reset(){
    clearInterval(clockInterval);
    main.style.backgroundImage = "url('./Images/backgroundImage.jpg')";
    ClearClock();
    locationDiv.innerHTML = "";
}





