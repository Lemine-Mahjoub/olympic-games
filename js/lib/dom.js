/**
 * Ajoute un écouteur d'événement de clic à un élément avec un ID spécifique.
 *
 * @param {string} id - L'ID de l'élément.
 * @param {function} callback - La fonction à exécuter lorsque l'élément est cliqué.
 */
export function addClickEventById(id, callback) {
	getElementById(id).addEventListener('click', callback);
}

/**
 * Modifie la propriété d'affichage d'un élément avec un ID spécifique.
 *
 * @param {string} id - L'ID de l'élément.
 * @param {string} display - La nouvelle valeur de la propriété d'affichage.
 */
export function changeDisplayById(id, display) {
	getElementById(id).style.display = display;
}

/**
 * Cache un élément avec un ID spécifique en changeant sa propriété d'affichage en 'none'.
 *
 * @param {string} id - L'ID de l'élément.
 */
export function hideElementById(id) {
	changeDisplayById(id, 'none');
}

/**
 * Définit un élément avec un ID spécifique pour s'afficher en tant que bloc.
 *
 * @param {string} id - L'ID de l'élément.
 */
export function blockElementById(id) {
	changeDisplayById(id, 'block');
}

/**
 * Définit un élément avec un ID spécifique pour s'afficher en tant que conteneur flex.
 *
 * @param {string} id - L'ID de l'élément.
 */
export function flexElementById(id) {
	changeDisplayById(id, 'flex');
}

/**
 * Récupère un élément avec un ID spécifique.
 *
 * @param {string} id - L'ID de l'élément.
 */
export function getElementById(id) {
	return document.getElementById(id);
}

/**
 * Recupere un element quelconque
 * @param {string} selector - le selecteur de l'element
 */
export function getElement(selector) {
	return document.querySelector(selector);
}

/**
 * Cache un élément.
 * @param {HTMLElement} element - L'élément à cacher.
 */
export function hideElementByQuery(selecteur) {
	changeDisplayById(getElement(selecteur) , 'none');
}