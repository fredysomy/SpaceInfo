function getpic() {
  var rov=document.getElementById("rover").value;
  var s=sool.value;
  var ur='https://api.nasa.gov/mars-photos/api/v1/rovers/';
  var u1='/photos?sol=';
  var rest="&";
  var r="page=1&api_key=4iWhuYckFgwjufu2vCPzb3OB5B5gdqUeXw2PJvF3";
  var url=ur+rov+u1+s+rest+r;
  document.getElementById("div11").innerHTML="";
  
  fetch(url)
  .then(resp =>resp.json())
  .then(data =>{
          var array=data[Object.keys(data)[0]]
          for(i=0;i<array.length;i++){
              var divm=document.getElementById("div11");
              var divi=document.createElement("div");
               var hr=document.createElement("a");
              divi.style.cssText='width:280px;height:300px;margin:0%;';
              var divi1=document.createElement("div");
              divi1.style.cssText='width:260px;height:250px;margin:5px;';
              var im=document.createElement("img");
              var para1=document.createElement("p");
              var para2=document.createElement("p");
              var para3=document.createElement("p");
              para1.style.cssText='font-size:15px;color:white;';
              para2.style.cssText='font-size:15px;color:white;';
              para3.style.cssText='font-size:15px;color:white;';
              data1=array[i];
              var x=data1.img_src
              var dat=data1.rover
              var namerover=dat.name
              var landdate=dat.landing_date
              var laudate=dat.launch_date
              var stat=dat.status
              var eardate=data1.earth_date
              im.setAttribute("src",x);
              hr.setAttribute("href",x);

              im.style.cssText='background-size: cover;width:100%;height:100%;';
             
               hr.appendChild(im);
              divi1.appendChild(hr);
              
              divi.appendChild(divi1);
              divm.appendChild(divi);
          
          
          
          
        }
       } );
      }
