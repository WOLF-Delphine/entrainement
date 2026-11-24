//Test blanc n° 1 · Le club de randonnée (20/11/2026)
// Le club note la distance de chaque sortie, en kilomètres :
// const sorties = [12, 5, 18, 7, 10];
// Étape 1 : une fonction qui rend le nombre total de kilomètres parcourus.
// avec sorties → 52

const sorties = [12, 5, 18, 7, 10];

function totalKm(sorties) {
  let total = 0;

  for (let i = 0; i < sorties.length; i++) {
    total = total + sorties[i];
  }
  return total;
}
console.log(totalKm(sorties));
