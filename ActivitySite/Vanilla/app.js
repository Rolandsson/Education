/*
    Detta tillåter Single page application geonom att omsluta innehållet på bägge sidorna i main taggar med unika element
*/

let anchors = document.querySelectorAll('.page-navigation a');
let homePage = document.querySelector('#home-page');
let contactPage = document.querySelector('#contact-page');


anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
       event.preventDefault();
       
       if(event.target == anchors[0]) {
           homePage.style.display = 'block';
           contactPage.style.display = 'none';

           anchors[0].parentElement.className = 'nav-item nav-active';
           anchors[1].parentElement.className = 'nav-item';
       } else if(event.target == anchors[1]) {
           homePage.style.display = 'none';
           contactPage.style.display = 'block';

           anchors[0].parentElement.className = 'nav-item';
           anchors[1].parentElement.className = 'nav-item nav-active';
       }
    });
});