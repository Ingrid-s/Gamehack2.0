
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

//Variables globales para uso de las funcionalidades posteriores
var comments = [];
var $btnAdd = $("#sendComments");
var $writeInput = $("#write");


//funcion que se realiza al cargar la página
function loadPage(){
  $writeInput.keyup(validateComment);
  $btnAdd.click(addComment);
  $btnAdd.click(clean);
}

//Funcion que valida que el usuario haya llenado los campos del input
function validateComment () {
  if($(this).val().trim().length > 0) {
    $btnAdd.removeAttr("disabled");
  } else {
    $btnAdd.attr("disabled" , true);
  }
}

// función que guada la informacion que el usuario ingresa en el input
function addComment(e){
  e.preventDefault();
  // guardamos el valor del texto que agrega en el inputs correspondiente al comentario
  var textComment = $writeInput.val();
  //se agrega el comentario obtenido a un objeto
  var commentObj ={
    "comment":textComment
  }
  // enviamos los elemntos escritos por el usuario a un array
  comments.push(commentObj);
  console.log(comments,commentObj);
  //se llama a la funcion "paintComments" desde aquí para que obtenga el valor del texto ingresado por el usuario
  paintComments(commentObj);
}

//limpia el input
function clean (){
 $writeInput.val("")
}

//creando elementos por el DOM
function paintComments (commentObj){
  var $newComment = $("<div />");
  var $textComment = $("<p />");

 $newComment.addClass("comments-container");

 $newComment.append($textComment);
 $textComment.text(commentObj.comment);

//se agrega el elemento creado por el DOM a un elemento que está en HTML
 $("#comments-container").prepend($newComment);

}

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
