const names=["Antoine","Delphine","Maxance","Matthis","Jade","Mélissa","Bintu"];
console.log(names);

function whosPaying(names){
let hasard = Math.floor(Math.random()*names.length);
console.log(hasard);
const pay= names[hasard];
console.log(pay);
return `C'est ${pay} qui va payer le déjeuner aujourd'hui !`;
}
console.log(whosPaying(names));