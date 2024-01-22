const API_KEY 
=`b82310b01af91852fb28c00023388431`;
const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

fetch(url)
.then(res => res.json())
.then(data => displayTemperature(data))

}
const displayTemperature = data =>{
//     const temp = document.getElementById('temperature');
//    console.log(data);
//     temp.innerText=data.main.temp;
setInnerText('temperature',data.main.temp);

setInnerText('weather',data.weather[0].main);

    // document.getElementById('weather').innerText=data.weather[0].main;

}


const setInnerText = (id, text)=>{
    const temp = document.getElementById(id);
  // console.log(data);
    temp.innerText=text;

} 
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText=city;
    loadTemperature(city);

   

})
loadTemperature('dhaka');