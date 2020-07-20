var mymap=L.map('mapid').setView([51.505, -0.09], 2);
        
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiZnJlZHlzb215IiwiYSI6ImNrY2pmZnpjcTFqanIzM284YTBya3RrMTQifQ.xhRrn00Rp1XRp4nv4IlUQQ'
}).addTo(mymap);
var ice = L.icon({
iconUrl: 'img/ice.png',
iconSize: [35, 35],
iconAnchor: [15, 15],
});
var fire = L.icon({
iconUrl: 'img/fire.png',
iconSize: [35, 35],
iconAnchor: [15, 15],
});
var storm = L.icon({
iconUrl: 'img/storm.png',
iconSize: [30, 30],
iconAnchor: [15, 15],
});
var volcan = L.icon({
iconUrl: 'img/volcan.png',
iconSize: [35, 35],
iconAnchor: [15, 15],
});
function getmapprop(numb,myico) {
document.getElementById("txt").innerHTML=" ";
var url="https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/"+numb;
fetch(url).
then(resp => resp.json())
.then(data => {
var t=data.title;
var d=data.description;
var tx=document.createElement("p");

var n=document.createTextNode(t);
var n1=document.createTextNode(d);
var di=document.getElementById("txt");
di.appendChild(n); 
di.appendChild(document.createElement("br"));
di.appendChild(n1); 


var array=data[Object.keys(data)[3]]
for(i=0;i<array.length;i++) {
   var xx=array[i].geometries[0].coordinates;
   
   var titl=array[i].title;
   yy=xx[0]+2*xx[0];
   L.marker([xx[1],xx[0]] , {icon: myico}).addTo(mymap).bindPopup(titl)
.openPopup();

}
});}