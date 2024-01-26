$(document).ready(function () {
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    top_h = $("header").height();
    ww = $(window).width();
    // console.log(top_h);

    if (sct >= top_h && ww >= 960) {
      $("header").css({
        position: "fixed",
        left: 0,
        top: 0,
        height: 80,
      });
      $(".top_btn").css({
        opacity: 1,
      });
    } else if (sct < top_h && ww >= 960) {
      $("header").css({
        position: "relative",

        height: 100,
      });
      $(".top_btn").css({
        opacity: 0,
      });
    }
  });

  $(".top_btn").click(function () {
    $("html, body").animate({
      scrollTop: 0,
    });
  });
});
