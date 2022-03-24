function GladiatorExpenses(
    lostFights,
    helmetPrice,
    swordPrice,
    shiledPrice,
    armorPrice
  ) {
    let totalExpenses = 0;
   
    for (let currFight = 1; currFight <= lostFights; currFight++) {
      if (currFight % 2 === 0) {
        totalExpenses += helmetPrice;
      }
   
      if (currFight % 3 === 0) {
        totalExpenses += swordPrice;
      }
   
      if (currFight % 6 === 0) {
        totalExpenses += shiledPrice;
      }
   
      if (currFight % 12 === 0) {
        totalExpenses += armorPrice;
      }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
  }solve(7,
    2,
    3,
    4,
    5
    )