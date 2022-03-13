
  

  
  
  
  const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});

(function($) {
$(function() {
var $header = $(‘.menu2’);
// Nav Fixed
$(window).scroll(function() {
if ($(window).scrollTop() > 350) {
$header.addClass(‘fixed’);
} else {
$header.removeClass(‘fixed’);
}
});
// Nav Toggle Button
$(‘#nav-toggle, #global-nav ul li a’).click(function(){
$header.toggleClass(‘open’);
});
});
})(jQuery);
  
