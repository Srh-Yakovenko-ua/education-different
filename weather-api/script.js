fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=d1c85b72665324fb61afce468cc551fb ')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.package-name').innerHTML = data.name;
      document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.diclaimer').innerHTML = data.weather[0]['description'];
      // https://openweathermap.org/img/wn/01d@2x.png
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

   })
   .catch(function () {

   });