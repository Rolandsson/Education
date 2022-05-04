/**
 * Denna övning är inspirerad (tagen) från MDNs introduktions sida för DOM manipulation
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list
 *
 * Om du hellre känner för det så kan du följa instruktionerna från MDN då denna steg-för-steg förklaringar
 *
 * Uppgiften är att skapa en kod som lägger till ett nytt li element i ul-listan med texten från input fältet
 */

let addBtn    = document.querySelector('#cart-add-btn');
let itemField = document.querySelector('#cart-field');

addBtn.addEventListener('click', event => { //En "click"-händelse lyssnare
  let itemText = itemField.value; //Text från input fältet
  console.log(itemText);

  //1. Hämta refernsen till ul listan

  //2. Skapa ett nytt li element

  //3. Sätt texten på li elementet till texten från itemField

  //4. Lägg till li elementet i ul listan


  /** En något mer avancerad uppgift
   * lägg till en "delete" knapp bredvid varje item och gör så att det går ta bort item(s) från listan
   *
   * Det du kommer att behöva göra är att
   *    För varje ny li, skapa en knapp
   *    Ge varje knapp ny knapp en EventListener som anropar "remove" på respektive li element
   */
});