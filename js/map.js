
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
								"</span></br><b>קישור: </b></br><a href='" + 
								feature.properties.url + "'>"+feature.properties.url+"</a>"+
								"</br>" + 
								"<img src='"+feature.properties.image +"' style='border-radius: 8px; height: 100px; width: 150px;' previewImage=true></img>"+
								"<br>"+feature.properties.description
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
		}).then(function(){
				layers_c = {"מרכזי ערים":towns_points,
					"גבולות עירוניים":towns_polygon};
		L.control.layers(basemap,layers_c).addTo(map);
		 return([ layers_c]);
		});	

});

// add search bar using OSM

var osmGeocoder = new L.Control.OSMGeocoder({
					collapsed: true,
					position: 'topright',
					text: 'חיפוש',
				});
osmGeocoder.addTo(map);


		

