
function getweather(city) {
    let p = fetch(`https://goweather.herokuapp.com/weather/${city}`)
    p.then((response) => {
        return response.json()
    }).then((value) => {
        let cards = document.getElementsByClassName("card")
        let fore = value.forecast
        temperature.innerText = value.temperature
        Cty.innerText = city
        desc.innerText = value.description
        wnd.innerHTML = `<h3>Wind Speed - ${value.wind}</h3>`
        if(value.description === "Sunny"){
            desc.style.color = "yellow"
        }
        let i = 0
        Array.from(cards).forEach((element) => {
            element.innerHTML = `card${i}`.innerHTML = `<div class="day">
            <h3>Day - </h3>
            <h4 id="d3day">${fore[i].day}</h4>
            </div>
            <div class="ftemp">
            <h3>Temperature - </h3>
            <h4 id="d3temp">${fore[i].temperature}</h4>
            </div>
            <div class="fwind">
            <h3>Wind - </h3>
            <h4 id="d3win">${fore[i].wind}</h4>
            </div>`

            i = i + 1
        })

        console.log(value)
    })
}

butt.addEventListener('click', () => {
    let cityname = sch.value
    getweather(cityname)
    sch.value = ""
})


getweather('New York')