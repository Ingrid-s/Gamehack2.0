/* array que va a contener a todos los usuario*/
var users =[];

/* varianbles gloabales que se usan en todas las funciones*/
var $nameInput = $('#name');
var $emailInput = $('#email');
var $passwordInput = $('#password');

var $btnSubmit = $('.btn-submit');


function loadPage(){
  $passwordInput.keyup(btnActive);
  $nameInput.keyup(saveData);
  $emailInput.keyup(saveData);
  $passwordInput.keyup(saveData);
}

function btnActive () {
  if($(this).val().trim().length > 5) {
    $btnSubmit.removeAttr("disabled");
  } else {
    $btnSubmit.attr("disabled" , true);
  }
}

function saveData (){
  localStorage.setItem('userName',$nameInput.val());
  localStorage.setItem('userEmail',$emailInput.val());
  localStorage.setItem('userPassword',$passwordInput.val());

  localStorage.getItem('userName');
  localStorage.getItem('userEmail');
  localStorage.getItem('userPassword');

}

$('#userAvatar').click(subirImagen);
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
$(document).ready(loadPage);
