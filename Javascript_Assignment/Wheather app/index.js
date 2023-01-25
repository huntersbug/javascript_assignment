

function submitdata()
{
    let city=document.getElementById("city").value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=304b4080c18d3cf578f0bfc4274be2eb`
   fetch(url)
    .then(function (res){
        return res.json()
    })
    .then(function(res){
   storedata(res)
    })
    .catch(function(err){
   })
    }

    function storedata(data)
    {
        let container=document.getElementById("container")
        container.innerHTML=null
        let city=document.createElement("h3")
        city.innerHTML=`Cityname: ${data.name}`
        let Mintemp=document.createElement("h3")
       Mintemp.innerHTML=`MinTemp: ${data.main.temp_min}`
        let maxtemp=document.createElement("h3")
       maxtemp.innerHTML=`MaxTemp ${data.main.temp_max}`
        let current=document.createElement("h3")
       current.innerHTML=`Current Temp: ${data.main.temp}`
       container.append(city,Mintemp,maxtemp,current)
       map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    }
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
