function getq() {
    
    var queri=document.getElementById("query").value;
    var url="https://api.nasa.gov/planetary/apod?api_key=4iWhuYckFgwjufu2vCPzb3OB5B5gdqUeXw2PJvF3&date=";
    var fu=url+queri;
    fetch(fu).
    then(resp => resp.json())
    .then(data => {
        dat=data['explanation'];
     dat1=data['url'];
     var xyz=document.createElement('img');
xyz.style.cssText="width:80%;height:80%;margin:10%;margin-top:3%;";
        console.log(dat1);
        console.log(dat);
       xyz.setAttribute("src",dat1);
       document.getElementById("im").appendChild(xyz);
        var exp=document.createElement("p");
        pa.style.cssText="text-align:center;";
       var xc=document.createTextNode(dat);
       document.getElementById("pa").appendChild(xc);



    });





}





