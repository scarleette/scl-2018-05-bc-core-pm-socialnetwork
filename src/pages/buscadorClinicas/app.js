//Funcionalidad Parallax
// $(document).ready(function(){
//     $('.parallax').parallax();
//   });

//Funcionalidad Menú
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//Funcionalidad despliegue de veterinarias
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

//Carrousel
$(document).ready(function(){
    $('.slider').slider();
  });

//Funcionalidad para cargar imagen


//Funcionalidad para "Me gusta" con patita
function paintPatita(key) {
  const pata = document.getElementById("patota-" + key);
  pata.classList.toggle('green');

}