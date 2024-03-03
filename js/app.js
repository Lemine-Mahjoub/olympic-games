import {menu} from './menu.js';

const choices = () => {
    document.getElementById('game1').addEventListener('click', function() {athletisme();});
    document.getElementById('game2').addEventListener('click', function() {hurdle();});
    document.getElementById('game3').addEventListener('click', function() {poids();});
    document.getElementById('game4').addEventListener('click', function() {natation();});
}


const athletisme = () => {
    console.log('athletisme');
}

const hurdle = () => {
    console.log('hurdle');
}

const poids = () => {
    console.log('poids');
}

const natation = () => {
    console.log('natations');
}


const main = () => {
    menu();
    choices();
}


main();