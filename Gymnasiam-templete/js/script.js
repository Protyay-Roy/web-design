$(function() {
    $('#banner_part').slick({
        dots: true,
        arrows:false,
        slidesToScroll:1,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:4000,
      });

      $('.team_slide').slick({
        dots: false,
        arrows:true,
        slidesToScroll:1,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow: '<i class="fas fa-chevron-left pre_slide"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_slide"></i>',
      });

    $('.test_banner').slick({
        dots: true,
        arrows:false,
        slidesToScroll:1,
        slidesToShow: 1,
        autoplay:false,
        autoplaySpeed:2000,
      });
      $('.test_slider').slick({
        dots: true,
        arrows:false,
        slidesToScroll:1,
        slidesToShow: 1,
        autoplay:false,
        autoplaySpeed:2000,
      });

    $('.counter').counterUp({
        delay: 20,
        time: 2000
      });

    $('.venobox').venobox();

    // $('.c_logo').slick({
    //   dots: false,
    //   arrows:true,
    //   slidesToScroll:1,
    //   slidesToShow: 5,
    //   autoplay:true,
    //   autoplaySpeed:2000,
    //   prevArrow: '<i class="fas fa-chevron-circle-left lg_prev"></i>',
    //   nextArrow: '<i class="fas fa-chevron-circle-right lg_next"></i>',
    // });
    $('.sm_logo').slick({
      dots: false,
      arrows:false,
      slidesToScroll:1,
      slidesToShow: 1,
      autoplay:true,
      autoplaySpeed:2000,
    });
    $('.md_logo').slick({
      dots: false,
      arrows:false,
      slidesToScroll:1,
      slidesToShow: 4,
      autoplay:true,
      autoplaySpeed:2000,
    });

    var manu_fx = $('#about_main').offset().top;
    $(window).scroll(function(){
      var scrolling=  $(this).scrollTop();

      if(610 < scrolling){
        $('.navbar').addClass('menu_fix'); 
      }
      else{
        $('.navbar').removeClass('menu_fix');
      }
    
    });
    var manu_out = $('#menu_part').offset().top;
    $(window).scroll(function(){
      var scrolling=  $(this).scrollTop();

      if(manu_out < scrolling){
        $('.navbar').addClass('menu_out'); 
      }
      else{
        $('.navbar').removeClass('menu_out');
      }
    
    });
    // smooth scroll

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus(); 
        };
      });
    }
  }
});
  // btn toggle ....
   

});