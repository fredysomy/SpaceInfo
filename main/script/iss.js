var mymap=L.map('mapid').setView([0, 0], 1);
        
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZnJlZHlzb215IiwiYSI6ImNrY2pmZnpjcTFqanIzM284YTBya3RrMTQifQ.xhRrn00Rp1XRp4nv4IlUQQ'
    }).addTo(mymap);
    var icon1= L.icon({
    iconUrl: 'img/iss.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],

        });
        var mark=L.marker([0,0] ,{icon:icon1}).addTo(mymap);
    setInterval(function add() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544').
    then(resp => resp.json()).then(data => {
        var lat=data.latitude;
        var lon=data.longitude;
        mark.setLatLng([lat,lon]);
    });},1000);