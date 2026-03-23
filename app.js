async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");
    const apiKey = "f742ebe89ab187389a365d34a0230a6b"

    if(city === ""){
         result.innerHTML = "please enter city";
         return;

    }
    result.innerHTML = "Loading..."
    try{
        const response  = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        const data = await response.json();
        if(data.cod !== 200){
            result.innerHTML= "City not found";
            return;
        }
        result.innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡️Tempratur: ${data.main.temp}°C</p>
        <p>☁️Weather: ${data.weather[0].main}</p>
        <p>💧Humidity: ${data.main.humidity}%</p>
        <p>🌬️Wind Speed: ${data.wind.speed}m/s</p>`
    }catch(error){
        result.innerHTML= "Error"
        console.log(Error);
    }
    
}