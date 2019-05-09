
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
      
    });
  });


