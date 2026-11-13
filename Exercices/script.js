/*----------------------------------------------------------------------------------------------------- */
// Étape 1 : variables et texte (exercices 1 à 8)
/*------------------------------------------------------------------------------------------------------*/
//Rappel. let crée une variable qui peut changer, const une variable fixe. prompt() pose une number et renvoie toujours du texte. alert() affiche un message, console.log() écrit dans la console.
//Méthodes utiles : toUpperCase(), toLowerCase(), slice(), charAt(), trim(), length.*/
/*----------------------------------------------------------------------------------------------------- */

//1. Crée une variable prenom avec ton prénom et affiche-la dans la console.

//let surname="Delphine";
//console.log(surname);

//------------------------------------------------------------------------------------------------------
//2. Demande le prénom de l'utilisateur avec prompt et affiche « Bonjour » + prénom dans une alerte.

//const demande= prompt ("Quel est ton prénom?");
//console.log(demande);
//alert("Bonjour" + " " + demande);

//---------------------------------------------------------------------------------------------------------
//3. demande le prénom, puis affiche « Bonjour Prénom » avec seulement la première lettre en majuscule (même si l'utilisateur tape « bERTRAND»).

//Je crée une variable qui contient un prompt qui demande le prénom
//const number = prompt("Quel est votre prénom ?");
// Je crée une variable qui récupere la 1ere lettre majuscule
//let majuscule =  number.slice(0,1).toUpperCase();
//console.log(majuscule);
// Je crée une variable qui récupére les lettres minuscules
//let minuscule = number.slice(1).toLowerCase();
//Je crée une variable pour stocker le résultat
//console.log(minuscule);
//let prenomModif= majuscule + minuscule;
//console.log(prenomModif);
//Je crée une variable contenant une alerte qui reconstitut let affiche la réponse (Maj-Min)
//alert("Bonjour"+" "+ prenomModif);

//-------------------------------------------------------------------------------------------------------
//4. Demande le prénom et le nom. Affiche « Bonjour Prénom NOM » : prénom avec une majuscule, nom tout en majuscules.

//const saisie = prompt("Veuillez nous indiquer votre prénom, ainsi que votre nom.");
//const saisiePropre = saisie.trim();
//console.log(saisiePropre);
//const morceaux = saisiePropre.split(" ");
//console.log(morceaux);
//const prenom = morceaux [0];
//console.log(prenom);
//const nom = morceaux [1];
//console.log(nom);
//const premiereLettre = prenom.slice(0,1).toUpperCase();
//console.log(premiereLettre);
//const restePrenom = prenom.slice(1).toLowerCase();
//console.log(restePrenom);
//const prenomFinal = premiereLettre + restePrenom;
//console.log(prenomFinal);
//const nomFinal = nom.toUpperCase();
//console.log(nomFinal);
//alert("Bonjour"+ " " + prenomFinal +" "+ nomFinal);

//----------------------------------------------------------------------------------------------------------
//5. Demande un mot et affiche son nombre de lettres

//const mot = prompt("Donne-moi un mot");
//const nombreLettre = mot.length;
//alert("le mot que tu as choisi contient"+ " " + nombreLettre + " " +"lettres");

//---------------------------------------------------------------------------------------------------------
//6. Demande un mot et affiche sa première et sa dernière lettre.

//const mot = prompt("Donne-moi un mot");
//const nombreLettre = mot.length;
//console.log(nombreLettre);
//const premiereLettre = mot.slice(0,1);
//const derniereLettre = mot.slice(nombreLettre-1,nombreLettre);
//alert("La premiére lettre de votre mot est "+premiereLettre.toUpperCase()+" la derniére lettre de votre mot est "+ derniereLettre.toUpperCase());

//-------------------------------------------------------------------------------------------------------
//7. Demande un prénom, enlève les espaces en trop avec trim(), puis mets la première lettre en majuscule.

//const demande = prompt("Quel est votre prénom?");
//console.log(demande);
//const demandeNettoye = demande.trim();
//console.log(demandeNettoye);
//const compte = demandeNettoye.length;
//console.log(compte);
//const premiereLettre = demandeNettoye.slice(0,1);
//console.log(premiereLettre);
//const reste = demandeNettoye.slice(1).toLowerCase();
//console.log(reste);
//const majuscule = premiereLettre.toUpperCase();
//console.log(majuscule);
//alert("Votre prénom est "+ majuscule + reste);

//--------------------------------------------------------------------------------------------------------
//8. Demande un prénom et un nom, et affiche les initiales (« marie dupont » donne « M.D. »).

