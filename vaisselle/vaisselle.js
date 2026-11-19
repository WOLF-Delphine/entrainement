// let personne=["Lucie","Hélene","Paul","Amed","Sofiane"];

// function tours(personne){
//     let aleatoire= Math.floor(Math.random()*personne.length);
//     console.log(aleatoire);
//     let prenom= personne [aleatoire];
// }
// tours();
// console.log(`Ce soir c'est ${prenom} qui fait la vaisselle.`);


// Deuxieme essai sans regarder le premier
const famille=["Yasmine","Ursule","Elly","Maxance","Matthis","Jade","Kate"];
function tirageSort(){
const tirage= Math.random()*famille.length;
//console.log(tirage);
const tirageArrondi= Math.floor(tirage); //donne un numéro aléatoire entre 1 et 6 (numéro de casier)
//console.log(tirageArrondi);
const prenom= famille[tirageArrondi];
return prenom;
}
console.log(tirageSort());
