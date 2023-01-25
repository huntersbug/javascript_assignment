 function submitdata()
{
     let city=document.getElementById("city").value
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=304b4080c18d3cf578f0bfc4274be2eb`

fetch(url)
.then(function (res){
return res.json();
}).then(function(res){
appendstore(res)
    }).catch(function(err){

    })
   } 

//---------------------GETLOCATION-----------------------------------------------------------------------------------------------------
   function getDataLocation(lat, lon) {
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
        
    fetch(url)
  .then(function (res) {
  return res.json();
       })
    .then(function (res) {
    appendstore(res);
 
   })
  .catch(function (err) {
   console.log(err);
     });
    }
//    //---------------------------------------------------LOCATION END--------------------------------------------       
// //----------------------Api function for data End---------------------------------------------------------------------------------
        function appendstore(data)
        {
          let container=document.getElementById(`container`)
          container.innerHTML=null
          let map = document.getElementById("gmap_canvas");
        let city=document.createElement(`p`)
        city.innerHTML=`City Name: ${data.name}`
        let min=document.createElement(`p`)
        min.innerHTML=`Min temp: ${(Math.floor(data.main.temp_min-273))} °C`
        let max=document.createElement(`p`)
        max.innerHTML=`Max temp: ${(Math.floor(data.main.temp_max-273))} °C`
        let current=document.createElement(`p`)
       current.innerHTML=`Present temp: ${(Math.floor(data.main.temp-273))} °C`
        let humidity=document.createElement(`p`)
       humidity.innerHTML=`Relative Humidity: ${data.main.humidity} %`

       container.append(city,min,max,current,humidity)
   
       map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        }
//      //---------------WHEATHER--------------------------------------------------------- ---------  
    function getWeather() {
    navigator.geolocation.getCurrentPosition(success);
        
    function success(position) {
    let crd = position.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getDataLocation(crd.latitude, crd.longitude);
          }
        }
   //------------------------------------------------------------------WHEATHER----------------------------------