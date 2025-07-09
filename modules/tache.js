class Tache {

    //Attributs
    #titre = "";
    #texte = "";
    #date = null;


    //Constructeur
    constructor(titre, texte, date) {
        this.#titre = titre;
        this.#texte = texte;
        this.#date = date;
    }

    /**Getters et setters */
    get titre() {
        return this.#titre;
    }

    set titre(nouveautTitre) {
        this.#titre = nouveautTitre;
    }

    get texte() {
        return this.#texte;
    }

    set texte(nouveauTexte) {
        this.#texte = nouveauTexte;
    }

    get date() {
        return this.#date;
    }

    set date(nouvelleDate) {
        this.#date = nouvelleDate;
    }



    /**Méthode afficher() 
    * @return une chaine descriptive
     */

    afficher() {
        return `Tâche : ${this.titre}\nIntitulé : ${this.texte}\nDate : ${this.date.toLocaleDateString("fr")}`
    };
}


/**Méthode contientMot(mot) 
 * @return retourne true si le mot est dans le titre ou le texte insensible à la casse/accents
*/

/**Méthode estEntreDates(dateDebut, dateFin) 
 * @return true si la tâche est dans l'intervalle
*/

//Exports module
export { Tache };