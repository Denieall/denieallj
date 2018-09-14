// Get items from DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const potrait = document.querySelector(".potrait");

// Set Initial State Of Menu
let showMenu = false;

// Toggle menu button
menuBtn.addEventListener("click", () => {
	if (!showMenu) {
		menu.classList.add('show');
		menuBtn.classList.add('close');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		potrait.classList.add('show');

		navItems.forEach((item) => {
			item.classList.add('show');
		});

		showMenu = true;
	} else {
		menu.classList.remove('show');
		menuBtn.classList.remove('close');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		potrait.classList.remove('show');

		navItems.forEach(item => {
			item.classList.remove('show');
		});

		showMenu = false;
	}
});
