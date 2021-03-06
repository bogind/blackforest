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



// Create Tile Basemap

var OSM = L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
			{attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});

// create map object

var map = L.map('map',
		{center: [47.992008, 8.136182], 
		zoom: 9.25,
		layers: [OSM]});

// Empty Variables
		
var basemap = {"מפת רקע OpenStreetMap":OSM}
var blackforest;
var towns_points;
var towns_polygon;
var layers_c;
/*			
$.getJSON("data/blackforest.geojson", function(data) {
	 blackforest = L.geoJSON(data, {
		 style: function style(feature) {
						return {
							weight: 1,
							opacity: 1,
							color: "#09c73d",
							fillOpacity: 0.0
						};
					},
			interactive: false
	 }).addTo(map)
	 blackforest.bindTooltip("היער השחור", {className: 'tooltip',direction: "center"}).openTooltip();
	 return([ blackforest]);
})
*/

// popup div for point layer

function popup_point(feature, layer) {
				if (feature.properties && feature.properties.hebname) {
				layer.bindPopup(
								"<h4><b>שם העיר: </b>" + 
								feature.properties.hebname + 
								"</h4><span style='direction: rtl;'><b>שם בגרמנית: </b></span><span style='text-align: left;'>" + 
								feature.properties.name + 
								"</br></br>" + 
								"<img src='"+feature.properties.image +"' style='border-radius: 8px; height: 100px; width: 150px;' previewImage=true></img>"+
								"<br><b>הסבר קצר</b></br>"+feature.properties.description+
								"</span></br><a href='" + 
								feature.properties.url + "'>הסבר מורחב</a>"
								);
					}
}

$.getJSON("data/towns_point.geojson", function(data) {
		towns_points = L.geoJSON(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng);
			},
			style: function style(feature){
				return {
				weight: 1,
				opacity: 1,
				color: "#e55203",
				radius: 5,
				fillcolor: "#e55203",
				fillOpacity: 0.75,
				}
			},
			onEachFeature: popup_point
			}).addTo(map);
			
		
			
		
					
			 return([ towns_points]);
			 
}).then(function(){
	$.getJSON("data/towns_polygon.geojson",function(data){
			towns_polygon = L.geoJSON(data, {
			style : function style(feature){
				return {
					color: "#109da0",
					opacity: 0.85,
					fillOpacity: 0
				}
			},
			interactive: false
			}).addTo(map);
			
			 return([ towns_polygon]);
		})
}).then(function(){
	
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
	Triberg = L.marker([lat,lng], {icon: curIcon}).bindPopup("<h4>מזג האוויר ב: "+"Triberg".capitalize()+"</h4>"+
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
	$.wait(2000).then(function(){
		var citiesW = L.layerGroup([Freiburg, Titisee, Todtnau, Triberg, Baden_Baden, Basel, Rust]);
	
	layers_c = {"מרכזי ערים":towns_points,
					"גבולות עירוניים":towns_polygon,
					"מזג אוויר": citiesW};
	L.control.layers(basemap,layers_c).addTo(map);
	return layers_c
	})
	
	
})

	
})

//.then(function(){
//$.wait(5000).then(function(){

//});	
	
	//return([ layers_c]);
//});



// add search bar using OSM

var osmGeocoder = new L.Control.OSMGeocoder({
					collapsed: true,
					position: 'topright',
					text: 'חיפוש',
				});
osmGeocoder.addTo(map);



/*
var chart = c3.generate({
																		data: {
																			x: 'x',
																			columns: [
																				['x', 30, 50, 100, 230, 300, 310],
																				['data1', 30, 200, 100, 400, 150, 250],
																				['data2', 130, 300, 200, 300, 250, 450]
																			]
																		}
																	});*/