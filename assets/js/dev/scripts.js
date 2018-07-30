$(document).ready(function() {

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // SHRINK FIXED HEADER
  $(function() {
    var shrinkHeader = 1;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $('.siteheader').addClass('shrink');
        $('body').addClass('shrink');
      } else {
        $('.siteheader').removeClass('shrink');
        $('body').removeClass('shrink');
      }
    });
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });

  // SOCIAL SHARE
  $('.share-button').click(function(e) {
    e.preventDefault();
    window.open(
      $(this).attr('href'),
      'fbShareWindow',
      'height=450, width=550, top=' +
      ($(window).height() / 2 - 275) +
      ', left=' +
      ($(window).width() / 2 - 225) +
      ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
    );
    return false;
  });

  // GOOGLE ANALYTICS - TRACK SOCIAL SHARE
  var ga = window[window['GoogleAnalyticsObject'] || 'ga'];
  if (typeof ga == 'function') {

    var buttons = document.getElementsByClassName('share-button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function handleOutboundLinkClicks(event) {
        ga('send', 'event', {
          eventCategory: 'Outbound Link',
          eventAction: 'click',
          eventLabel: event.target.href,
          transport: 'beacon'
        });
      });
    }
  }

});
