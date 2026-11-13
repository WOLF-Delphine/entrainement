function biere(btBiere) {
  while (btBiere > 0) {
    console.log(`${btBiere} bouteilles de biere sur le mur, ${btBiere} bouteilles de biére. On en prend une, 
                on la fait passer,${btBiere -1} bouteilles de biere sur le mur.`);
    btBiere--;
  }
}
biere(99);
