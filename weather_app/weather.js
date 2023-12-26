let weather={
    apikey: "d45bec64bae4992177e737c6d1d4b9f5",
    fetchweather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q= "
            +city 
            + "&units=metric&appid=d45bec64bae4992177e737c6d1d4b9f5"
            )
            .then((respone)=> respone.json())
            .then((data)=> this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name}= data;
        const {description} =data.weather[0];
        const {temp, humidity}= data.main;
        const {speed }= data.wind;
        console.log(name, description, temp, humidity, speed);
        document.querySelector(".city").innerText="Weather in" + name;
        document.querySelector(".description").innerText= description; 
        document.querySelector(".temp").innerText= temp+ "°c";
        document.querySelector(".humidity").innerText= "Humidity: "+ humidity+ "%";
        document.querySelector(".wind").innerText= "Wind Speed: "+ speed+ "km/hr"
    },
    search: function(){
        this.fetchweather(document.querySelector(".search_bar").value);
    },
};
document.querySelector(".search button")
        .addEventListener("click", function(){
            weather.search();

});