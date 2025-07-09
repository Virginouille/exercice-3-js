import { Tache } from "./tache.js";

class TacheProfessionnelle extends Tache {

    //Attribut
    #projet;

    //Constructeur
    constructor(titre, texte, date, projet) {
        super(titre, texte, date);
        this.#projet = projet;
    }

    //Getter et Setter
    get projet() {
        return this.#projet;
    }

    set projet(nomProjet) {
        this.#projet = nomProjet;
    }

    /**Méthode afficher lieu */
    afficher() {
        return super.afficher() + `\nProjet : ${this.#projet}`;
    };
}

//Export
export { TacheProfessionnelle };