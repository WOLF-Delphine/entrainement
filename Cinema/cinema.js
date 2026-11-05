//VARIABLES
const nomComplet = " caTHErine Nguer  ";
const email = " Catherine.Nguer@Mail.com ";
const titreFilm = "  la petite SIRÈNE";
const dureeMinutes = "95";
const debutSeance = "1080";
const numeroSiege = "23";
const nbPlaces = "2";
const prixPlace = "9.50";

//NOM & PRÉNOM : Output : Lucas BERNARD
const nomCompletPropre= nomComplet.trim();
console.log(nomCompletPropre);

const nomCompletSeparation= nomCompletPropre.split(" ");
const nom= nomCompletSeparation[1];
console.log(nom)

const nomMaj=nom.toUpperCase();
console.log(nomMaj);
document.getElementById("nom").textContent=nomMaj;

const prenom= nomCompletSeparation[0];
console.log(prenom);

const prenomPremiereLettre=prenom.slice(0,1);
console.log(prenomPremiereLettre);

const prenomPremiereLettreMaj= prenomPremiereLettre.toUpperCase();
console.log(prenomPremiereLettreMaj);

const prenomReste=prenom.slice(1);
const prenomResteMin= prenomReste.toLocaleLowerCase();
console.log(prenomResteMin);

const prenomReconstitution=prenomPremiereLettreMaj+prenomResteMin;
console.log(prenomReconstitution);
document.getElementById("prenom").textContent=prenomReconstitution;

//IDENTIFIANT OUTPUT : lucas.bernard d'aprés l'email
const emailNettoye= email.trim();
const emailDecoupe=emailNettoye.split("@");
console.log(emailDecoupe);

const morceauMail=emailDecoupe[0];
const morceauMailMin= morceauMail.toLowerCase();
console.log(morceauMailMin);
document.getElementById("identifiant").textContent=morceauMailMin;

//TITRE OUTPUT : LE GRAND VOYAGE
const titreFilmNettoye= titreFilm.trim();
const titreFilmMaj= titreFilmNettoye.toUpperCase();
console.log(titreFilmMaj);
document.getElementById("titre").textContent=titreFilmMaj;

//NOMBRE DE MOT DU TITRE
const titreSepare= titreFilmMaj.split(" ");
console.log(titreSepare);
const nbMots= titreSepare.length;
console.log(nbMots);
document.getElementById("nbMotTitre").textContent= nbMots;

//DERNIER MOT DU TITRE : OUTPOUT : VOYAGE 
const dernierMot= titreSepare[titreSepare.length - 1];
console.log(dernierMot);
document.getElementById("dernierMotTitre").textContent= dernierMot;

//DUREE DE LA SEANCE METTRE EN HEURE(S) & MINUTE(S)  OUTPOUT : 2 h 22 min
const heureMinute= Number(dureeMinutes)/60;
console.log("minutes en heure " + heureMinute);
const heure= Math.floor(heureMinute);
console.log(heure);

const minute= Number(dureeMinutes)%60;
console.log(minute);
document.getElementById("duree").textContent=heure +" h "+ minute +" min";


//AFFICHER L'HEURE DE DEBUT DE SEANCE OUTPUT : 20 h 30
const debutSeanceHeureResultat = Number(debutSeance)/60;
console.log(debutSeanceHeureResultat);
const debutSeanceHeureArrondi = Math.floor(debutSeanceHeureResultat);
console.log(debutSeanceHeureArrondi);

const debutSeanceMinute = Number(debutSeance)%60;
console.log(debutSeanceMinute);
//padStart seulement à l'affichage : debutSeanceMinute reste un nombre
document.getElementById("heureDebut").textContent = debutSeanceHeureArrondi + " h " + String(debutSeanceMinute).padStart(2, "0");

//AFFICHER L'HEURE DE FIN DE SEANCE OUTPUT : 22 h 52
//J'additionne le début et la durée (un Number() pour chaque texte, avant le +)
const finSeanceTotalMinutes = Number(debutSeance) + Number(dureeMinutes);
console.log(finSeanceTotalMinutes);
//Les heures : le nombre de paquets de 60
const finSeanceHeureResultat = finSeanceTotalMinutes / 60;
console.log(finSeanceHeureResultat);
const finSeanceHeureArrondi = Math.floor(finSeanceHeureResultat);
console.log(finSeanceHeureArrondi);
//Les minutes : ce qui reste après les paquets de 60 (on part du total, pas du résultat de la division)
const finSeanceMinute = finSeanceTotalMinutes % 60;
console.log(finSeanceMinute);
document.getElementById("heureFin").textContent = finSeanceHeureArrondi + " h " + String(finSeanceMinute).padStart(2, "0");

//RANGEE & SIEGE  OUTPUT : 4 & 2
const rangee = Number(numeroSiege)/12;                                      //3.16
const rangeeArrondi = Math.ceil(rangee);                                    //4
console.log(rangeeArrondi);
document.getElementById("rangee").textContent =rangeeArrondi;
const numeroSiegeReste = Number(numeroSiege)%12;                            //2
document.getElementById("siege").textContent =numeroSiegeReste;
const nbPlacesNumber = Number(nbPlaces);
document.getElementById("nbPlaces").textContent= nbPlacesNumber;

//CALCULER LE PRIX FINAL  OUTPUT : 38.00€
const prixGlobal =Number(nbPlaces)*Number(prixPlace);                       //38
console.log(prixGlobal);
document.getElementById("prixTotal").textContent=prixGlobal.toFixed(2) +" €";       

//CALCULER LA REDUCTION DE 15%  OUTPOUT : -5.70 €
const reduction= (prixGlobal*15)/100;
document.getElementById("reduction").textContent="- " +reduction.toFixed(2) +" €";


//CALCULER LE PRIX A PAYER APRES REDUCTION  OUTPUT : 32.30 €
const prixPayer= prixGlobal - reduction;
console.log(prixPayer);
document.getElementById("aPayer").textContent= prixPayer.toFixed(2)+" €";

//CODE DE RÉSERVATION OUTPUT : LED-5
//Les deux premières lettres du titre : LE
const deuxPremieresLettresTitre = titreFilmMaj.slice(0, 2);                 //LE
console.log(deuxPremieresLettresTitre);
//La dernière lettre du nom : D
const derniereLettreNom = nomMaj.slice(nomMaj.length - 1);                   //D
console.log(derniereLettreNom);
//Le nombre de lettres du prénom : 5
const nbLettresPrenom = prenom.length;                                        //5
console.log(nbLettresPrenom);
//RECONSTITUTION DU CODE   OUTPUT : LED-5
const codeReservation = deuxPremieresLettresTitre + derniereLettreNom + "-" + nbLettresPrenom;   //LED-5
console.log(codeReservation);
document.getElementById("codeReservation").textContent = codeReservation;