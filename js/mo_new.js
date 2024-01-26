$(document).ready(function () {
  let ww = $(window).width();

  $(window).resize(function () {
    ww = $(window).width();
    $(".mo_new_img_wrap li").css({
      width: ww,
    });
    console.log(ww);
  });

  $(".new_right").click(function () {
    $(".mo_new_img_wrap").animate({
      left: -ww,
    });
  });

  $(".new_left").click(function () {
    $(".mo_new_img_wrap").animate({
      left: 0,
    });
  });

  setInterval(function () {
    $(".new_right").trigger("click");
  }, 2000);
}); //end
