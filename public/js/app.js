const weatherSelector = document.querySelector('form')
const search = document.querySelector("input")
const msg1 = document.querySelector("#msg-1")
const msg2 = document.querySelector("#msg-2")

weatherSelector.addEventListener("submit", (event) => {
    event.preventDefault()
    msg1.textContent = "Loading..."
    msg2.textContent =""
    fetch('http://localhost:3000/weather?location=' + search.value).then((response) => {
        response.json().then((data) => {
            if(data.error){
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.weather.temperature + " degrees"
            }
        })
    })    
})