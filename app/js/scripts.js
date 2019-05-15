
$( function() {
    $( "#tabs" ).tabs();
    $("#products-tabs").tabs();
  } );

  $(document).ready(function(){
    $('.trending-products-carousel').slick({
      dots:true,
      autoplay: true,
      autoplaySpeed:5000,	
      infinite: true,
      slidesToShow: 4,
      slidesthoshow:0, 
      responsive:[
        {
          breakpoint:1400,
          settings:{
            slidesToShow: 3,
            slidesthoshow:0,

          }
        },
        {
          breakpoint:1005,
          settings:{
            slidesToShow: 2,
            slidesthoshow:0,

          }
        },
        {
          breakpoint:678,
          settings:{
            slidesToShow: 1,
            slidesthoshow:0,

          }
        },
      ]
      
    });
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from:0,
    to: 600,
    skin:"round"
 
});

    
  

  
  


