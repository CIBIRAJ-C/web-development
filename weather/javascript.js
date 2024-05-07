const ApiKey="822ff78297956536818d7ead92fa9fab"
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".image-icon")
async function CheckWeather(city){
    const response=await fetch(ApiUrl + city +`&appid=${ApiKey}`)
      if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }
      else{
        const data=await response.json()

        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C"
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h"
        if(data.weather[0].main=="clouds"){
            weatherIcon.src="cloud.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="sun.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="snow.png"
        }
        else if(data.weather[0].main=="Thunderstorm"){
            weatherIcon.src="thunderstrom.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png"
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src="haze.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"
        
    }
    }
    const searchInput=searchBtn.addEventListener("click", ()=>{
        CheckWeather(searchBox.value);
    })
    






