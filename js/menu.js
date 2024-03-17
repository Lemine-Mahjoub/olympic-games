import { factGenerator } from "./utilis.js";
import { addClickEventById, hideElementById, flexElementById, blockElementById } from "./lib/dom.js";

/**
 * @module menu
 * @description Gere les menus principal et de selection de jeu ainsi que les faits interessants
 * @return {null}
 */
export function menu () {
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
	addClickEventById("startGame", function() {
		hideElementById('mainMenu');
		blockElementById('gameSelection');
	});

	// Selection de Jeu -> Menu Principal
	addClickEventById("retourMainMenu", function() {
		hideElementById('gameSelection');
		flexElementById('mainMenu');
	});
}
