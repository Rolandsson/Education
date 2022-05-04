/**
 * Uppgiften är att översätta ett par texter mellan svenska och engelska när en knapp trycks
 *
 * Du kommer att behöva
 *  Hämta referenserna till username, password labels och form headline (h2)
 *  Se till så att isEnglish används för att toggla översättningen
 *
 * Om du hinner kan du även se till så att knapparna "login-btn" och "translate-btn" översätts
 */

let isEnglish = false;

//För att trycka på en knapp så måste först en referens hämtas
let translateBtn = document.querySelector('#translate-btn');

//För att lyssna på en händelse används "addEventListener" med en händelse parameter, exempelvis "click"
translateBtn.addEventListener('click', event => {
  event.preventDefault(); //Hindra form-default beteende, utan detta laddas sidan om

  // Hämta raferenserna till labels och h2
  let usernameLbl  = ...;
  let passwordLbl  = ...;
  let formHeadline  = ...;

  if (isEnglish) { //Om språket är engelska, översätt till svenska
    usernameLbl.textContent = 'Användarnamn';
    //Översätta även passwordLbl och formHeadline till svenska
  }
  else { //Annars översätt till engelska
    usernameLbl.textContent = 'Username';
    //Översätta även passwordLbl och formHeadline till engelska
  }
});