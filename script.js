/*window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} */


/* tableau qui contient les liens de la barre NAV */
var lienMenu = document.querySelectorAll('.linav');

/* tableau qui contient les écrans de ma page */
var ecranAffiche = document.querySelectorAll('.ecran');

for (let i=0; i<lienMenu.length; i++) {
    lienMenu[i].addEventListener('click',
        function(){positionnerEcran(i);});
}

function positionnerEcran(numEcran) {
    ecranAffiche[numEcran].scrollIntoView(
        {block: 'end',
        inline: 'start',
        behavior: 'smooth'}
    );
}