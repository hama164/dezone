
var work_Offset;
var skill_Offset;
var about_Offset;
var contact_Offset;

$(window).on('load', function(){
  work_Offset = 1200;
  skill_Offset = 2800;
  // skill_Offset = 2350;
  about_Offset = 3650;
  // about_Offset = 2850;
  contact_Offset = 4150;
  // contact_Offset = 2950;
  // contact_Offset = 3350;
});

$(window).scroll(function(){


  if( $(window).scrollTop() + $(window).height() > work_Offset){
    $('#work_box').addClass('showUp');
  } else {}
  if( $(window).scrollTop() + $(window).height() > skill_Offset){
    $('#skill_box').addClass('showUp');
  } else {}
  if( $(window).scrollTop() + $(window).height() > about_Offset){
    $('#about_box').addClass('showUp');
  } else {}
  if( $(window).scrollTop() + $(window).height() > contact_Offset){
    $('#contact_box').addClass('showUp');
  } else {}

});

  

