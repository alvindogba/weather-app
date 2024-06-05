
//getting the latitute and longitute
document.getElementById("userform").addEventListener("submit", (e)=>{
    e.preventDefault();
    let city = document.getElementById("userCity").value;
    let responseH1= document.getElementById("h1");
    // let currentDate= document.getElementById("currentDate")
    let temValue=document.getElementById("temperatureValue")
    let windSpeed=document.getElementById("windSpeed")
    let humanidity=document.getElementById("humanidity")
    // let image = document.getElementById("image")
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
let wind = data.wind.speed;
let hum = data.main.humidity;
let image = data.weather[0].icon 


temValue.textContent=temperature;
responseH1.textContent=viewName;  //Assigning the name from the request to the view
windSpeed.textContent=wind;
humanidity.textContent=hum; 
// image.src=icon_image;
})


.catch(error => {
  console.log("Error fetching weather data:", error);
})
  })

})