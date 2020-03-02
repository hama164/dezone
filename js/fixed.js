$(function () {
    var startPos = 0,winScrollTop = 0;


    $(window).on('scroll',function(){
      winScrollTop = $(this).scrollTop();

      if (($(this).scrollTop() > '800') && (winScrollTop <= startPos)) {
          $('#menu_block').addClass('fixed');
      } else {
          $('#menu_block').removeClass('fixed');
      }
      startPos = winScrollTop;
  });
});

  
