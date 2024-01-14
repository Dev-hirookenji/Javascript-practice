$(document).ready(function () {
  $(".btn_toggle").click(function () {
    $(".p1").toggle(function () {
      console.log("toggled");
    });
  });
  $(".btn_fade").click(function () {
    $(".p2").fadeToggle("slow", function () {
      console.log("faded out");
    });
  });
  $(".animatebtn").click(function () {
    $(".box").animate({
      width: "200px",
      height: "200px",
    });
    console.log("animated");
  });
  //!h and s keypressed hide and show
  // $("body").keydown(function (event) {
  //   if (event.which === 72) {
  //     $(".p2").hide();
  //   }
  //   if (event.which === 83) {
  //     $(".p2").show();
  //   }
  // });
});
