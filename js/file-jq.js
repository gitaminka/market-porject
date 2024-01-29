var countDowntime = new Date("December 13, 2024 15:15:37").getTime();


var x = setInterval(function() {


var now = new Date().getTime();



var distane = countDowntime - now ;


var days = Math.floor(distane / (1000*60*60*24));
var hours = Math.floor((distane % (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((distane % (1000*60*60))/(1000*60));
var secouds = Math.floor((distane % (1000*60))/1000);



document.getElementById("demo").innerHTML='<span id="day">'+ days +'</span>' + '<span id="hours">'+ hours +'</span>' + 
'<span id="minutes">'+ minutes +'</span>' + '<span id="secouds">'+ secouds +'</span>';
var z = document.getElementsByClassName("demos");
for (var i= 0 ; i< z.length; i++){

   z[i].innerHTML =  '<span id="day">'+ days +'</span>' + '<span id="hours">'+ hours +'</span>' + 
   '<span id="minutes">'+ minutes +'</span>' + '<span id="secouds">'+ secouds +'</span>';
}


if ( distane < 0) {
  clearInterval(x);
    document.getElementById("demo").innerHTML= "";
    document.getElementById("offer-end-text-inner").innerHTML= "به پایان رسیده";
    document.getElementById("offer-box-disabel").style.filter= "blur(2px)";
}
else {
  document.getElementById("offer-end-text").setAttribute("id","offer-end-after");
  document.getElementById("offer-end-text-inner").style.display ="none";
}

},1000);


