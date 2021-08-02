function registrar(){
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
    .then(function(){
      verificar()
          alert("Usuario Registrado! Verifique la cuenta creada en el Email");
          document.getElementById('correo').value = '';
          document.getElementById('contrasena').value = '';

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Faltan datos, revise email o contraseña ingresada.");
        // ...
      });
}

function verificar(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });

}