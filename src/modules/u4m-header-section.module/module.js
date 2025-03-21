document
  .querySelector(".mobile-trigger")
  .addEventListener("click", function () {
    const body = document.body;
    const navWrap = document.querySelector(".nav-wrap");
    const html = document.documentElement;

    // Toggle mobile-open class on the body
    body.classList.toggle("mobile-open");

    // Also toggle hdrOpenMob class on the documentElement
    html.classList.toggle("hdrOpenMob");

    // When the mobile-open class is removed, remove childOpen class from all menu items
    if (!body.classList.contains("mobile-open")) {
      const allMenuItems = document.querySelectorAll(".menu-item");
      allMenuItems.forEach((menuItem) => {
        menuItem.classList.remove("childOpen");
        const subMenu = menuItem.querySelector(".sub-menu-wrapper");
        if (subMenu) {
          slideUp(subMenu); // Close any open sub-menu
        }
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".child-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const parentMenuItem = this.closest(".menu-item");
      const subMenu = parentMenuItem.querySelector(".sub-menu-wrapper");

      // Close all sibling menu items and slide them up
      const allMenuItems = document.querySelectorAll(".menu-item");
      allMenuItems.forEach((menuItem) => {
        if (menuItem !== parentMenuItem) {
          menuItem.classList.remove("childOpen");
          const siblingSubMenu = menuItem.querySelector(".sub-menu-wrapper");
          if (siblingSubMenu) {
            slideUp(siblingSubMenu);
          }
        }
      });

      // Toggle current menu item
      parentMenuItem.classList.toggle("childOpen");
      if (subMenu.style.display === "block") {
        slideUp(subMenu);
      } else {
        slideDown(subMenu);
      }
    });
  });

  function slideDown(element) {
    element.style.display = "block";
    element.style.height = "0px";
    let height = element.scrollHeight + "px";
    element.style.transition = "height 0.3s ease";
    element.style.height = height;
  }

  function slideUp(element) {
    element.style.height = "0px";
    setTimeout(function () {
      element.style.display = "none";
      element.style.height = "";
    }, 300);
  }
});
