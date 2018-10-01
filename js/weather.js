String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}		
$.wait = function(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};
var apikey = 'd4950a8a73b3bc7ba38c51adf029d078'
var weather;
var weatherurl;
var response;
var lat;
var lng;
var iconurl;
var Freiburg, Titisee, Todtnau, Triberg, Baden_Baden, Basel, Bad_Wildbad, Rust;

var WeatherIcon = L.Icon.extend({
    options: {
        iconSize:     [50, 50],
        iconAnchor:   [25, 25],
        popupAnchor:  [-3, -45]
    }
});

var cities = {"Freiburg":2925177, "Titisee":2822084, "Todtnau":2821975, "Triberg":2834685,
				"Baden-Baden":2953504,"Basel":2661604,"Bad Wildbad":3220725,"Rust":2842861}



/*	
$.ajax({
		type: 'GET',
		url: url,
		success: function(resp) {
		var weather = resp;
		$("#weather-icon").html("<img src='https://openweathermap.org/img/w/"+weather.list[0].weather[0]["icon"]+".png' width='45' height='45'/>");
		$("#clouds").html(" Cloud Cover: "+ weather.list[0].weather[0].description + ", " + weather.list[0].clouds["all"]+"%");
		$("#temp").html(" Temperature: "+ weather.list[0].main.temp + "&#176C" +
					"<br> Humidity: " + weather.list[0].main.humidity+"%" );
					if('rain' in weather.list[0] && '3h' in weather.list[0].rain){
						if(typeof w.list[0].rain["3h"] === "undefined"){
						$("#rain").html("");
						}else{
						$("#rain").html(" Precipitation: "+ weather.list[0].rain["3h"]);
						}
					}
					
				  },
				  error: function() {
				   console.log('error')
				  }
				});



var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Freiburg"]+"&units=metric&appid="+apikey
$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Freiburg = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Freiburg".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Freiburg
	}
).then(function(){
	
	

var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Titisee"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Titisee = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Titisee".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Titisee
	}
)}).then(function(){
	

var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Todtnau"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Todtnau = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Todtnau".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Todtnau
	}
)
	
}).then(function(){


var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Triberg"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Triberg = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+city_name.capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Triberg
	}
)
	
}).then(function(){


var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Baden-Baden"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Baden_Baden = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Baden-Baden".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Baden_Baden
	}
)
	
}).then(function(){

var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Basel"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Basel = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Basel".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Basel
	}
)
	
}).then(function(){

var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Bad Wildbad"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Bad_Wildbad = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Bad Wildbad".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Bad_Wildbad
	}
)
	
}).then(function(){


var weatherurl = "https://api.openweathermap.org/data/2.5/forecast?id="+cities["Rust"]+"&units=metric&appid="+apikey
	$.get(weatherurl,function(resp){
   weather = resp;
   return weather;
}).then(function(){
	lat = weather.city.coord["lat"];
	lng = weather.city.coord["lon"];
	iconurl = "./js/weathericons/"+weather.list[0].weather[0].icon+".png";
	var curIcon = new WeatherIcon({iconUrl: iconurl });
	var date1 = new Date(weather.list[0].dt_txt)
	var hours = date1.getHours().toString()
	var Minutes = date1.getMinutes.toString()
	var date2 = null
	Rust = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Rust".capitalize()+"</h4>"+
															"<span>נכון לתאריך ושעה:"+
															weather.list[0].dt_txt+"</br>"+
															"טמפרטורה: "+
															weather.list[0].main.temp + "&#176C"+"</br>"+
															"<div id='chart' class='c3' style='max-height: 280px; position: relative;'>");
	return Rust
	}
)
	
}).then(function(){
	var citiesW = L.layerGroup([Freiburg, Titisee, Todtnau, Triberg, Baden_Baden, Basel, Bad_Wildbad, Rust]);
	return citiesW;
})
*/