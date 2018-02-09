//variable que contiene todos las reseñas
var textUsers = [];

//variables globales para uso de funcion paintData
var $pictureUser = $('#picture');
var $nameUser = $('.nombre-usuario');
var $nextBtn = $('#next');
var $twitchtBtn = $('#twitch');

//variables globales para uso de funcion addPost
var $textArea = $('#reseña');
var $addBtn = $('#add');

//funcion que se activa al estar lista la pág
function loadPage () {
  $textArea.keyup(validateText);
  $addBtn.click(getText,paintText);
  $searchInput.keyup(filterMembers);
  $searchInput.click(paintMembers);
}

//funcion que pinta la data obtenida en el index.html
function paintDataTwitch () {
  localStorage.getItem('nameTwitch');
  //$('#picture').attr('src',"https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg");
}

//funcion que pinta la data obtenida en el index.html
function paintData () {
  $nameUser.text(localStorage.getItem('userName'));
}

//funcion que valida que no esté vacio text area
function validateText (){
    if($(this).val().trim().length > 10) {
      $addBtn.removeAttr("disabled");
    } else {
      $addBtn.attr("disabled" , true);
    }
  }

//funcion que trae la info obtenida de textarea
function getText (e) {
  e.preventDefault();
 var reseña = $textArea.val();

 var reseñaObj = {
    "text": reseña,
    };

 textUsers.push(reseñaObj);
 console.log(reseñaObj, textUsers);//se guarda en un obj y posteriormente en un array global
 paintText(reseñaObj);
}

//funcion que pinta la data obtenida en el index.html
function paintText (reseñaObj){

  var $newContainer = $("<div />");
  var $newText = $("<p />");
  var $btn = $("<button />");
  var $btnLike = $("<p />");

  $newContainer.addClass("new");
  $newText.addClass("text")
  $btn.addClass("btnShare");

  $newContainer.append($btn);
  $newContainer.append($newText);
  $btn.append($btnLike);

  $newText.text(reseñaObj.text);
  $btnLike.text("like");

  $(".new-container").prepend($newContainer);
}


//filtrado buscar Amigos
//variables globales para el uso de filtrado
var $searchInput = $('#search-friends');

function paintMembers (element) {

 var $imgMember = $("<img />");
  var $nameMember = $("<p />");

  $imgMember.addClass("avatar");

  $nameMember.text(users.name);
  $imgMember.attr('src', users.avatar);

  $(".members-container").prepend($imgMember);
  $(".members-container").prepend($nameMember);

}

function filterMembers (){
    var $searchInput = $('#search-friends').val().toLowerCase();
    if($("#search-friends").val().trim().length > 0) {
      var filteredMembers = users.filter(function(member) {
        //console.log(members);

        if(users.name.toLowerCase().indexOf(searchInput) >= 0) {
          return true;
        }

        if(users.console.toLowerCase().indexOf(searchInput) >= 0) {
          return true;
        }

        return false;
      });

      $("#members-container").empty();
      filteredMembers.forEach(function(members) {
        paintMembers(members);
      });

    } else {
      $("#members-container").empty();
        users.forEach(function(element){
        paintMembers(element);
    });
  }

}

$(document).ready(paintData);
$(document).ready(paintDataTwitch);
$(document).ready(loadPage);
