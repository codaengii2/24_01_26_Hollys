$(document).ready(function () {
  let i = 3;

  $(".main_wrap").click(function () {
    i--;
    if (i == 0) {
      $(".main_img_wrap li ").fadeIn();
      i = 3;
    } else {
      $(".main_img_wrap li ").eq(i).fadeOut();
    }
    // console.log(i);
  });

  function time() {
    si = setInterval(function () {
      $(".main_wrap").trigger("click");
    }, 3000);
  }

  time();

  let e = 0;
  let ww = $(window).width();
  $(window).resize(function () {
    ww = $(window).width();
    $(".mo_main_img_wrap li").css({
      width: ww,
    });
  });

  $(".mo_main_wrap").click(function () {
    e++;
    if (e >= 4) {
      e = 0;
    }
    $(".mo_main_img_wrap").animate({
      left: -ww * e,
    });
    // console.log(mo_w);
  });

  function time_mo() {
    si = setInterval(function () {
      $(".mo_main_wrap").trigger("click");
    }, 3000);
  }

  time_mo();
});
