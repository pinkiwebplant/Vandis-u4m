document.querySelectorAll(".u4m-team-cards .cmTeamCards .cmcardItem:not(.no-bio)").forEach((cardItem) => {
  const bioBtns = cardItem.querySelectorAll(".cmBioBtnInner"); 
  const popupItems = cardItem.querySelectorAll(".full-screen");  
  const exitButton = cardItem.querySelector(".exit-wrap");  
  
  const closeButton = document.querySelectorAll(".full-screen .exit-wrap");  

  bioBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      bioBtns.forEach((btn) => btn.classList.remove("active"));
      popupItems.forEach((pane) => pane.classList.remove("active"));

      this.classList.add("active");
      const fullScreenTab = document.getElementById(tabId);
      if (fullScreenTab) {
        fullScreenTab.classList.add("active");
        document.body.classList.add("full-screen-active"); 
      }
    });
  });
  if (closeButton) {
    closeButton.forEach(function(button) {
      button.addEventListener("click", function () {
        document.body.classList.remove("full-screen-active");
        var popupItems = document.querySelectorAll(".full-screen");
        popupItems.forEach((pane) => pane.classList.remove("active"));
        bioBtns.forEach((btn) => btn.classList.remove("active"));
      });
    });


  }
});




