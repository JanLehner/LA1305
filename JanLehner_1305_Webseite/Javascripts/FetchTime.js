export async function FetchTime(Location, CallbackOk, CallbackNOk){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=af785b7f12bb4706a24f1dcbedd39293&location=${Location}`;
    try{
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        if(data.datetime == undefined){
            console.log("city not found");
            CallbackNOk();
        }else{
            var dateTimeString = data.datetime;
            var timeString = dateTimeString.split(" ")[1];
            var timeArray = timeString.split(":");
            const result = {city: data.requested_location, time: timeArray};
            CallbackOk(result);
        }
    }catch(error){
        console.log('Fetch Error', error);
    }
    
}