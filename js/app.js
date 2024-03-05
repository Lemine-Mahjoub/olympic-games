import {menu} from './menu.js';
import { athletisme } from './games/athletisme.js';



/**
 * @function choices
 * @description Permet de choisir le jeu
 * @returns {null}
 */
const choices = () => {
    const hideGamesMenu = () => {
        document.getElementById('gameSelection').style.display = 'none';
        document.querySelector('body').style.background = '#fff';
    }
    document.getElementById('game1').addEventListener('click', function() {choseAthletisme(); hideGamesMenu();});
    document.getElementById('game2').addEventListener('click', function() {choseHurdle(); hideGamesMenu();});
    document.getElementById('game3').addEventListener('click', function() {chosePoids(); hideGamesMenu();});
    document.getElementById('game4').addEventListener('click', function() {choseNatations(); hideGamesMenu();});
}

/**
 * @function choseAthletisme
 * @description Lance le jeu d'athletisme
 * @returns {null}
 */
const choseAthletisme = () => {
    athletisme();
}

/**
 * @function choseHurdle
 * @description Lance le jeu de haies
 * @returns {null}
 */
const choseHurdle = () => {
    console.log('hurdle');
}

/**
 * @function chosePoids
 * @description Lance le jeu de lancer de poids
 * @returns {null}
 */
const chosePoids = () => {
    console.log('poids');
}

/**
 * @function choseNatations
 * @description Lance le jeu de natations
 * @returns {null}
 */
const choseNatations = () => {
    console.log('natations');
}

const main = () => {
    menu();
    choices();
}

main();