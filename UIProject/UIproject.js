const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const austin = document.querySelector('.austin')
const chicago = document.querySelector('.chicago')
const newYork = document.querySelector('.newyork')
const orlando = document.querySelector('.orlando')
const sanFrancisco = document.querySelector('.sanfrancisco')
const seattle = document.querySelector('.seattle')
const denver = document.querySelector('.denver')
const atlanta = document.querySelector('.atlanta')
const name = document.querySelector('.name')
const date = document.querySelector('.date')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')
const uvIndex = document.querySelector('.uvindex')
const icon = document.querySelector('.icon')

austin.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
    .then(data => console.log(data))
})
chicago.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
    .then(data => {
        const nameValue=data['name'];
        const tempValue=data['main']['temp'];
        const humValue=data['main']['humidity'];
        const windValue=data['wind']['speed'];
            
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humValue;
        windspeed.innerHTML = windValue;
        })
    })
newYork.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
    .then(data => {
        const nameValue=data['name'];
        const tempValue=data['main']['temp'];
        const humValue=data['main']['humidity'];
        const windValue=data['wind']['speed'];
            
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humValue;
        windspeed.innerHTML = windValue;
        })
})

orlando.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=33d2022948a7ac8bb31b434fdf4b08be')
        .then(response => response.json())
        .then(data => {
            const nameValue=data['name'];
            const tempValue=data['main']['temp'];
            const humValue=data['main']['humidity'];
            const windValue=data['wind']['speed'];
                
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            humidity.innerHTML = humValue;
            windspeed.innerHTML = windValue;
            })
    })

sanFrancisco.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
    .then(data => {
        const nameValue=data['name'];
        const tempValue=data['main']['temp'];
        const humValue=data['main']['humidity'];
        const windValue=data['wind']['speed'];
            
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humValue;
        windspeed.innerHTML = windValue;
        })
})

seattle.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=33d2022948a7ac8bb31b434fdf4b08be')
        .then(response => response.json())
        .then(data => {
            const nameValue=data['name'];
            const tempValue=data['main']['temp'];
            const humValue=data['main']['humidity'];
            const windValue=data['wind']['speed'];
                
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            humidity.innerHTML = humValue;
            windspeed.innerHTML = windValue;
            })
    })

denver.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
    .then(data => {
        const nameValue=data['name'];
        const tempValue=data['main']['temp'];
        const humValue=data['main']['humidity'];
        const windValue=data['wind']['speed'];
            
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humValue;
        windspeed.innerHTML = windValue;
        })
})
atlanta.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=33d2022948a7ac8bb31b434fdf4b08be')
        .then(response => response.json())
        .then(data => {
            const nameValue=data['name'];
            const tempValue=data['main']['temp'];
            const humValue=data['main']['humidity'];
            const windValue=data['wind']['speed'];
                
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            humidity.innerHTML = humValue;
            windspeed.innerHTML = windValue;
            })
    })
button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=33d2022948a7ac8bb31b434fdf4b08be')
    .then(response => response.json())
.then(data => {
const nameValue=data['name'];

const tempValue=data['main']['temp'];
const iconValue=data['icon'];
const humValue=data['main']['humidity'];
const windValue=data['wind']['speed'];
const dateValue= new Date();

name.innerHTML = nameValue;
date.innerHTML = dateValue
icon.innerHTML = iconValue;
temp.innerHTML = 'Temperature: ' + tempValue;
humidity.innerHTML = 'Humidity: ' + humValue;
windspeed.innerHTML = 'Windspeed: ' + windValue;
})

})