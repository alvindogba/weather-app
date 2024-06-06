
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
let temperature=data.main.temp;//Temp from the api
let windSpead = data.wind.speed;
let hum = data.main.humidity;
let image = data.weather[0].icon; 
let weatherDiscription= data.weather[0].description;

let section =document.getElementById("container")
 section.innerHTML=`<div class="card" id="view" >
<h1 id="h1">${viewName}</h1> &nbsp; <span id="currentDate">2/23/2024</span>
<h2>Temperature:  &nbsp; <span id="temperatureValue">${temperature}</span></h2>
<h2>Wind:  &nbsp; <span id="windSpeed">${windSpead}</span></h2>
<h2>Humidity:  &nbsp; <span id="humanidity">${ hum}</span></h2>

<div>
  <img src="https://openweathermap.org/img/wn/${image}.png" alt="" id="image"> &nbsp <span>${weatherDiscription}</span>
</div>
</div>`

})
.catch(error => {
  console.log("Error fetching weather data:", error);
})
  })
})