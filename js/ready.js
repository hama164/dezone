$(function() {
  $(document).ready(function
  () {
    
    setTimeout(function() {
      $('#top_text').addClass('showUp');
      }, 1000);

    setTimeout(function() {
      $('#line').addClass('long');
      }, 2000);

    setTimeout(function() {
      $('#gray').addClass('none');
      }, 4000);

    setTimeout(function() {
      $('#line.long').removeClass('long');
      $('#line').addClass('none');
      }, 4000);

    setTimeout(function() {
      $('#enter_wrap').addClass('block');
      }, 6000);
      

  });
});

$(function() {
  var $allMsg = $('.typ');
  var $wordList = $('.typ').html().split("");
  $('.typ').html("");
  $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({ opacity: 0 });

      setTimeout(function() {

      newEL.appendTo($allMsg);
      newEL.delay(idx * 70);
      newEL.animate({ opacity: 1 }, 2000);
     }, 4000);
});
});

$(function() {
  var $allMsg = $('.typ1');
  var $wordList = $('.typ1').html().split("");
  $('.typ1').html("");
  $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({ opacity: 0 });

      setTimeout(function() {

      newEL.appendTo($allMsg);
      newEL.delay(idx * 70);
      newEL.animate({ opacity: 1 }, 2000);
     }, 4000);
});
  var $allMsg = $('.typ2');
  var $wordList = $('.typ2').html().split("");
  $('.typ2').html("");
  $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({ opacity: 0 });

      setTimeout(function() {

      newEL.appendTo($allMsg);
      newEL.delay(idx * 70);
      newEL.animate({ opacity: 1 }, 2000);
     }, 5000);
});
});


