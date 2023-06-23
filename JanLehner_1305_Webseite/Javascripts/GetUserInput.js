const form_search = document.getElementById("form-search");

export function GetUserInput(){
    var userInput = (form_search.value);
    console.log(userInput);
    form_search.value = "";
    return userInput;
}