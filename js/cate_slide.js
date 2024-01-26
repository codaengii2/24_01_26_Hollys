$(document).ready(function () {
  let i = 0;
  $(".right").click(function () {
    if (i <= 4) {
      i++;
      $(".cate_con").animate(
        {
          left: -275 * i,
        },
        500,
        function () {
          $(".cate_con").find(".cate_con li a").eq(0).appendTo(".cate_con");
        }
      );
      console.log(i);
    }
  });
}); //end
