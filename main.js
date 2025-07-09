import { Tache } from './modules/tache.js';

//Ajout tache dans main pour tester
const tache = new Tache("Vacances", "Partir en vacances", new Date(2025, 7, 15));

console.log(tache.afficher());