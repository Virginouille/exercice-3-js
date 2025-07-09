import { TachePersonnelle } from "./tachePersonnelle.js";
import { TacheProfessionnelle } from "./tacheProfessionnelle.js";

class GestionnaireDeTaches {

    //Attribut
    #collectionTaches = [];

    //Constructeur
    constructor(listeTaches = []) {
        this.#collectionTaches = listeTaches
    }

    //Getter et setter

    get collectionTaches() {
        return this.#collectionTaches;
    }

    set collectionTaches(nouvelleCollection) {
        this.#collectionTaches = nouvelleCollection;
    }

    /**Méthode ajouter tâche */
    ajouterTache() {

        //Option
        const typeTache = document.querySelector(".type_tache").value;

        //Corps form
        const tacheTitre = document.querySelector(".tache_titre").value;
        const tacheTexte = document.querySelector(".tache_texte").value;
        const tacheDate = document.querySelector(".tache_date").value;
        const tacheLieu = document.querySelector(".tache_lieu").value;

        let nouvelleTache;

        if (typeTache == 1) {
            nouvelleTache = new TachePersonnelle(tacheTitre, tacheTexte, tacheDate, tacheLieu, typeTache);
        } else {
            nouvelleTache = new TacheProfessionnelle(tacheTitre, tacheTexte, tacheDate, tacheLieu, typeTache);
        }

        //Ajout à la collection de task
        this.collectionTaches.push(nouvelleTache);

        return nouvelleTache;

    }

    /**Méthode afficher tâche */
    // afficherLesTaches() {

    //     if (this.#collectionTaches.length === 0) {
    //         return "Vous n'avez aucune tâche pour le moment.";
    //     }

    //     const listeFormatee = this.#collectionTaches.map((tache, index) => {

    //         return `${index + 1} ${tache.afficher()}`;

    //     });

    //     return `Vos tâches :\n${listeFormatee.join('\n')}`;
    // }
}
export { GestionnaireDeTaches };