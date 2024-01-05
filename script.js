const btn = document.querySelector(".btn")
const ip = document.querySelector("input")
const img = document.querySelector(".wet-img")
const temp = document.querySelector("h1")
const loc = document.querySelector("h2")
const hum = document.querySelector(".hie")
const wind = document.querySelector(".win")


let url = "http://api.weatherapi.com/v1/current.json?key=5ba7d0522aee4cc9adc124130240501&q="


const changeweather = async () => {
    let val = ip.value;
    if (val === "") {
        var main = url + `india&aqi=no`
    }
    else {
        var main = url + `${val} &aqi=no`
    }

    let res = await fetch(main)
    let data0 = await res.json()
    let current = data0['current']
    let loc = data0['location']
    let place = loc['name']//location
    let condition = current["condition"]//no use
    let icon = condition['icon']


    let weather = condition['text']//img weather
    let humidity = current["humidity"]//humidity
    let winds = current["wind_kph"]//wind speed
    let temperature = current["temp_c"]//temp

    img.src = icon



    temp.innerHTML = `${temperature}<sup>o</sup>C`
    hum.innerHTML = `${humidity}%`
    wind.innerHTML = `${winds}Km/h`





}



btn.addEventListener("click", () => {
    changeweather();
})

window.addEventListener("load", () => {
    changeweather();
}
)