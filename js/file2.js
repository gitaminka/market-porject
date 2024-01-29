

 


var countDowntime = new Date("february 6, 2023 ,15:15:37").getTime();


var x = setInterval(function() {



var now = new Date().getTime();



var distane = countDowntime - now ;


var days = Math.floor(distane / (1000*60*60*24));
var hours = Math.floor((distane % (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((distane % (1000*60*60))/(1000*60));
var secouds = Math.floor((distane % (1000*60))/1000);



/*document.getElementById("demo").innerHTML='<span id="day">'+ days +'</span>' + '<span id="hours">'+ hours +'</span>' + 
'<span id="minutes">'+ minutes +'</span>' + '<span id="secouds">'+ secouds +'</span>';*/
 var z = document.getElementsByClassName("demos");
 for (var i= 0 ; i< z.length; i++){

    z[i].innerHTML =  '<span class="d-flex flex-column  ">'+ days +'<span class="title-offer" > روز </span> '+'</span>' + '<span class="d-flex flex-column  ">'+ hours +'<span class="title-offer"> ساعت </span> ' +'</span>' + 
    '<span class="d-flex flex-column  ">'+ minutes + '<span class="title-offer"> دقیقه </span> '+'</span>' + '<span class="d-flex flex-column  ">'+ secouds +'<span class="title-offer"> ثانیه </span> '+'</span>';
 }
 

 

if ( distane < 0) {
  clearInterval(x);
     
 /* var productOffer = document.querySelectorAll(".special-price");
  var productPrice = document.querySelectorAll(".price-title .price-info");
  
  productPrice.forEach(Price =>{
    let Pricetitle = Price;
    checkOffer(Pricetitle)
  });
  
  productOffer.forEach(Price =>{
 let specialPrice = Price;
    checkOffer(specialPrice)

});

function  checkOffer (Pricetitle){
    if (specialPrice===true) {
        console.log(specialPrice)
         Pricetitle.style.display="block"
    } else {
        Pricetitle.style.display="none"
    }
    console.log(Pricetitle)
};*/
let Pricetitle =  document.querySelectorAll(".special-price-title");
for (var i= 0 ; i< Pricetitle.length; i++){
  PriceOffer= Pricetitle[i].querySelector(".price-offer");
  
  Pricetitle[i].childNodes[1].innerText="";
  PriceOffer.innerText="";
  
}

    //document.getElementById("demo").innerHTML= "";
    var y = document.getElementsByClassName("demos");
for (var i= 0 ; i< y.length; i++){
    y[i].innerHTML="";
}
   // document.getElementById("offer-end-text-inner").innerHTML= "به پایان رسیده";
    var g = document.getElementsByClassName("offer-end-text-inner");
    for (var i= 0 ; i< g.length; i++){
        g[i].innerHTML="به پایان رسیده";
    }
   // document.getElementById("offer-box-disabel").style.filter= "blur(2px)";
    var p = document.getElementsByClassName("offer-box-disabel");
    for (var i= 0 ; i< p.length; i++){
        p[i].style.filter= "blur(2px)";
    }
}
else {
 
  //document.getElementById("offer-end-text").setAttribute("id","offer-end-after");
  var k = document.getElementsByClassName("offer-end-text");
  for (var i= 0 ; i< k.length; i++){
      k[i].classList.remove("offer-end-text");
  }
  //document.getElementById("offer-end-text-inner").style.display ="none";
  var h = document.getElementsByClassName("offer-end-text-inner");
  for (var i= 0 ; i<h .length; i++){
      h[i].style.display= "none";


  }
  
}

},1000);


/*$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    rtl: true,
    items: 4,
    center:false,
    loop:true,
    margin:5,
    autoplay:true,
    nav:true,
    dot:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            center:true,
          
           
        },
       600:{
            items:1,
            center:true,

        },
       768:{
            items:2
        },
        1000:{
            items:4
        },

    }
});


  });*/

 
  



jQuery(function ($) {
    
    
    
    
    
    
    $("#slider1").owlCarousel({
    rtl: true,
    items: 4,
    center:true,
    loop:true,
    margin:5,
    autoplay:true,
    nav:true,
    dot:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
           
           
        },
       600:{
            items:2,
           

        },
       768:{
            items:3
        },
        1000:{
            items:4
        },

    }
});

$("#slider2").owlCarousel({
    rtl: true,
    items: 3,
    center:false,
    loop:true,
    merge:true,
    margin:5,
    autoWidth:true,
    autoplay:true,
    nav:true,
    dot:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
           
           
        },
       600:{
            items:2,
            

        },
       768:{
            items:2
        },
        1000:{
            items:3
        },

    }
});


$("#slider3").owlCarousel({
    rtl: true,
    items: 4,
    center:true,
    loop:true,
    margin:5,
    autoplay:true,
    nav:true,
    dot:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
           
           
        },
       600:{
            items:2,
           

        },
       768:{
            items:3
        },
        1000:{
            items:4
        },

    }
});



  });





  $(document).ready(function () {
    $("#login-null").click(function (e) { 
        e.preventDefault();
        $("#modal-body").hide();
        $("#modal-body1").show("fadeIn" )
        $("#modal-body1").slideUp();
       
       
        
       
     
        
       
      
      
    });
});




