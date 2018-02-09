
/*Método jquery para publicar comentarios uno encima de otro sin que desaparezcan */
$(document).ready(loadPage);

$(document).ready(function () {
  $("#benviar").click(function () {

      $("#comments").prepend('<hr>' + $("#comentario").val() );
      $("#comentario").val('');
  });
});


/*Método jquery para publicar una imágen */

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

//Funcionalidad "agrega comentarios"


$(document).ready(function () {
  $("#benviar").click(function () {

/*
$(document).ready(loadPage);


function printImage (x) {
  var $imageConainer = $("<a />");
  var $imgS = $("<img />");

  $imageConainer.addClass("image-container");
  $imageContainer.attr('src', x.image);

  $foodContainer.append($textFood);
  $foodContainer.append($imgFood);

 $("#rest-container").prepend($foodContainer);

  $foodContainer.click(filterModal);
  filterModal(restaurant);

}
*/
      $("#comments").prepend('<hr>' + $("#comentario").val() );
      $("#comentario").val('');
  });
});

