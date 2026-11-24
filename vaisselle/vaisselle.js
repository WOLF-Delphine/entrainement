// let personne=["Lucie","Hélene","Paul","Amed","Sofiane"];

// function tours(personne){
//     let aleatoire= Math.floor(Math.random()*personne.length);
//     console.log(aleatoire);
//     let prenom= personne [aleatoire];
// }
// tours();
// console.log(`Ce soir c'est ${prenom} qui fait la vaisselle.`);


// Deuxième essai sans regarder le premier

// Tableau d'objets : une personne = un prénom + le chemin de sa photo
const famille = [
  { prenom: "Yasmine", photo: "./images/mere.jpg" },
  { prenom: "Ursule", photo: "./images/pere.jpg" },
  { prenom: "Elly", photo: "./images/elly.jpg" },
  { prenom: "Aurora", photo: "./images/aurora.jpg"},
  { prenom: "Abby", photo: "./images/abby.jpg" },
  { prenom: "Tony", photo: "./images/tony.jpg" },
  { prenom: "Alex", photo: "./images/alex.jpg" },
];

// Tire une personne au hasard dans le tableau et la renvoie
function tirageSort() {
  // Math.random() donne un nombre à virgule entre 0 et 1 (1 exclu)
  // × famille.length puis Math.floor → un numéro entier entre 0 et famille.length - 1
  const tirageArrondi = Math.floor(Math.random() * famille.length);
  return famille[tirageArrondi]; // la personne tirée : un objet { prenom, photo }
}

// Je récupère les éléments HTML que je vais modifier
const champ = document.querySelector("#choise"); // le champ où s'affiche le prénom
const bouton = document.querySelector("button"); // le bouton « Go ! »
const image = document.querySelector("#photo"); // l'image dans le cadre photo

// Au clic sur le bouton : on tire une personne et on affiche son prénom et sa photo.
// La fonction est mise en attente : le navigateur l'exécute à chaque clic (c'est un callback).
bouton.addEventListener("click", function () {
  const personne = tirageSort(); // un seul tirage, utilisé pour le prénom ET la photo

  // Affichage des informations
  champ.value = personne.prenom; // le prénom dans le champ
  image.src = personne.photo; // la bonne photo
  image.alt = personne.prenom; // texte alternatif
  image.hidden = false; // on montre l'image
});