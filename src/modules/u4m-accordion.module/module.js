
document.addEventListener('DOMContentLoaded', function () {
	const accordionButtons = document.querySelectorAll('.title');

	accordionButtons.forEach(function (button, index) {
		
		button.addEventListener('click', function () {
			const content = document.getElementById(button.getAttribute('aria-controls'));
			const isExpanded = button.getAttribute('aria-expanded') === 'true';

			
			accordionButtons.forEach(function (otherButton) {
				const otherContent = document.getElementById(otherButton.getAttribute('aria-controls'));
				if (otherButton !== button) {
					otherButton.setAttribute('aria-expanded', 'false');
					otherContent.style.display = 'none';
					otherButton.parentElement.classList.remove('active'); 
				}
			});

		
			if (isExpanded) {
				button.setAttribute('aria-expanded', 'false');
				content.style.display = 'none';
				button.parentElement.classList.remove('active');  
			} else {
				button.setAttribute('aria-expanded', 'true');
				content.style.display = 'block';
				button.parentElement.classList.add('active');  
			}
		});
	});

	const firstButton = accordionButtons[0];
	const firstContent = document.getElementById(firstButton.getAttribute('aria-controls'));
	firstButton.parentElement.classList.add('active'); 
	firstButton.setAttribute('aria-expanded', 'true');
	firstContent.style.display = 'block';
});





