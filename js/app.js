import {menu} from './menu.js';
import { athletisme } from './games/athletisme.js';

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

const choseAthletisme = () => {
    athletisme();
}

const choseHurdle = () => {
    console.log('hurdle');
}

const chosePoids = () => {
    console.log('poids');
}

const choseNatations = () => {
    console.log('natations');
}

const main = () => {
    menu();
    choices();
}

main();