//const identite = prompt("Donnez nous votre prénom ainsi que votre nom?");
//const identiteNettoye = identite.trim();
//console.log(identite);
//const identiteSeparation= identiteNettoye.split(" ");
//console.log(identiteSeparation);
//const prenom = identiteSeparation[0];
//const nom = identiteSeparation[1];
//const premiereLettre = prenom.slice(0,1).toUpperCase();
//const deuxiemeLettre = nom.slice(0,1).toUpperCase();
//alert("Les initiales sont: " + premiereLettre + "."+ deuxiemeLettre);

/*------------------------------------------------------------------------------------------------------- */
//Étape 2 : maths et modulo (exercices 9 à 15)
/*--------------------------------------------------------------------------------------------------------*/
/*
Rappel. Les opérateurs : +, -, *, /, ** (puissance) et % (modulo = le reste d'une division : 10 % 3 vaut 1). Comme prompt renvoie du texte, "5" + "3" donne "53" : convertis avec Number().
Méthodes utiles : Math.floor() (arrondi vers le bas), Math.round(), toFixed(2).
/*-------------------------------------------------------------------------------------------------------- */

//9. Demande deux nombres et affiche leur somme. Essaie d'abord sans Number() pour voir le problème.

//let premierNombre = prompt("Donnez moi un premier nombre");
//let deuxiemeNombre = prompt("Donne moi un deuxieme nombre");
//const somme = Number(premierNombre) + Number(deuxiemeNombre);
//alert(somme);

//--------------------------------------------------------------------------------------------------------
//10. Demande deux nombres et affiche dans une seule alerte le résultat des 4 opérations.

//const addition = Number(premierNombre) + Number(deuxiemeNombre);
//const soustraction = Number(premierNombre) - Number(deuxiemeNombre);
//const division = Number(premierNombre) / Number(deuxiemeNombre);
//const multiplication = Number(premierNombre) * Number(deuxiemeNombre);
//alert(premierNombre+ "+" +deuxiemeNombre +" est égale à " + addition +" , "+
//premierNombre+ "-" +deuxiemeNombre +" est égale à " + soustraction +" , "+
//premierNombre+ "*" + deuxiemeNombre +" est égale à " + multiplication+" , "+
//premierNombre+ "/" + deuxiemeNombre +" est égale à " + division);

//--------------------------------------------------------------------------------------------------------
//11. Demande l'année de naissance et affiche « Prénom, tu as X ans » (le prénom avec une majuscule, comme à l'étape 1).

//const anneeNaissance = Number(prompt("En quelle année êtes vous née?"));

//console.log(anneeNaissance);

//let prenom = prompt ("Quel est votre prénom?");
//console.log(prenom);
//const nettoyage = prenom.trim();
//let premiereLettre = nettoyage.slice(0,1);
//console.log(premiereLettre);
//premiereLettre= premiereLettre.toUpperCase();
//console.log(premiereLettre);

//let reste = nettoyage.slice(1);
//console.log(reste);
//reste= reste.toLowerCase();
//console.log(reste);

//const calculAge = 2026 - anneeNaissance ;
//console.log(calculAge);
//alert("Bonjour " + premiereLettre + reste + ", actuellement tu as " + calculAge + " ans");

//-------------------------------------------------------------------------------------------------------
//12. Demande un prix et affiche le prix après 20 % de réduction, avec 2 chiffres après la virgule.

//let prixInitial = Number(prompt("Quel est le prix?: "));
//console.log("prix initial: " + prixInitial);
//let reduction = ((prixInitial*20)/100);
//console.log("reduction éffectuée: " + reduction);

//const prixFinal = (prixInitial - reduction).toFixed(2);
//console.log("Le prix à payé aprés réduction est de:  " + prixFinal)

//-------------------------------------------------------------------------------------------------------
//13. Demande deux nombres et affiche le quotient entier et le reste (17 et 5 donnent « 3, reste 2 »).

//const premierNombre = Number(prompt("Inscrivez votre premier nombre"));
//console.log(premierNombre);
//const deuxiemeNombre = Number(prompt("Inscrivez votre second nombre"));
//console.log(deuxiemeNombre);

//const calcul = premierNombre/deuxiemeNombre;
//console.log("Le total est de : " + calcul);

//const quotient = Math.floor(calcul);
//console.log("Mon quotient est de : " + quotient);

//const decimale = premierNombre % deuxiemeNombre;
//console.log(decimale);
//alert("La partie entiére du résultet est : " + quotient + " ,le reste est de " + decimale);

