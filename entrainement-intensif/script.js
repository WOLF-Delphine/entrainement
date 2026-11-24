//---------------------------------------------------------------------------------------------------
//Exercice 1 : la même chose, avec d’autres données.
//Le club note aussi ses dépenses, en euros :
//const depenses = [8, 15, 4, 23];
//Écris une fonction qui rend le total des dépenses.→ résultat attendu : 50

const depenses = [8, 15, 4, 23];

function totalDepense(depenses) {
  let compteDepense = 0;

  for (let i = 0; i < depenses.length; i++) {
    compteDepense = compteDepense + depenses[i];
  }
  return compteDepense;
}
console.log(totalDepense(depenses));

//-----------------------------------------------------------------------------------------------------
//Exercice 2 : sans tableau. Une fonction qui reçoit un nombre et rend le total de tous les nombres
// de 1 jusqu’à ce nombre.→ avec 6 : 21 · avec 10 : 55

function Calculnombre(nombre) {
  let addition = 0;

  for (let i = 1; i <= nombre; i++) {
    addition = addition + i;
  }
  return addition;
}
console.log(Calculnombre(6));

//---------------------------------------------------------------------------------------------------
//Exercice 3 : un autre tableau. Le nombre de participants à chaque sortie :
//const participants = [6, 9, 4, 11, 7];
//Une fonction qui rend le nombre total de participants.→ 37

//input
const participants = [6, 9, 4, 11, 7];

function compteParticipants(participants) {
  //variable vide pour recuperer les éléments du tbx
  let calculNbParticipants = 0;

  for (let i = 0; i < participants.length; i++) {
    // Ajout de chaques nombres
    calculNbParticipants = calculNbParticipants + participants[i];
  }

  return calculNbParticipants;
}
console.log(compteParticipants(participants));

//---------------------------------------------------------------------------------------------------
//Exercice 4 : la moyenne. Une fonction qui rend la dépense moyenne du club
// (le total divisé par le nombre de dépenses), avec un chiffre après la virgule.→ avec [8, 15, 4, 23] : "12.5"

const depensesClub = [8, 15, 4, 23];

function calculMoyenne(depensesClub) {
  //cagnotte vide
  let totalDepense = 0;
  //nombre de dépenses
  let nbDepenses = depensesClub.length;

  //Boucle pour parcourir le tbx
  for (let i = 0; i < nbDepenses; i++) {
    //Ajoute a chaques tours le nombre suivant
    totalDepense = totalDepense + depensesClub[i];
  }

  return (totalDepense / nbDepenses).toFixed(1);
}
console.log(calculMoyenne(depensesClub));

//-------------------------------------------------------------------------------------------------------
//Exercice 5 : du texte. Les étapes d’une randonnée :
//const etapes = ["Col", "Lac", "Refuge"];
//Une fonction qui colle tous les noms, chacun suivi d’un espace.→ "Col Lac Refuge "

//input
const etapes = ["Col", "Lac", "Refuge"];

function rassembleNom(nom) {
  //liste vide pour recuperer les mot
  let liste = "";
  //boucle sur chaque index du tbx
  for (let i = 0; i < nom.length; i++) {
    //ajout a la liste de chaque mot
    liste = liste + nom[i] + " ";
  }

  return liste;
}
console.log(rassembleNom(etapes));

//------------------------------------------------------------------------------------------------------
//Exercice 6 : un if dans la boucle. Une fonction qui rend le total des kilomètres,
// mais seulement pour les sorties de plus de 9 km.→ avec [12, 5, 18, 7, 10] : 40 (12 + 18 + 10)

const kilometre = [12, 5, 18, 7, 10];

function totalKilometre(kilometre) {
  let calcul = 0;

  for (let i = 0; i < kilometre.length; i++) {
    if (kilometre[i] > 9) {
      calcul = calcul + kilometre[i];
    }
  }
  return calcul;
}
console.log(totalKilometre(kilometre));

//-----------------------------------------------------------------------------------------------------
//Exercice 7 : la limite en paramètre. La même fonction, mais le « 9 » n’est plus écrit en dur :
// c’est un deuxième paramètre (la limite).→ avec la limite 6 : 47 · avec la limite 15 : 18


