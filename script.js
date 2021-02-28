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

/*Script de formulaire Formspree*/

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");

  // Success and Error functions for after the form is submitted

  function success() {
      form.reset();
      window.alert("Votre message a bien été transmis.");
  }

  function error() {
    window.alert("Erreur dans votre message.");
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
      } else {
          error(xhr.status, xhr.response, xhr.responseType);
      }
  };
  xhr.send(data);
}