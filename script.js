$(document).ready(function(){
    // navigation bar toggler

    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

   //navbar backgfround color change on scroll

   $(window).scroll(function(){
       let pos=$(window).scrollTop();
       if(pos >=100){
           $('.navbar').addClass('cng-navbar');
       }
       else{
           $('.navbar').removeClass('cng-navbar');
       }
   });

    //    vedio section
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    //team section

    $('.team .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:true,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // aura section

    $('.aura .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        nav:false,
        items:1
    
    })


});