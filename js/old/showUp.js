$(function() {
  $(document).ready(function
  () {

  $('.container_header').addClass('showUp');

  });
});

$(function() {
  $(window).scroll(function
  () {

  $('.terminal').addClass('showUp');

  });
});

/* picture */
var pictureOffset;
/* map */
var mapOffset;

$(window).on('load', function(){
  pictureOffset = $('#picture').offset().top + $('#picture').outerHeight();
  // pictureOffset = $('#picture').outerHeight();
  // mapOffset = $('#map').offset().top + $('#map').outerHeight();
  mapOffset = $('#map').offset().top;
});

$(window).scroll(function(){
  if( $(window).scrollTop() + $(window).height() > pictureOffset){
    $('#picture').addClass('showUp');
  } else 
    if( $(window).scrollTop() + $(window).height() > mapOffset){
      $('#map').addClass('showUp');
    } else {}
  });
  

