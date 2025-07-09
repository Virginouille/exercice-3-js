import { Tache } from "./tache.js";

class TacheProfessionnelle extends Tache {

    //Attribut
    #lieu;
    #projet;

    //Constructeur
    constructor(titre, texte, projet, date, lieu) {
        super(titre, texte, date);
        this.#lieu = lieu;
        this.#projet = projet;
    }

    //Getter et Setter
    get lieu() {
        return this.#lieu;
    }

    set lieu(choixLieu) {
        this.#lieu = choixLieu;
    }

    /**Méthode afficher lieu */
    afficher() {
        return super.afficher() + `\nProjet : ${this.#projet} Lieu : ${this.#lieu}`;
    };
}

//Export
export { TacheProfessionnelle };