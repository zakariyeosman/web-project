// e1bb77ea1d72544d353a340ff5c3893a //

const searchBox = document.getElementById('search');
const button = document.querySelector('.button');
const shop = document.querySelector('.shop');
function getLocation(){
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    getData(lat, lon)
})}
}

async function getData(lat, lon) {
    await fetch(`https://developers.zomato.com/api/v2.1/search?q=${searchBox.value}&count=20&lat=${lat}&lon=${lon}&sort=real_distance&order=asc`,{
        headers: 
        {"user-key": "e1bb77ea1d72544d353a340ff5c3893a"}})
.then(response => response.json())
.then(data =>{
    console.log(data)
    let newArray = data.restaurants.map(shop =>{
    return `<ul>
    <li> Name: ${shop.restaurant.name}</li>
    <li> Cuisine: ${shop.restaurant.cuisines}</li>
    </ul>`
}).join('')
    shop.innerHTML = '';
    shop.insertAdjacentHTML('beforeend', newArray);
})
.catch(error => console.log(error))
}

button.addEventListener('click', function(){
    getLocation()
})