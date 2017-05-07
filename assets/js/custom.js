$(document).ready(function() {
  hamburgerMenu();
  leftColSlide();
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

function leftColSlide() {
  $('.about--image').click(function() {
    $('.about--image-wrapper').addClass('active');
    $('.about--image').css('height', '20%').removeClass('active-image');
    $(this).addClass('active-image');
  var $this = $('.about--image-wrapper');
    if ($this.hasClass('active')) {
      $('.button-none').css('opacity', '1');
    }
  });
  $('.services--tech-desc').click(function() {
    $('.services--image-wrapper').addClass('active');
    $('.services--tech-desc').addClass('show-tech');
  });
}

function closeButton () {
  $('.first-btn').click(function() {
    $('.about--image-wrapper').removeClass('active');
    $('.button-none').css('opacity', '0');
  });
  $('.second-btn').click(function() {
    $('.services--image-wrapper').toggleClass('active');
    $('.services--tech-desc').toggleClass('show-tech');
  });
  $('.third-btn').click(function() {
    $('.contact--api').removeClass('active');
    $('.map-icon, .contact--api-fade ').fadeIn('300');
  });
}

function slideUpContent() {
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // CONSOLE LOG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // console.log($(window).scrollTop());
    if (wScroll > 300) {
      $('.about--list-content-wrapper, .about--main-content').each(function(i) {
        var elm = $(this);
        setTimeout(function() {
          elm.addClass('slide-up');
        }, i * 45);
      });
    }
    if (wScroll > 960) {
      $('.services--top-level, .services--bottom-level').each(function(i) {
        var elm = $(this);
        setTimeout(function() {
          elm.addClass('slide-up');
        }, i * 45);
      });
    }
  });
}

function initMap(){
  $('.contact--api-fade').click(function() {
    if ($(window).width() > 768 ) {
      $('.contact--api').addClass('active');
    }
    setTimeout(function initMap() {
      var designStudio = {
        path: 'M17.7 10.3c-8.9 1-8.6 14.1.2 14.8 1.1 0 1.1.2 1.1-.2 0-.2 0-10.4.1-10.4h4.8c14 0 15 20.4 1.8 22.1 3.2-4.9-.5-11.5-6.2-11.4-.5-.1-.5-.2-.5.7 0 .1 0 14 .1 14.1h5.6c19.1-1 20.7-32.9-7-29.7zM25 49.5C11.5 49.5.5 38.6.5 25.1.5 11.6 11.5.7 25 .7s24.5 10.9 24.5 24.5c-.1 13.4-11 24.3-24.5 24.3zm0-45.1c-11.4 0-20.7 9.3-20.7 20.7S13.6 45.9 25 45.9s20.7-9.3 20.7-20.7S36.4 4.4 25 4.4zm-7.1 47.2H32l-7 5.7-7.1-5.7z',
        fillColor: 'black',
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 0
        };
      var myLatLng = {lat: 36.168577, lng: -115.285165};

      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        zoom: 16
      });
      marker = new google.maps.Marker ({
        position: {lat: 36.168977, lng: -115.285965},
        map: map,
        icon: designStudio,
        animation: google.maps.Animation.BOUNCE
        });
      var styledMapType = [
        {
          "stylers": [
            {"saturation": -41 }, { "hue": "#ff8000" }, { "lightness": -6 }, { "gamma": 0.64 }
          ]
        }
      ]
      map.setOptions({styles: styledMapType});
    }, 450);

  $('.map-icon, .contact--api-fade ').fadeOut('300');
  });
}
