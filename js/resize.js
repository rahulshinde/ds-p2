$(document).ready( function(){
  // root size
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);

  $('#about_link').on('click', function(){
    $('#about').toggleClass('show');
  });
})

changeRootFontSize = function() {
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
}