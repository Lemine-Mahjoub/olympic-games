import { factGenerator } from "./utilis.js";

/**
 * @module menu
 * @description Gere les menus principal et de selection de jeu ainsi que les faits interessants
 * @return {null}
 */
export async function menu () {
    lucide.createIcons();
    factGenerator();
	handleMenuSwitch();
}

/**
 * @function handleMenuSwitch
 * @description Gere le changement de menu
 * @returns {null}
 */
function handleMenuSwitch() {
	// Menu Principal -> Selection de Jeu
	document.getElementById('startGame').addEventListener('click', function() {
		document.getElementById('mainMenu').style.display = 'none';
		document.getElementById('gameSelection').style.display = 'block';
	});

	// Selection de Jeu -> Menu Principal
	document.getElementById('retourMainMenu').addEventListener('click', function() {
		document.getElementById('gameSelection').style.display = 'none';
		document.getElementById('mainMenu').style.display = 'flex';
	});
}

