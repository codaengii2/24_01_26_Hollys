$(document).ready(function () {
  $(".cate li").click(function () {
    i = $(this).index();

    $(".cate li").removeClass("active");
    $(".cate li").eq(i).addClass("active");

    // console.log(i);
    $(".cate_con").css({ display: "none" });
    $(".cate_con")
      .eq(i)
      .css({
        display: "flex",
      })
      .fadeIn(500);
  });

  $(".cate_con").first().css({
    display: "flex",
  });
});
