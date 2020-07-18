function getq() {
    document.getElementById("pa").innerHTML=" ";
    var queri=document.getElementById("query").value;
    var url="https://api.nasa.gov/planetary/apod?api_key=4iWhuYckFgwjufu2vCPzb3OB5B5gdqUeXw2PJvF3&date=";
    var fu=url+queri;
    fetch(fu).
    then(resp => resp.json())
    .then(data => {
        dat=data['explanation'];
     dat1=data['url'];
        console.log(dat1);
        console.log(dat);
        document.getElementById('im').setAttribute("src",dat1);
        var exp=document.createElement("p");
       var xc=document.createTextNode(dat);
       document.getElementById("pa").appendChild(xc);



    });





}
