$(".tab-item .tab-inner h5").click(function () {
  var $tabItem = $(this).closest(".tab-item");
  var tabId = $tabItem.attr("data-id");
  console.log("Clicked Tab ID:", tabId);

  // Toggle active class for the clicked tab
  $tabItem.toggleClass("acc-open").siblings().removeClass("acc-open");

  // Display content for the active tab and hide for siblings
  if ($tabItem.hasClass("acc-open")) {
    $tabItem.find(".toggle_content").css("display", "block"); // Show immediately
  } else {
    $tabItem.find(".toggle_content").css("display", "none"); // Hide immediately
  }
  $tabItem.siblings().find(".toggle_content").css("display", "none");

  // Handle corresponding image/video section
  $(".tab-content-section .cnt-item").each(function () {
    var dataSrc = $(this).attr("data-src");
    if (tabId === dataSrc) {
      let getThis = $(this);
      $(getThis).addClass("acc-open").siblings().removeClass("acc-open");
    }
  });
});
