/*Método jquery para publicar comentarios uno encima de otro sin que desaparezcan */

$('#post').click(subirImagen);

function subirImagen() {
  var $load = $('#load')[0].files[0];
  console.log($load);1

  var read = new FileReader();

  read.onloadend = function (){
    $('.caption').attr('src', read.result);
  }

  if($load) {
    read.readAsDataURL($load);
  }else {
    $('.caption').attr('src', " ")
  }
}


//Función de colocar imagen


//Funcionalidad "agrega comentarios"


$(document).ready(function () {
  $("#benviar").click(function () {

      $("#comments").prepend('<hr>' + $("#comentario").val() );
      $("#comentario").val('');
  });
});

