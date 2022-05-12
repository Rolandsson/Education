let rateSpans = document.querySelectorAll('.rate-span');

for(let i = 0; i < rateSpans.length; i++) {
  let span = rateSpans[i];

  span.addEventListener('mouseenter', event => {
    for (let n = 0; n <= i; n++) {
      rateSpans[n].classList.remove('empty-star');
      rateSpans[n].classList.add('full-star');
    }
  });

  span.addEventListener('mouseout', event => {
      span.classList.add('empty-star');
      span.classList.remove('full-star');
  });

  span.addEventListener('click', event => vote(i + 1));
}

/*
  Starta jar filen genom att navigera till där filen befinner sig i ett terminal fönster
  Kör jar filen genom att skriva "java -jar java-web.jar"

  Efter att jar filen körs ska du kunna gå till http://localhost:8080/scores och finns en REST respons
  För att hämta en exakt scoring så går du till sidan http://localhost:8080/scores/score-ref
  Exempelvis http://localhost:8080/scores/casual

  För att göra detta i javascript skriver du
  request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState == XMLHttpRequest.DONE) {
        if(request.status == 200) {
          console.log(request.responseText);
        }
      }
    }

    // request.open('GET', 'http://localhost:8080/scores'); //Denna hämtar alla scores
    // request.open('GET', 'http://localhost:8080/scores/casual'); //Denna hämtar specifikt för casual
    request.send();

  Om du vill göra en POST förfrågan så behövs två saker
    1. Bestämt content-type (enklaste är form-urlencoded)
    2. Att skicka parameter värden

    Koden blir då
      request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
            console.log(request.responseText);
          }
        }
      }

      request.open('POST', 'http://localhost:8080/scores/casual');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send('rate=' + score);
*/

/**
 * Vote kallas automatiskt när du trycker på en stjärna, öppna kollen och se utskriften från rad 70
 * @param {number} score - nytt betyg
 */
function vote(score) {

  /*
    Gör så att när denna funktion "vote" anropas så utförs följande
    1. ett betyg skickas till servern med hjälp av en POST förfrågan
    2. Texten ovanför stjärnorna uppdateras med den nya betygsättning, exempelvis
      "Nuvarande betyg är 4.3/5"
      "10 personer har röstat!"
  */

  console.log(score);
}

/* När du är klar med funktionen vote, gör då tredje steget
  3. Gör så att steg 2) utförs när sidan laddas istället för endast när en ny stjärna klickas
*/