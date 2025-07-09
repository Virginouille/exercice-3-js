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
    afficherLesTaches() {

        //Selection div où afficher
        const divTaches = document.getElementById("taches");

        //Check si liste vide et renvoi message dans div
        if (this.#collectionTaches.length === 0) {
            divTaches.textContent = "Pas de tâches"
            return;
        }

        const ul = document.createElement("ul");

        this.#collectionTaches.forEach((tache, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1} ${tache.afficher()}`;
            ul.appendChild(li);
        });

        divTaches.appendChild(ul);
    }




}
export { GestionnaireDeTaches };