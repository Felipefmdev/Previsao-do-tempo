const key = "10f5818cd7e74bce255a938f5474584c"


function putDataInScreen(data){
  document.querySelector(".city").innerHTML = "Tempo em " + data.name
  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + " °C"
  document.querySelector(".text-prevision").innerHTML = data.weather[0].description
  document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
  document.querySelector(".prevision-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function searchCity(city){
  
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

  putDataInScreen(data)
  
}


function buttonClick(){
  const city = document.querySelector(".input-city").value

  searchCity(city)
}
