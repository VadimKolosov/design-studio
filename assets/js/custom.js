$(document).ready(function() {
  hamburgerMenu();
  aboutImage();
  closeButton();
  slideUpContent();
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
    if($('.header--menu-wrapper').hasClass('show-menu')) {
      $('.hamburger').addClass('hamburger-position');
    } else {
      $('.hamburger').removeClass('hamburger-position');
    }
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

function aboutImage() {
  $('.about--image').click(function() {
    $('.about--image-wrapper').addClass('active');
    $('.about--image').css('height', '20%').removeClass('active-image');
    $(this).addClass('active-image');
  var $this = $('.about--image-wrapper');
    if ($this.hasClass('active')) {
      $('.button-none').css('opacity', '1');
    }
  });
}

function closeButton () {
  $('.button-close').click(function() {
    $('.about--image-wrapper').removeClass('active');
    $('.button-none').css('opacity', '0');
  });
}

function slideUpContent() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log($(window).scrollTop());
    if (wScroll <= 300) {
      $('.about--list-content-wrapper, .about--main-content').each(function(i) {
        var elm = $(this);
        setTimeout(function() {
          elm.addClass('slide-up');
        }, i * 45);
      });
    }
  });
}
