// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDK9VZ0rUa2QKARkwgmtdgLFH45T2FuBSA",
    authDomain: "proyecto-practica-5bce3.firebaseapp.com",
    projectId: "proyecto-practica-5bce3"
  });
  
  var db = firebase.firestore();

  // Agregar documento a coleccion

  function guardar(){
    var RUT  =  document.getElementById('rut_emp').value;
    var Razon_Social  =  document.getElementById('nombre_emp').value;
    var Direccion_Empresa  =  document.getElementById('nomCalle_emp').value;
    var Numero_de_calle  =  document.getElementById('numCalle_emp').value;
    var CIIU  =  document.getElementById('CIIU_emp').value;
    var Descripcion_CIIU  =  document.getElementById('giro_emp').value;
    var Total_Hombres  =  document.getElementById('hombres_emp').value;
    var Total_Mujeres  =  document.getElementById('mujeres_emp').value;


    db.collection("empresa").add({
        rut_emp: RUT,
        nombre_emp: Razon_Social,
        nomCalle_emp: Direccion_Empresa,
        numCalle_emp: Numero_de_calle,
        CIIU_emp: CIIU,
        giro_emp: Descripcion_CIIU,
        hombres_emp: Total_Hombres,
        mujeres_emp: Total_Mujeres,
    })
    .then(function(docRef) {
        console.log("la empresa a sido agregada ", docRef.id);
        document.getElementById('rut_emp').value = '';
        document.getElementById('nombre_emp').value = '';
        document.getElementById('nomCalle_emp').value = '';
        document.getElementById('numCalle_emp').value = '';
        document.getElementById('CIIU_emp').value = '';
        document.getElementById('giro_emp').value = '';
        document.getElementById('hombres_emp').value = '';
        document.getElementById('mujeres_emp').value = '';
        alert("La Empresa fue agregada correctamente.");

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Error al crear la empresa.");
    });
  }

  //leer documentos
  var tabla=document.getElementById('tabla');
  db.collection("empresa").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=`
            <tr>
                <th scope="row" style="display:none;">${doc.id}</th>
                <th scope="col">${doc.data().rut_emp}</th>
                <th scope="col">${doc.data().nombre_emp}</th>
                <th scope="col">${doc.data().nomCalle_emp}</th>
                <th scope="col">${doc.data().numCalle_emp}</th>
                <th scope="col"style="display:none;">${doc.data().CIIU_emp}</th>
                <th scope="col">${doc.data().giro_emp}</th>
                <th scope="col"style="display:none;">${doc.data().hombres_emp}</th>
                <th scope="col"style="display:none;">${doc.data().mujeres_emp}</th>
                <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().rut_emp}','${doc.data().nombre_emp}','${doc.data().nomCalle_emp}','${doc.data().numCalle_emp}','${doc.data().CIIU_emp}','${doc.data().giro_emp}','${doc.data().hombres_emp}','${doc.data().mujeres_emp}')">Editar</button></td>
                <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
              </tr>`
    });
});

//Eliminar documentos
    function eliminar(id){
        db.collection("empresa").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            alert("Registro Eliminado");
            
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

// editar documento
    function editar(id, rut_emp, nombre_emp, nomCalle_emp, numCalle_emp, CIIU_emp, giro_emp, hombres_emp, mujeres_emp){

        document.getElementById('rut_emp').value = rut_emp;
        document.getElementById('nombre_emp').value = nombre_emp;
        document.getElementById('nomCalle_emp').value = nomCalle_emp;
        document.getElementById('numCalle_emp').value = numCalle_emp;
        document.getElementById('CIIU_emp').value = CIIU_emp;
        document.getElementById('giro_emp').value = giro_emp;
        document.getElementById('hombres_emp').value = hombres_emp;
        document.getElementById('mujeres_emp').value = mujeres_emp;

        var boton = document.getElementById('boton');
        boton.innerHTML = 'Editar';

        boton.onclick = function(){
            var empresa = db.collection("empresa").doc(id);

            var RUT = document.getElementById('rut_emp').value;
            var Razon_Social = document.getElementById('nombre_emp').value;
            var Direccion_Empresa = document.getElementById('nomCalle_emp').value;
            var Numero_de_calle = document.getElementById('numCalle_emp').value;
            var CIIU = document.getElementById('CIIU_emp').value;
            var Descripcion_CIIU = document.getElementById('giro_emp').value;
            var Total_Hombres = document.getElementById('hombres_emp').value;
            var Total_Mujeres = document.getElementById('mujeres_emp').value;

            return empresa.update({
                rut_emp: RUT,
                nombre_emp: Razon_Social,
                nomCalle_emp: Direccion_Empresa,
                numCalle_emp: Numero_de_calle,
                CIIU_emp: CIIU,
                giro_emp: Descripcion_CIIU,
                hombres_emp: Total_Hombres,
                mujeres_emp: Total_Mujeres,
            })
            .then(function() {
                console.log("Document successfully updated!");
                alert("La Empresa fue editada correctamente.");
                boton.innerHTML = 'Guardar';
                document.getElementById('rut_emp').value = '';
                document.getElementById('nombre_emp').value = '';
                document.getElementById('nomCalle_emp').value = '';
                document.getElementById('numCalle_emp').value = '';
                document.getElementById('CIIU_emp').value = '';
                document.getElementById('giro_emp').value = '';
                document.getElementById('hombres_emp').value = '';
                document.getElementById('mujeres_emp').value = '';
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }

}




