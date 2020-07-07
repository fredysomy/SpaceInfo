function getpic() {
  var s=sool.value;
  var ur='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=';
  var rest="&";
  var r="page=1&api_key=4iWhuYckFgwjufu2vCPzb3OB5B5gdqUeXw2PJvF3";
  var url=ur+s+rest+r;
fetch(url)
        .then(resp =>resp.json())
        .then(data =>{
          var array=data[Object.keys(data)[0]]
          for(i=0;i<array.length;i++){
          
          data1=array[i];
          var x=data1.img_src
          var dat=data1.rover
         
         var namerover=dat.name
          var landdate=dat.landing_date
         var laudate=dat.launch_date
          var stat=dat.status
          var eardate=data1.earth_date
          
        }} );
      }
