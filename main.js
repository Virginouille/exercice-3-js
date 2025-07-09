import { TachePersonnelle } from './modules/tachePersonnelle.js';


//Ajout tache dans main pour tester
const tache = new TachePersonnelle("Vacances", "Partir en vacances", new Date(2025, 7, 15), "maison");

console.log(tache.afficher());