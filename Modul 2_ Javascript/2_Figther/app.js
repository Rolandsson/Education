/*
  Skapa en funktion som låter krigarna slås mot varandra tills en av dem ger upp
*/

/**
 * Klassen Figther representerar en krigare med 100 life points och 15 i basskada
 */
class Figther {
  constructor(name) {
    this.name = name;
    this.lifePoints = 100;
    this.baseDamage = 15;
    this.hasSurrendered = false;
  }

  /**
   * Funktionen returnerar hur mycket skada krigare kan göra
   *
   * 1) Formlen för skadan på den andra krigaren är:
   *    randomModifier är ett tal mellan -5 och +5
   *    damage = this.baseDamage + randomModifier
   */
  attack() {
    let damage = 0;

    /* skriv koden för 1) formeln med skadan här */

    if(Math.random() > 0.8) {
      damage = damage * 2;
    }
    return damage
  }


  /**
   * Funktionen ändrar hur mycket lifePoints krigaren har kvar
   *
   * Krigaren ska ge upp om den har mindre än 10 lifePoints kvar
   * Då sätts klassvariabeln 'hasSurrendered' till true
   *
   * 2) Formlen för hur mycket skada som görs är
   *      damage = damage - ((this.lifePoints / 100) * 5)
   *
   */
  defend(damage) {
    /* skriv koden för 2) formeln med hur mycket skada som görs här */

    /*
      kolla om krigaren får mindre än 10 life points efter ny skada
      Om det stämmer, sätt this.hasSurrendered till true
    */

  }
}

function fight(figther1, figther2) {
  let winner;
  while (!(figther1.hasSurrendered || figther2.hasSurrendered)) {
    /*
      Skriv koden för när de tränar mot varandra här
      Skadan avgörs i damage funktionen
      Det nya lifePointsen sätts i defend funktionen

      Striden är över när en krigare har gett upp
    */
  }
  console.log("Winner is", /* Skriv vinnaren här med kvarstående life points*/ );
}

let carol = new Figther("Carol");
let cedric = new Figther("Cedric");

//fight(carol, cedric); //Raden är avkommenterad då den just nu skapar en ändlös loop