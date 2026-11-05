//LISTE DES DONNÉES À INTÉGRER
let nomComplet = " mARIE duPONT ";
console.log(nomComplet);
let anneeNaissance = "1990";
console.log(anneeNaissance);
let villeDepart = " paris";
console.log(villeDepart);
let villeArrivee = "MARSEILLE ";
console.log(villeArrivee);
let dureeMinutes = "195";
console.log(dureeMinutes);
let numeroPlace = "47";
console.log(numeroPlace);
let nombreVoyageur = "3";
console.log(nombreVoyageur);
let prixParBillet = "39.90";
console.log(prixParBillet);

//Étape 23 : le nom. Affiche Marie DUPONT (prénom avec une majuscule, nom en majuscules).
//Je nettoie le nom complet au cas où il y aurait des espaces.
const nomCompletNettoye = nomComplet.trim();
console.log("Nom complet sans espace " + nomCompletNettoye);
//Je sépare le nom complet
const nomCompletDecoupe = nomCompletNettoye.split(" ");
console.log("Nom complet séparation " + nomCompletDecoupe);
//Je récupère le premier mot (le prénom) puis le second mot (le nom)
const nom = nomCompletDecoupe[1];
//Je mets le nom de famille en majuscules
const nomMajuscule = nom.toUpperCase();
console.log("Récupération du deuxième mot (nom) et mise en majuscules " + nomMajuscule);

//J'intègre le nom en majuscules dans le billet de train
document.getElementById("nom").textContent = nomMajuscule;

//Je récupère le prénom et je le passe en minuscules
const prenom = nomCompletDecoupe[0].toLowerCase();
console.log("Récupération du premier mot (prénom) et mise en minuscules " + prenom);
//Je récupère la première lettre du prénom et je la mets en majuscule
const premiereLettrePrenom = prenom.slice(0, 1);
console.log("Récupération de la première lettre du prénom " + premiereLettrePrenom);
const premiereLettreMaj = premiereLettrePrenom.toUpperCase();
console.log("Première lettre du prénom mise en majuscule " + premiereLettreMaj);
//Je récupère le reste du prénom
const restePrenom = prenom.slice(1);
console.log("Reste du prénom " + restePrenom);
//Je reconstitue le prénom
const prenomReconstitue = premiereLettreMaj + restePrenom;
console.log("Reconstitution du prénom " + prenomReconstitue);

//J'intègre le prénom (première lettre en majuscule uniquement) dans le billet de train
document.getElementById("prenom").textContent = prenomReconstitue;

//Étape 24 : les initiales. Affiche M.D. Révise l'exercice 8.
//J'ai déjà la première lettre en majuscule du prénom
//Je récupère la première lettre du nom
const initialeNom = nom.slice(0, 1);
console.log("Récupération de la première lettre du nom pour l'initiale " + initialeNom);
//Je la mets en majuscule
const premiereLettreNomMaj = initialeNom.toUpperCase();
console.log("Mise en majuscule de la première lettre du nom pour l'initiale " + premiereLettreNomMaj);

//J'intègre les initiales dans le billet de train
document.getElementById("initiales").textContent =
  premiereLettreMaj + "." + premiereLettreNomMaj + ".";

//Étape 25 : l'âge. Affiche 36 ans (en 2026). Révise l'exercice 11.
const anneeEnCours = 2026;
console.log("Année en cours : " + anneeEnCours);
//Je calcule l'âge (Number() sur la donnée brute, avant le calcul)
const age = anneeEnCours - Number(anneeNaissance);
console.log("Âge : " + age);

document.getElementById("age").textContent = age + " ans";

//Étape 26 : les villes. Affiche Paris et Marseille, avec une majuscule. Révise les exercices 3 et 7.
//Je nettoie l'entrée
const villeDepartNettoye = villeDepart.trim();
console.log("Nettoyage de la ville de départ " + villeDepartNettoye);
//Je récupère la première lettre de la ville de départ
const premiereLettreVilleDepart = villeDepartNettoye.slice(0, 1);
console.log("Première lettre de la ville de départ " + premiereLettreVilleDepart);
//Je mets la première lettre en majuscule
const villeDepartLettreMaj = premiereLettreVilleDepart.toUpperCase();
console.log("Première lettre de la ville de départ en majuscule " + villeDepartLettreMaj);
//Je récupère le reste de la ville de départ et je le mets en minuscules
const resteVilleDepart = villeDepartNettoye.slice(1);
console.log("Reste de la ville de départ " + resteVilleDepart);
const resteVilleDepartMin = resteVilleDepart.toLowerCase();
//Je rejoins les deux éléments
const restitutionVilleDepart = villeDepartLettreMaj + resteVilleDepartMin;
console.log("Résultat : ville de départ avec la première lettre en majuscule " + restitutionVilleDepart);
//J'intègre la ville de départ dans le billet de train
document.getElementById("villeDepart").textContent = restitutionVilleDepart;

