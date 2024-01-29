
    jQuery(function ($) {
    
    
    
    
    
    
    $("#slider1").owlCarousel({
    rtl: true,
    items: 4,
    center:false,
    loop:true,
    margin:5,
    autoplay:true,
    nav:true,
    dot:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            center:true,
           
        },
       600:{
            items:2,
            

        },
       768:{
            items:2
        },
        1000:{
            items:4
        },

    }
});

$(".slider2").owlCarousel({
    rtl: true,
    items: 5,
    center:false,
    loop:true,
    margin:5,
    autoplay:true,
    nav:true,
    dot:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            center:false,
           
        },
       600:{
            items:2,
            

        },
       768:{
            items:2
        },
        1000:{
            items:4
        },

    }
});

  });