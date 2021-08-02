function ingresar(){
    var email2 =document.getElementById('email2').value;
    var password2 =document.getElementById('password2').value;
    
    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
      
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario')
            aparece();
            document.getElementById("contenido").style.display = "block";
            document.getElementById("login").style.display = "none";

          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario');
          contenido.innerHTML = ``;
          document.getElementById("contenido").style.display = "none";
          document.getElementById("login").style.display = "block";

        }
      });
}
observador();

function aparece(){
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = `

    <div id="cuerpo">
      <div class="alert alert-primary my-3" role="alert">
        Bienvenido! Selecciona una opción para comenzar.
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Base de Datos Administrativa</h5>
              <p class="card-text">Administra datos de las empresas adherentes, 
              solo administrador pose permiso para acceder a esta sección.</p>
              <button onclick="contraseña()" class="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Desarrollo de Documentos</h5>
              <p class="card-text">Ingreso para completar documentación relacionada a EVAST y subir documentos a nube comunitaria.</p>
              <a href="/Usuarios/menu-usuarios.html" class="btn btn-primary">Ingresar</a>
            </div>
          </div>
        </div>
      <button onclick="cerrar()" class="btn btn-danger my-3">Cerrar sesion</button>      
      </div>
    </div>
    `;
}

//Contraseña Parte adminsitrador
function contraseña(){
  var contra = "administradorIST";
      contra = prompt("Ingresa contraseña para continuar");
  if (contra == "administradorIST"){
    alert("Bien");
    document.write("Redireccionando...");
    var pagina="/Empresa/index-empresa.html"
    function redireccionar(){
      location.href=pagina
    }
    setTimeout (redireccionar(), 0);

  }else{
    alert("Incorrecto");
    var pagina = "/index.html"
    function redireccionar(){
      location.href=pagina
    }
      setTimeout (redireccionar(), 1);
  }

}

//Cerrar sesion
function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}