//Même chose pour la ville d'arrivée
const villeArriveeNettoye = villeArrivee.trim();
const premiereLettreVilleArrivee = villeArriveeNettoye.slice(0, 1);
const villeArriveeLettreMaj = premiereLettreVilleArrivee.toUpperCase();
const resteVilleArrivee = villeArriveeNettoye.slice(1);
const resteVilleArriveeMin = resteVilleArrivee.toLowerCase();
const restitutionVilleArrivee = villeArriveeLettreMaj + resteVilleArriveeMin;

document.getElementById("villeArrivee").textContent = restitutionVilleArrivee;

//Étape 27 : les codes des gares. Affiche les 3 premières lettres de chaque ville en majuscules : PAR et MAR. Révise slice.
const codeGareDepart = villeDepartNettoye.slice(0, 3);
console.log("Code ville départ : " + codeGareDepart);
const codeGareDepartMaj = codeGareDepart.toUpperCase();
console.log("Mise en majuscules " + codeGareDepartMaj);
const codeGareArrivee = villeArriveeNettoye.slice(0, 3);
console.log("Code ville arrivée : " + codeGareArrivee);
const codeGareArriveeMaj = codeGareArrivee.toUpperCase();
console.log("Mise en majuscules " + codeGareArriveeMaj);

document.getElementById("codeGareDepart").textContent = codeGareDepartMaj;
document.getElementById("codeGareArrivee").textContent = codeGareArriveeMaj;

//Étape 28 : la durée. Affiche 3 h 15 min. Révise l'exercice 14.
//Je fais des paquets de 60 minutes : le nombre de paquets = les heures, le reste = les minutes
const heures = Math.floor(Number(dureeMinutes) / 60);
console.log("Heures " + heures);
const minutes = Number(dureeMinutes) % 60;
console.log("Minutes " + minutes);

document.getElementById("dureeTrajet").textContent = heures + " h " + minutes + " min";

//Étape 29 : la voiture et la place. Chaque voiture a 10 places (places 1 à 10 en voiture 1,
// places 11 à 20 en voiture 2…). Affiche voiture 5 et place 7. Révise Math.ceil et %.
// (Ne teste pas avec 10, 20, 30… : on verra pourquoi à l'étape 3 du cours.)
//Je transforme le numéro de place en nombre
//Je divise ce nombre par 10 et je l'arrondis vers le haut
const voiture = Math.ceil(Number(numeroPlace) / 10);
console.log(voiture);
document.getElementById("voiture").textContent = voiture;

//Je calcule la place dans la voiture : c'est le reste quand on fait des paquets de 10
const placeDansVoiture = Number(numeroPlace) % 10;
console.log(placeDansVoiture);
//J'intègre la place dans le billet de train
document.getElementById("place").textContent = placeDansVoiture;

//Étape 30 : le prix. Affiche, avec 2 chiffres après la virgule :
//le nombre de voyageurs : 3
//le prix total : 119.70 €
//la réduction de 20 % : - 23.94 €
//le prix à payer : 95.76 €
const prix = Number(nombreVoyageur) * Number(prixParBillet);
console.log(prix);
document.getElementById("prixTotal").textContent = prix.toFixed(2) + " Euros";
document.getElementById("nombreVoyageur").textContent = Number(nombreVoyageur);
const reduction = (prix * 20) / 100;
console.log(reduction);
const prixReduit = prix - reduction;
console.log(prixReduit);
document.getElementById("reduction").textContent = "- " + reduction.toFixed(2) + " Euros";
document.getElementById("aPayer").textContent = prixReduit.toFixed(2) + " Euros";

//Étape 31 (bonus) : la référence
//Affiche, en majuscules :
//la 1re lettre de la ville de départ ;
//+ la dernière lettre de la ville d'arrivée ;
//+ un tiret - ;
//+ le nombre de lettres du nom de famille.
//Résultat attendu : PE-6. On a P de Paris, E de MarseillE, et 6 parce que DUPONT a 6 lettres.
const derniereLettreArrivee = villeArriveeNettoye[villeArriveeNettoye.length - 1];
console.log(derniereLettreArrivee);
const derniereLettreMaj = derniereLettreArrivee.toUpperCase();
const reference = villeDepartLettreMaj + derniereLettreMaj;
console.log(reference);
const longueurNom = nom.length;
document.getElementById("zoneReference").textContent = reference + "-" + longueurNom;
