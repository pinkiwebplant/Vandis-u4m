document.addEventListener("click", function (e) {
	var target = e.target.closest(".u4m-events .pagination a");

	if (target) {
		e.preventDefault();
		var loadUrl = target.getAttribute("data-href");
		console.log("Loading:", loadUrl);

		fetch(loadUrl)
			.then(response => response.text())
			.then(html => {
			let parser = new DOMParser();
			let doc = parser.parseFromString(html, "text/html");
			let newContent = doc.querySelector(".postCardsInr");

			if (newContent) {
				document.querySelector(".postCardsWrap").innerHTML = newContent.innerHTML;
				console.log("Content loaded successfully");
			}
		})
			.catch(error => console.error("Error loading content:", error));
	}
});
