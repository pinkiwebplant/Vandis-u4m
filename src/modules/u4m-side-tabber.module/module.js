document.addEventListener("DOMContentLoaded", function () {
  // Function to adjust content height
  function adjustContentHeight() {
    let activeTab = document.querySelector(".tab-item.acc-open");
    if (activeTab) {
      let contents = activeTab.querySelectorAll(".content, .toggle_content");
      contents.forEach(function (content) {
        // Set height to the full content height
        content.style.height = content.scrollHeight + "px";
        content.style.transition = "height 0.3s ease"; // Smooth transition
      });
    }
  }

  // Automatically open the first tab and its content on page load
  let firstActiveTab = document.querySelector(".tab-item.acc-open");
  if (firstActiveTab) {
    adjustContentHeight();
  }

  // Add click event for tab titles
  let tabTitles = document.querySelectorAll(".tab-ttl");
  tabTitles.forEach(function (tabTitle) {
    tabTitle.addEventListener("click", function () {
      let tabItem = this.closest(".tab-item");

      // Select both .content and .toggle_content elements within the tab
      let contents = tabItem.querySelectorAll(".content, .toggle_content");

      // Get the tab ID
      let tabId = tabItem.getAttribute("data-id");
      console.log("Clicked Tab ID:", tabId);

      // If the tab content is already open, close it
      if (tabItem.classList.contains("acc-open")) {
        tabItem.classList.remove("acc-open");
        contents.forEach(function (content) {
          content.style.height = "0"; // Collapse content
        });
      } else {
        // Otherwise, close all other tab contents
        let allTabs = document.querySelectorAll(".tab-item");
        allTabs.forEach(function (item) {
          item.classList.remove("acc-open");
          let itemContents = item.querySelectorAll(".content, .toggle_content");
          itemContents.forEach(function (itemContent) {
            itemContent.style.height = "0"; // Collapse content
          });
        });

        // Open the clicked tab content
        tabItem.classList.add("acc-open");
        contents.forEach(function (content) {
          content.style.height = content.scrollHeight + "px"; // Expand content to its full height
        });
      }

      // Handle corresponding image/video section (similar to the jQuery part)
      let tabContentSections = document.querySelectorAll(
        ".tab-content-section .cnt-item"
      );
      tabContentSections.forEach(function (item) {
        let dataSrc = item.getAttribute("data-src");
        if (tabId === dataSrc) {
          item.classList.add("acc-open");
          let siblings = item.parentElement.children;
          for (let sibling of siblings) {
            if (sibling !== item) {
              sibling.classList.remove("acc-open");
            }
          }
        }
      });
    });
  });

  // Resize event to adjust the height of active tab content
  window.addEventListener("resize", function () {
    adjustContentHeight();
  });
});
