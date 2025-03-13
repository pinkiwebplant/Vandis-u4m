$(".mobile-trigger").click(function () {
  $("body").toggleClass("mobile-open");
  $(".nav-wrap").slideToggle();
  $("html").toggleClass("hdrOpenMob");
});

$(".nav .child-trigger").click(function (event) {
  $(this).parents(".menu-item").siblings().removeClass("childOpen");
  $(this).parents(".menu-item").toggleClass("childOpen");
  $(this).parents(".menu-item").children(".sub-menu-wrapper").slideToggle(250);
  $(this)
    .parents(".menu-item")
    .siblings()
    .children(".sub-menu-wrapper")
    .slideUp(250);
  $("html").toggleClass("hdrOpen");
  event.preventDefault();
});