//-----------------------------------------------------------------------------------------------------
//14. Demande un nombre de minutes et convertis-le en heures et minutes (135 donne « 2 h 15 min »).

//const demande = Number(prompt("Donnez moi un nombre de minutes?"));
//console.log("Nombre de minutes " + demande);
//const heure = Math.floor(demande/60);
//console.log("Converti en heure " + heure);
//const minutes = demande% 60;
//console.log("Nombre de minutes " + minutes);
//alert("Cela fait " + heure + " heure(s) et " + minutes + " minute(s)");

//-----------------------------------------------------------------------------------------------------
//15. Demande un mot et affiche combien de fois il faudrait le répéter pour arriver à au moins 20 lettres (utilise length et Math.ceil(), l'arrondi vers le haut).

//const mot =prompt("Donnez moi un mot");
//console.log(mot);
//const motPropre = mot.trim();
//const longueur = motPropre.length;
//console.log("Le mot contient "+ longueur + " lettres");
//const verification = Math.ceil((20 /longueur));
//console.log("L'arrondi vers le haut est :" + verification);
//const resultat = (verification * longueur);

//alert ("Résultat du calcul "+ resultat +" Pour arriver à au moins 20 lettres, il faudrait répéter le mot "+ motPropre + " " + verification + " fois")

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*EXERCICE JAVASCRIPT - CSS - HTML */
//---------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/* Exercice de révision : le billet de train
Le but : créer une page web qui affiche un billet de train. Les informations du passager arrivent en texte « brut » (espaces en trop, majuscules au mauvais endroit), et ton JavaScript doit les nettoyer, faire les calculs et les afficher proprement sur le billet.

Partie 1 : préparer le projet
Étape 1 : crée un nouveau dossier billet-de-train dans ton dossier Entrainement.
Étape 2 : dans ce dossier, crée trois fichiers vides : index.html, style.css et script.js.
Partie 2 : le HTML
Étape 3 : dans index.html, écris la structure de base d'une page HTML (tu peux t'inspirer de ton index.html actuel), avec le titre « Billet de train ».
Étape 4 : relie ton fichier style.css à la page, dans le <head>.
Étape 5 : relie ton fichier script.js à la page, juste avant la fermeture du <body>.
Étape 6 : dans le <body>, crée un grand bloc qui représentera le billet.
Étape 7 : dans ce bloc, crée un en-tête avec le nom de la compagnie : RAIL ÉCOLE.
Étape 8 : crée une partie « trajet » avec :
une zone pour le code de la gare de départ et une pour la ville de départ ;
une zone pour la durée du trajet ;
une zone pour le code de la gare d'arrivée et une pour la ville d'arrivée.
Étape 9 : crée une partie « passager » avec une zone pour chacune de ces informations : nom, initiales, âge, voiture, place, nombre de voyageurs.
Étape 10 : crée une partie « prix » avec trois lignes : prix total, réduction, à payer.
Étape 11 : crée un pied de billet avec une zone pour la référence.

Étape 12 : donne un id unique à chaque zone qui recevra une information (par exemple id="nomPassager"). Écris un « ? » dans chaque zone pour l'instant.

Étape 13 : ouvre index.html dans ton navigateur. Tu dois voir toutes tes zones avec des « ? ».

Partie 3 : le CSS
Étape 14 : donne une couleur de fond à la page.

Étape 15 : donne au billet un fond blanc, des coins arrondis, une largeur maximale, et centre-le sur la page.

Étape 16 : mets l'en-tête dans un bandeau de couleur, avec le texte en blanc.

Étape 17 : affiche les codes des gares en gros et en gras.

Étape 18 : sépare les parties du billet avec une ligne (par exemple en pointillés).

Étape 19 : mets en valeur la ligne « à payer » (plus grande, en gras).

Étape 20 : recharge la page et vérifie que ça ressemble à un billet. Tu peux améliorer le style plus tard : le plus important, c'est le JavaScript.

Partie 4 : le JavaScript
Étape 21 : en haut de script.js, crée une boîte pour chaque donnée, sous forme de texte (avec les guillemets), exactement comme ci-dessous :

Boîte (nom libre)	Contenu
nom complet	" mARIE duPONT "
année de naissance	"1990"
ville de départ	" paris"
ville d'arrivée	"MARSEILLE "
durée en minutes	"195"
numéro de place	"47"
nombre de voyageurs	"3"
prix d'un billet	"39.90"
Étape 22 : découvre le nouvel outil. Pour écrire dans une zone de ta page :


