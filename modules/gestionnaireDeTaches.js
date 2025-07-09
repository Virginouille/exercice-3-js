import { TachePersonnelle } from "./tachePersonnelle.js";

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

        let nouvelleTache = new TachePersonnelle(tacheTitre, tacheTexte, tacheDate, tacheLieu, typeTache);
        nouvelleTache.afficher();

        //Ajout à la collection de task
        this.collectionTaches.push(nouvelleTache);

        return nouvelleTache;

    }

}

export { GestionnaireDeTaches };