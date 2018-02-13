// Splash view
 $(document).ready(function() {
   setTimeout(function() {
     $("#container-1").fadeIn(0000).fadeOut(1500);
   },2000);
});

$(document).ready(function() {
   setTimeout(function() {
       $("#container-2").fadeIn(1500);
   },2000);
});

// Funcionalidad log in con twitch

$(function(){
//función que trae data del usuario
  var getInfo = function(callback){
    Twitch.api({method: 'channel'}, function(error, channel) {
      callback(channel);
    });

  }
//inicializando twitch
  Twitch.init({clientId: 'jyckx3hg9w4r3vmi177y5mfmk2j2r5'}, function(error, status) {
      console.log(status);
/*sí su estado está inicializado traeme la data del usuario y cambia de vista*/

      if (status.authenticated) {

      getInfo(function(data){
         localStorage.setItem('nameTwitch',data.display_name );
         window.location.href = window.location.origin + "/Gamehack2.0/views/info.html";

 //función añade imagen y texto de acuerdo a el log in con twitch
      });


    }else{
      $('#login-info').hide();
    }

  });


  var login = function()
  {
      Twitch.login({
        scope: ['user_read', 'channel_read']
      });

  }

/*función sale y regresa a la pantalla principal*/
  var logout = function()
  {
    Twitch.logout(function(error) {
      $('.twitch-connect').show();


      $('#login-info').hide();
    });
  }
/*se llama a los botones y se previene su funcionalida de estos por default */
  $('.twitch-connect').click(function(e){
    e.preventDefault();

    login();
  })

  $('#btn-logout').click(function(e){
    e.preventDefault();

    logout();
  })
})

function writeUserData(id, title, photoUrl, gameConsole) {
  firebase.database().ref('users/' + userId).set({
    gametitle: title,
    photoUrl: photo,
    gameConsole : gameConsole
  });
}
