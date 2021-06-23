(function ($) {
  "use strict";

  //Popup elements

  $(".popup-image").magnificPopup({
    type: "image",
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
    },
  });

  $(".popup-youtube, .popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // Site navigation setup

  var header = $(".header"),
    pos = header.offset();

  $(window).scroll(function () {
    if ($(this).scrollTop() > pos.top + 50 && header.hasClass("default")) {
      header.fadeOut("fast", function () {
        $(this).removeClass("default").addClass("switched-header").fadeIn(200);
        $(".scroll-to-top").addClass("active");
      });
    } else if (
      $(this).scrollTop() <= pos.top + 50 &&
      header.hasClass("switched-header")
    ) {
      header.fadeOut("fast", function () {
        $(this).removeClass("switched-header").addClass("default").fadeIn(100);
        $(".scroll-to-top").removeClass("active");
      });
    }
  });

  // Scroll to

  $("a.scroll").smoothScroll({
    speed: 800,
    offset: -180,
  });

  $(".countdown")
    .countdown("2021/8/28 15:00:00 ")
    .on("update.countdown", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 ">%D</span> <span class="label ">Day%!d</span></div></div> ' +
            '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%H</span> <span class="label">Hour%!H</span></div></div> ' +
            '<div class="col"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1">%M</span> <span class="label">Minute%!M</span></div></div> ' +
            '<div class="col"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1">%S</span> <span class="label">Second%!S</span></div></div>'
        )
      );
    });
})(jQuery);
