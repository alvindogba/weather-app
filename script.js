
//getting the latitute and longitute
document.getElementById("userform").addEventListener("submit", (e)=>{
    e.preventDefault();
    let city = document.getElementById("userCity").value;
    //git the current date
    // let date = new Date("month", "date", "year")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13fb4c7688b3333de77e10b161e7d467`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
     let latitute = data.coord.lat;
     let longitude = data.coord.lon; 

  //getting the weather data from the api
return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=13fb4c7688b3333de77e10b161e7d467`)
.then(response => response.json())
.then(data => {
    console.log(data)
  
 let viewName= data.name; //Name from the request
let temp=data.main.temp;//Temp from the api
let temperatureCelsius =Math.floor(temp - 273.15) 
console.log(temperatureCelsius)
let windSpead = data.wind.speed;
let hum = data.main.humidity;
let image = data.weather[0].icon; 
let weatherDiscription= data.weather[0].description;


let section =document.getElementById("container")
 section.innerHTML=`<div id="viewb" >
                        <h1 id="h1">${viewName} &nbsp; <span id="currentDate">(2/34/2024)</h1></span>
                        <h2>Temperature:  &nbsp; <span id="temperatureValue">${temperatureCelsius} &deg;C</span></h2>
                        <h2>Wind:  &nbsp; <span id="windSpeed">${windSpead} M/S </span></h2>
                        <h2>Humidity:  &nbsp; <span id="humanidity">${ hum}</span></h2>
                        
                    </div>
                  
                    <div class="img_container">
                      <img src="https://openweathermap.org/img/wn/${image}.png" alt="" id="image"> <span>${weatherDiscription}</span>
                    </div>`


})
.catch(error => {
  console.log("Error fetching weather data:", error);
})
  })
})