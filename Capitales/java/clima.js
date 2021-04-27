
var ciudad = document.getElementById('capital');

function clima() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
    .then(clima => clima.json())
    .then(data =>{

      let tempermax = data.main.temp_max
      let tempermin= data.main.temp_min
      let lon= data.main.humidity
      let lat= data.main.pressure

      tempermax.innerHTML = "tem max : " + post.main.tepm_mix;
      tempermin.innerHTML = "tem min : " + post.main.tepm_min;
      lon.innerHTML = "lon : " + post.coord.lon;
      lat.innerHTML = "lat : " + post.coord.lat;

    countries.appendChild(tempermax);
    countries.appendChild(tempermin);
    countries.appendChild(lat);
    countries.appendChild(lon);
    })
  }