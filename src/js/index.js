/**
 * A exécuter qu'une fois
 */

// Mon age
const today = new Date();
const bDate = new Date(1999, 0, 27);
let age = today.getFullYear() - bDate.getFullYear();
const mDiff = today.getMonth() - bDate.getMonth();
const dDiff = today.getDate() - bDate.getDate();
// si on n'a pas encore atteint l'anniversaire cette année, soustraire 1
if (mDiff < 0 || (mDiff === 0 && dDiff < 0)) {
	age--;
}
document.getElementById('age').innerHTML = age;
//document.getElementById('annee').innerHTML = today.getFullYear();

// Aspect visuel
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
if (window.scrollY > 400) {
	navbar.classList.replace('transparent', 'bg-white');
	navbar.classList.replace('navbar-dark', 'navbar-light');
	logo.src = 'src/img/autre/logo_dark.png';
} else {
	navbar.classList.replace('bg-white', 'transparent');
	navbar.classList.replace('navbar-light', 'navbar-dark');
	logo.src = 'src/img/autre/logo.png';
}



// Animation
AOS.init();

/**
 * A éxécuter plusieurs fois
 */
window.addEventListener('scroll', () => {
	if (window.scrollY > 400) {
		navbar.classList.replace('transparent', 'bg-white');
		navbar.classList.replace('navbar-dark', 'navbar-light');
		logo.src = 'src/img/autre/logo_dark.png';
	} else {
		navbar.classList.replace('bg-white', 'transparent');
		navbar.classList.replace('navbar-light', 'navbar-dark');
		logo.src = 'src/img/autre/logo.png';
	}	
});
