import { TachePersonnelle } from './modules/tachePersonnelle.js';
import { GestionnaireDeTaches } from './modules/gestionnaireDeTaches.js';


//Tache test pour tester
const tache = new TachePersonnelle("Vacances", "Partir en vacances", new Date(2025, 7, 15), "maison");

console.log(tache.afficher());


/**Formulaire ajouter tâches */

const gestionnaireDeTaches = new GestionnaireDeTaches();
const formAjoutTache = document.querySelector(".form_ajout_tache");

formAjoutTache.addEventListener("submit", (event) => {
    event.preventDefault();

    const nouvelleTache = gestionnaireDeTaches.ajouterTache();
    gestionnaireDeTaches.afficherLesTaches();
    gestionnaireDeTaches.apparitionBtn();
    gestionnaireDeTaches.supprimerTache();
    console.log("Tâche ajoutée :", nouvelleTache);
});

/**Afficher les tache */
gestionnaireDeTaches.afficherLesTaches();






