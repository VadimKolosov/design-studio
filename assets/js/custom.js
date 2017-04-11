$(document).ready(function() {
  hamburgerMenu();
});

function hamburgerMenu() {
  $('.hamburger').click(function() {
    $(this).toggleClass('slide-in-cross');
    $('.header--menu-wrapper').toggleClass('show-menu');
    $('.line-top').toggleClass('top-cross');
    $('.line-middle').toggleClass('middle-cross');
    $('.line-bottom').toggleClass('bottom-cross');
    $('.header--link-wrapper a, .header--contact-wrapper p, .header--social-wrapepr').each(function(i) {
      var elm = $(this);
      setTimeout(function() {
        elm.toggleClass('slide-up');
      }, i * 45);
    });
  });
$('.hamburger').hover(function() {
  var $this = $('.header--menu-wrapper');
  if ($this.hasClass('show-menu')) {
    $('.line-top').addClass('top-arrow-right');
    $('.line-middle').addClass('middle-arrow-right');
    $('.line-bottom').addClass('bottom-arrow-right');
  }

  $('.line-top').addClass('top-arrow-left');
  $('.line-bottom').addClass('bottom-arrow-left');

}, function() {
  $('.line-top').removeClass('top-arrow-left top-arrow-right');
  $('.line-middle').removeClass('middle-arrow-right');
  $('.line-bottom').removeClass('bottom-arrow-left bottom-arrow-right');

});
}

var $this = $('.header--menu-wrapper');
if ($this.hasClass('show-menu')) {
  $('.line-top').addClass('top-cross');
  $('.line-middle').addClass('middle-cross');
  $('.line-bottom').addClass('bottom-cross');
}
