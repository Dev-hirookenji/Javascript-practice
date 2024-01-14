$(document).ready(function () {
  $(".btn_hide").click(function () {
    $(".p2").toggle(1500, function () {
      console.log("Toggled");
    });
  });
  $(".btn_show").click(function () {
    $(".p2").fadeToggle("low", function () {
      console.log("Toggled");
    });
  });
  $(".animatebtn").click(function () {
    $(".box").animate({
      width: "200px",
      height: "200px",
    });
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
