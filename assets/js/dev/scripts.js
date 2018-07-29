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
});
