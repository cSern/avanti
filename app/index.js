/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// Quick element binding to OnClick event
const bindToOnClick = (id, handler) => document.getElementById(id).addEventListener('click', handler);

// Make sure the page has loaded all DOM data first
document.addEventListener('DOMContentLoaded', () => {
	// Local page elements - pulled into closure of bindings
	const mainPage = document.getElementById('main');
	const aboutPage = document.getElementById('about');
	
	bindToOnClick('about-open', () => {
		mainPage.classList.add('page-up');
		aboutPage.classList.remove('page-down');
	});
	
	bindToOnClick('about-close', () => {
		mainPage.classList.remove('page-up');
		aboutPage.classList.add('page-down');
	});
});
