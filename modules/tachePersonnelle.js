import { Tache } from "./tache.js";

class TachePersonnelle extends Tache {

    //Enum
    static enumLieu = {
        MAISON: Symbol("Maison"),
        EXTERIEUR: Symbol("Extérieur"),
        TRAVAIL: Symbol("Travail")
    }

    //Attribut
    #lieu;

    //Constructeur
    constructor(titre, texte, date, lieu) {
        super(titre, texte, date);
        this.lieu = lieu;
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
        return super.afficher() + `\nLieu : ${this.lieu}`;
    };
}

//Export
export { TachePersonnelle };