  $('.photo_slide_package').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(function(){

    $('.nutmenu').click(function(){
      $('.menuphai').addClass('ra');
      return false;
    })

    $('.tat').click(function(){
      $('.menuphai').removeClass('ra');
      return false;
    })

  })