document.getElementById("nomPassager").textContent = maBoite;
Cela veut dire : « va chercher la zone qui a id="nomPassager", et remplace son texte par le contenu de maBoite ». Le nom entre guillemets doit être exactement celui de l'id dans ton HTML.

👉 Pour tester, affiche « RAIL ÉCOLE » dans l'en-tête avec cet outil, puis recharge la page.

Pour chacune des étapes suivantes : pseudo-code → une ligne → console.log → affichage dans la page.

Étape 23 : le nom. Affiche Marie DUPONT (prénom avec une majuscule, nom en majuscules). Révise les exercices 4 et 7.

Étape 24 : les initiales. Affiche M.D. Révise l'exercice 8.

Étape 25 : l'âge. Affiche 36 ans (en 2026). Révise l'exercice 11.

Étape 26 : les villes. Affiche Paris et Marseille, avec une majuscule. Révise les exercices 3 et 7.

Étape 27 : les codes des gares. Affiche les 3 premières lettres de chaque ville en majuscules : PAR et MAR. Révise slice.

Étape 28 : la durée. Affiche 3 h 15 min. Révise l'exercice 14.

Étape 29 : la voiture et la place. Chaque voiture a 10 places (places 1 à 10 en voiture 1, places 11 à 20 en voiture 2…). Affiche voiture 5 et place 7. Révise Math.ceil et %. (Ne teste pas avec 10, 20, 30… : on verra pourquoi à l'étape 3 du cours.)

Étape 30 : le prix. Affiche, avec 2 chiffres après la virgule :

le nombre de voyageurs : 3
le prix total : 119.70 €
la réduction de 20 % : - 23.94 €
le prix à payer : 95.76 €
Révise les exercices 9, 10 et 12.

Étape 31 (bonus) : la référence. Affiche la 1re lettre de la ville de départ + la dernière lettre de la ville d'arrivée + un tiret + le nombre de lettres du nom de famille, en majuscules : PE-6. Révise length - 1.

Partie 5 : le test final
Étape 32 : change toutes les données en haut de script.js (ton prénom, d'autres villes, une autre durée…) et recharge la page. Si ton code est bien fait, tout le billet se met à jour tout seul, sans toucher au reste du code.

Les règles
Uniquement ce que tu as vu dans les exercices 1 à 15, plus l'outil de l'étape 22.
Pas de prompt ni d'alert.
Ne jamais écrire « Marie » ou « 36 » directement : tout doit être calculé à partir des données.
*/

/*-------------------------------------------------------------------------------------------------------- */
//Étape 3 : les conditions (exercices 16 à 22)
/*-------------------------------------------------------------------------------------------------------- */
//Rappel. Une condition exécute du code seulement si quelque chose est vrai :
//let age = Number(prompt("Ton âge ?"));
//if (age >= 18) {
//alert("Tu es majeur");
//} else {
//alert("Tu es mineur");
//}
//Comparaisons : === (égal), !== (différent), >, <, >=, <=. Pour combiner : && (et), || (ou). On peut enchaîner avec else if.

/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
//16. Demande un nombre et indique s'il est pair ou impair (modulo !).
//const nombre = Number(prompt("Donnez-moi un nombre."));
//if (nombre % 2 === 0) {
//alert("Le nombre est pair");
//} else {
//alert("Le nombre est impair");
//}
//console.log(nombre % 2);

//17. Demande l'âge et affiche « majeur » ou « mineur ».
//const age = Number(prompt("Quel est votre âge?"));
//if (age < 18) {
//alert("Vous êtes mineur");
//}
//else {
//alert("Vous êtes majeur");
//}

//18. Demande un prénom. Si l'utilisateur ne tape rien ou clique sur Annuler, affiche « Bonjour inconnu », sinon « Bonjour » + prénom avec une majuscule.
//const prenomComplet = prompt("Veuillez indiquer votre prénom.");

//if (prenomComplet === null) {
//alert("Bonjour inconnu");               // Annuler
//} else {
//const prenomCompletPropre = prenomComplet.trim();
//const premiereLettre = prenomCompletPropre.slice(0, 1);
//const lettreMaj = premiereLettre.toUpperCase();
//const prenomReste = prenomCompletPropre.slice(1);
//const prenomResteMin = prenomReste.toLocaleLowerCase();
//const prenomReconstitution = lettreMaj + prenomResteMin;

//if (prenomReconstitution === "") {
//alert("Bonjour inconnu");             // OK sans rien taper
//} else {
//alert("Bonjour " + prenomReconstitution);
//}
//}

//19. Demande un mot de passe et affiche « trop court » s'il fait moins de 8 caractères, sinon « accepté ».
//const motPasse = prompt("Quel est votre mot depasse?");

//if (motPasse === null) {
//alert("Aucun mot de passe saisi");
//} else {
//const motPasseNettoye = motPasse.trim();
//const compteLettre = motPasseNettoye.length;
//console.log("nombre de lettre: " + compteLettre);

//if (compteLettre < 8) {
//alert("Trop court");
//} else {
//alert("Accepté");
//}
//}

//20. Demande une note sur 20 et affiche « insuffisant » (moins de 10), « bien » (10 à 15) ou « très bien » (plus de 15).
//const note = Number(prompt("Donne-moi une note sur 20"));

//if (note < 10) {
//alert("Insuffisant");
//} else if (note <= 15) {
//alert("Bien");
//} else {
//alert("Très bien");
//}

//21. Demande un nombre et indique s'il est divisible par 3, par 5, par les deux ou par aucun.
//const nombre = Number(prompt("Donnez-moi un nombre"));

//if (nombre % 3 === 0 && nombre % 5 === 0) {
//alert("Votre nombre est divisible par 3 et par 5");
//} else if (nombre % 3 === 0) {
//alert("Votre nombre est divisible par 3");
//} else if (nombre % 5 === 0) {
//alert("Votre nombre est divisible par 5");
//} else {
// alert("Votre nombre n'est divisible ni par 3 ni par 5");
//}

//22. Mini-calculatrice : demande deux nombres puis une opération (+, -, *, /) et affiche le résultat.
// Si l'utilisateur veut diviser par 0, affiche un message d'erreur.

/*const premierNombre = Number(prompt("Premier nombre"));
const secondNombre = Number(prompt("Second nombre"));
const operation = prompt("Choisissez votre opérateur");
switch (operation) {
  case "+":
    const addition = premierNombre + secondNombre;
    console.log(addition);
    break;
  case "-":
    const soustraction = premierNombre - secondNombre;
    console.log(soustraction);
    break;
  case "*":
    const multiplication = premierNombre * secondNombre;
    console.log(multiplication);
    break;
  case "/":
    if (secondNombre === 0) {
      alert("Erreur division par 0 impossible!");
    } else {
      const division = premierNombre / secondNombre;
      console.log(division);
    }
    break;

  default:
    alert("Vous n'avez pas donner d'opérateur mathématique");

}/*

/*-------------------------------------------------------------------------------------------------------- */
//Étape 4 : les fonctions (exercices 23 à 30)
/*-------------------------------------------------------------------------------------------------------- */
/*Rappel. Une fonction est une recette qu'on écrit une fois et qu'on réutilise :
function direBonjour(prenom) {
  return "Bonjour " + prenom;
  /*console.log(direBonjour("Marie")); // Bonjour Marie
prenom est un paramètre (la valeur qu'on donne à la fonction), return renvoie le résultat, et direBonjour("Marie") appelle la fonction.
}
/*--------------------------------------------------------------------------------------------------------*/
//23. Crée une fonction doubler(nombre) qui renvoie le nombre multiplié par 2. Teste-la avec 3 valeurs.
//function doubler(nombre) {
  //return nombre * 2;
//}
//console.log(doubler(-3));
//console.log(doubler(10));
//console.log(doubler(4));

//24. Crée une fonction additionner(a, b) qui renvoie la somme.

//function additionner(a, b) {
  //return a + b;
//}
//console.log(additionner(8, 104));

//25. Transforme l'exercice 3 en fonction majuscule(mot) qui renvoie le mot avec seulement la première lettre en majuscule. Utilise-la avec un prompt.
//function majuscule(mot) {
  //const motNettoyage = mot.trim();
  //const premiereLettreMot = motNettoyage.slice(0, 1);
  //const premiereLettreMotMaj = premiereLettreMot.toUpperCase();
  //const resteMot = motNettoyage.slice(1);
  //const resteMotMin = resteMot.toLowerCase();
  //return premiereLettreMotMaj + resteMotMin;
//}
//console.log(majuscule("    guiLLaume"));
//26. Crée une fonction estPair(nombre) qui renvoie true ou false.
//function estPair(nombre) {
  //if (nombre % 2 === 0) {
    //return true;
  //} else {
    //return false;
  //}
//}
//console.log(estPair(26));
//console.log(estPair(7));

//27. Crée une fonction aireRectangle(longueur, largeur) et une fonction perimetreRectangle(longueur, largeur).
/* function aireRectangle(longueur, largeur) {
  return longueur * largeur;
}
console.log(aireRectangle(6, 10));

function perimetreRectangle(longueur, largeur) {
  return (longueur + largeur) * 2;
}
console.log(perimetreRectangle(16, 32));
 */
//28. Crée une fonction celsiusVersFahrenheit(c) (formule : c × 9 / 5 + 32).
/* function celsiusVersFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusVersFahrenheit(0));
 */
//29. Crée une fonction appreciation(note) qui renvoie « insuffisant », « bien » ou « très bien » (reprends l'exercice 20).
//Rappel Exercice 20. Demande une note sur 20 et affiche « insuffisant » (moins de 10), « bien » (10 à 15) ou « très bien » (plus de 15).
/* unction appreciation(note) {
  if (note < 10) {
    return "Insuffisant";
  } else if (note <= 15) {
    return "Bien";
  } else {
    return "Très bien";
  }
}
console.log(appreciation(4));
console.log(appreciation(13));
console.log(appreciation(18));
 */
//30. Crée une fonction presenter(prenom, nom, age) qui utilise ta fonction majuscule et renvoie « Je m'appelle Marie DUPONT et j'ai 25 ans ».
/* unction presenter(prenom, nom, age) {
  const prenomPropre = prenom.trim();
  const nomPropre = nom.trim().toUpperCase();

  return (
    "Je m'appelle " +
    majuscule(prenomPropre) +
    " " +
    nomPropre +
    " et j'ai " +
    age +
    " ans"
  );
}
console.log(presenter("marie", "durand", 25)); */

/*-------------------------------------------------------------------------------------------------------- */
/*
Étape 5 : incrémentation et boucles (exercices 31 à 40)
Rappel. Incrémenter, c'est augmenter une variable ; décrémenter, c'est la diminuer.
/*-------------------------------------------------------------------------------------------------------- */
//let n = 5;
//n++;     // 6  (ajoute 1)
//n--;     // 5  (enlève 1)
//n += 10; // 15
//n -= 3;  // 12
//n *= 2;  // 24
//La boucle for répète un nombre de fois précis, la boucle while répète tant qu'une condition est vraie :
//for (let i = 1; i <= 5; i++) {
//console.log(i); // 1, 2, 3, 4, 5
//}

//let j = 3;
//while (j > 0) {
// console.log(j); // 3, 2, 1
// j--;
//}
//Attention : dans un while, si tu oublies de changer la variable, la boucle ne s'arrête jamais.
//31. Crée une variable score = 0. Ajoute 10, puis 25, puis enlève 5, en affichant le score après chaque étape.
let score= 0;
console.log(score);
score= score +10;
console.log(score);
score= score +25;
console.log(score);
score= score -5;
console.log(score);

//Autre version
let score2=0;
console.log(score2);
score2+=10;
console.log(score2);
score2+=25;
console.log(score2);
score2-=5;
console.log(score2);

//32. Affiche les nombres de 1 à 10 avec une boucle for, puis de 10 à 1.
for(let i=1;i<=10;i++){
  console.log(i);
}
for(let i=10;i>=1;i--){
  console.log(i);
}

//33. Affiche les nombres de 1 à 20 avec « pair » ou « impair » à côté de chacun.
//34. Demande un nombre et affiche sa table de multiplication (« 7 x 1 = 7 »… jusqu'à 10).
//35. Calcule la somme des nombres de 1 à 100 avec total += i. Tu dois trouver 5050.
//36. Compte à rebours avec while : de 10 à 0, puis « Décollage ! ».
//37. Demande un mot et compte ses voyelles en parcourant chaque lettre (mot[i]) avec un compteur.
//38. Crée une fonction inverser(mot) qui renvoie le mot à l'envers en parcourant les lettres avec i--. Utilise-la pour dire si un mot est un palindrome (« kayak »).
//39. FizzBuzz : de 1 à 30, affiche « Fizz » si le nombre est divisible par 3, « Buzz » par 5, « FizzBuzz » par les deux, sinon le nombre.
//40. Le juste prix : l'ordinateur choisit un nombre entre 1 et 100 (Math.floor(Math.random() * 100) + 1). L'utilisateur propose des nombres avec prompt et l'alerte répond « plus grand » ou « plus petit ». À la fin, affiche « Bravo Prénom, trouvé en X essais » (compteur avec ++).
//*/
