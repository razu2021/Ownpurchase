// as a jQuery plugin
$('#main-nav').hcOffcanvasNav({
  // options here
  width: 350,
});

// as a Vanilla JS plugin
var myNav = new hcOffcanvasNav('#main-nav', {
    // options here
});
// owl carusel 
$(document).ready(function(){
  $(".main-carousel-index").owlCarousel({
    items:1,
      loop:true,
      autoplay:true,
      responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        992:{
            items:1,
            nav:false
        },
        1200:{
            items:1,
            loop:true,
        }
    }
  });
  
});
// catagory slider start here 
$(document).ready(function(){
  $(".main-carousel-catagory").owlCarousel({
      items:8,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        992:{
            items:2,
            nav:false
        },
        1200:{
            items:8,
            loop:true,
            nav:true

        }
    }
  });
  
});

$(document).ready(function(){
  $(".index-product-slider").owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
      },
      576:{
          items:1,
      },
      992:{
          items:3,
          nav:false
      },
      1200:{
          items:5,
          loop:true,
          nav:true

      }
  }
  });
});




$(document).ready(function(){
  $(".index-visa-slider").owlCarousel({
    items:5,
      loop:true,
      autoplay:true,
      responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        992:{
            items:1,
            nav:false
        },
        1200:{
            items:5,
            loop:true,
        }
    }
  });
  
});


