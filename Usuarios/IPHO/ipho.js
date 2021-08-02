// Geolocalizacion
window.addEventListener ("load",inicio);
function inicio(){
    navigator.geolocation.getCurrentPosition(alExito, alError);
}

function alExito(info) {
    geo_la.value = info.coords.latitude;
    geo_lo.value = info.coords.longitude;
}

function alError(error){
    alert("Hubo un error");
}

//Validación RUT


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDK9VZ0rUa2QKARkwgmtdgLFH45T2FuBSA",
    authDomain: "proyecto-practica-5bce3.firebaseapp.com",
    projectId: "proyecto-practica-5bce3",
  });
  
  var db = firebase.firestore();
  document.getElementById("submit_btn").addEventListener('click',guardar);

  //Agregar documentos
  function guardar(){

    //1- antecedentes de empresa evaluada
    var rut_emp1 = document.getElementById('rut_emp1').value;
    var nombre_emp1 = document.getElementById('nombre_emp1').value;
    var nombre_representante = document.getElementById('nombre_representante').value;
    var CIIU_emp1 = document.getElementById('CIIU_emp1').value;
    var giro_emp1 = document.getElementById('giro_emp1').value;
    var tipoCalleemp = document.getElementById('tipoCalleemp').value;
    var nomCalle_emp1 = document.getElementById('nomCalle_emp1').value;
    var numCalle_emp1 = document.getElementById('numCalle_emp1').value;
    var restDirec_emp = document.getElementById('restDirec_emp').value;
    var localidad_emp = document.getElementById('localidad_emp').value;
    var comunas = document.getElementById('comunas').value;
    var tipo_empresa = document.getElementById('tipo_empresa').value;
    var emp_dpr = document.getElementById('emp_dpr').value;
    var rhs = document.getElementById('rhs').value;
    var rs_1 = document.getElementById('rs_1').value;
    var riosh = document.getElementById('riosh').value;
    var rs_2 = document.getElementById('rs_2').value;

    // 2- antecedentes del centro de trabajo evaluado
    var Centro_trabajo = document.getElementById('Centro_trabajo').value;
    var sucursal_gopist = document.getElementById('sucursal_gopist').value;
    var fun_emp = document.getElementById('fun_emp').value;
    var Empleador_p = document.getElementById('Empleador_p').value;
    var rut_emp2 = document.getElementById('rut_emp2').value;
    var cierre_ct = document.getElementById('cierre_ct').value;
    var f_ini_ct = document.getElementById('f_ini_ct').value;
    var f_cie_ct = document.getElementById('f_cie_ct').value;
    var est_ct = document.getElementById('est_ct').value;
    var geo_la = document.getElementById('geo_la').value;
    var geo_lo = document.getElementById('geo_lo').value;
    var nomCalle_emp2 = document.getElementById('nomCalle_emp2').value;
    var numCalle_emp2 = document.getElementById('numCalle_emp2').value;
    var tipoCalle = document.getElementById('tipoCalle').value;
    var restDirect_emp1 = document.getElementById('restDirect_emp1').value;
    var loc_ct = document.getElementById('loc_ct').value;
    var comuna_emp1 = document.getElementById('comuna_emp1').value;
    var desc_act_ct = document.getElementById('desc_act_ct').value;
    var cphs_ct = document.getElementById('cphs_ct').value;
    var exp_ct = document.getElementById('exp_ct').value;
    var t_t = document.getElementById('t_t').value;
    var t_m = document.getElementById('t_m').value;
    var t_h = document.getElementById('t_h').value;
    var h_exp = document.getElementById('h_exp').value;
    
    //3- antecedentes de la exposicion
    var r_31 = document.getElementById('r_31').value;
    var r_32 = document.getElementById('r_32').value;
    var r_33 = document.getElementById('r_33').value;
    var r_34 = document.getElementById('r_34').value;

    //4- conclusion respecto al centro de trabajo evaluado
    var res1 = document.getElementById('res1').value;
    var res2 = document.getElementById('res2').value;
    var res3 = document.getElementById('res3').value;
    var res4 = document.getElementById('res4').value;
    var res5 = document.getElementById('res5').value;
    var res6 = document.getElementById('res6').value;
    var res7 = document.getElementById('res7').value;
    
    // 5- datos identificacion
    var as1 = document.getElementById('as1').value;
    var re1 = document.getElementById('re1').value;
    var as2 = document.getElementById('as2').value;
    var re2 = document.getElementById('re2').value;
    var as3 = document.getElementById('as3').value;
    var re3 = document.getElementById('re3').value;
    var as4 = document.getElementById('as4').value;
    var re4 = document.getElementById('re4').value;
    var as5 = document.getElementById('as5').value;
    var re5 = document.getElementById('re5').value;
    var as6 = document.getElementById('as6').value;
    var re6 = document.getElementById('re6').value;
    var fechaact = document.getElementById('fechaact').value;

    db.collection("ipho").add({
    //1- antecedentes de empresa evaluada
    rut_emp1: rut_emp1,
    nombre_emp1: nombre_emp1,
    nombre_representante: nombre_representante,
    CIIU_emp1: CIIU_emp1,
    giro_emp1: giro_emp1,
    tipoCalleemp: tipoCalleemp,
    nomCalle_emp1: nomCalle_emp1,
    numCalle_emp1: numCalle_emp1,
    restDirec_emp: restDirec_emp,
    localidad_emp: localidad_emp,
    comunas: comunas,
    tipo_empresa: tipo_empresa,
    emp_dpr: emp_dpr,
    rhs: rhs,
    rs_1: rs_1,
    riosh: riosh,
    rs_2: rs_2,
    
    // 2- antecedentes del centro de trabajo evaluado
    Centro_trabajo: Centro_trabajo,
    sucursal_gopist: sucursal_gopist,
    fun_emp: fun_emp,
    Empleador_p: Empleador_p,
    rut_emp2: rut_emp2,
    cierre_ct: cierre_ct,
    f_ini_ct: f_ini_ct,
    f_cie_ct: f_cie_ct,
    est_ct: est_ct,
    geo_la: geo_la,
    geo_lo: geo_lo,
    nomCalle_emp2: nomCalle_emp2,
    numCalle_emp2: numCalle_emp2,
    tipoCalle: tipoCalle,
    restDirect_emp1: restDirect_emp1,
    loc_ct: loc_ct,
    comuna_emp1: comuna_emp1,
    desc_act_ct: desc_act_ct,
    cphs_ct: cphs_ct,
    exp_ct: exp_ct,
    t_t: t_t,
    t_m: t_m,
    t_h: t_h,
    h_exp: h_exp,

    //3- antecedentes de la exposicion
    r_31: r_31,
    r_32: r_32,
    r_33: r_33,
    r_34: r_34,

    //4- conclusion respecto al centro de trabajo evaluado
    res1: res1,
    res2: res2,
    res3: res3,
    res4: res4,
    res5: res5,
    res6: res6,
    res7: res7,
    
    // 5- datos identificacion
    as1 : as1,
    re1 : re1,
    as2 : as2,
    re2 : re2,
    as3 : as3,
    re3 : re3,
    as4 : as4,
    re4 : re4,
    as5 : as5,
    re5 : re5,
    as6 : as6,
    re6 : re6,
    fechaact : fechaact

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Registro Ingresado Correctamente");
        //1- antecedentes de empresa evaluada

        document.getElementById('rut_emp1').value ='';
        document.getElementById('nombre_emp1').value ='';
        document.getElementById('nombre_representante').value ='';
        document.getElementById('CIIU_emp1').value ='';
        document.getElementById('giro_emp1').value ='';
        document.getElementById('tipoCalleemp').value ='';
        document.getElementById('nomCalle_emp1').value ='';
        document.getElementById('numCalle_emp1').value ='';
        document.getElementById('restDirec_emp').value ='';
        document.getElementById('localidad_emp').value ='';
        document.getElementById('comunas').value ='';
        document.getElementById('tipo_empresa').value ='';
        document.getElementById('emp_dpr').value ='';
        document.getElementById('rhs').value ='';
        document.getElementById('rs_1').value ='';
        document.getElementById('riosh').value ='';
        document.getElementById('rs_2').value ='';

        // 2- antecedentes del centro de trabajo evaluado
        document.getElementById('Centro_trabajo').value ='';
        document.getElementById('sucursal_gopist').value ='';
        document.getElementById('fun_emp').value ='';
        document.getElementById('Empleador_p').value ='';
        document.getElementById('rut_emp2').value ='';
        document.getElementById('cierre_ct').value ='';
        document.getElementById('f_ini_ct').value ='';
        document.getElementById('f_cie_ct').value ='';
        document.getElementById('est_ct').value ='';
        document.getElementById('geo_la').value ='';
        document.getElementById('geo_lo').value ='';
        document.getElementById('nomCalle_emp2').value ='';
        document.getElementById('numCalle_emp2').value ='';
        document.getElementById('tipoCalle').value ='';
        document.getElementById('restDirect_emp1').value ='';
        document.getElementById('loc_ct').value ='';
        document.getElementById('comuna_emp1').value ='';
        document.getElementById('desc_act_ct').value ='';
        document.getElementById('cphs_ct').value ='';
        document.getElementById('exp_ct').value ='';
        document.getElementById('t_t').value ='';
        document.getElementById('t_m').value ='';
        document.getElementById('t_h').value ='';
        document.getElementById('h_exp').value ='';
        
        //3- antecedentes de la exposicion
        document.getElementById('r_31').value ='';
        document.getElementById('r_32').value ='';
        document.getElementById('r_33').value ='';
        document.getElementById('r_34').value ='';

        //4- conclusion respecto al centro de trabajo evaluado
        document.getElementById('res1').value ='';
        document.getElementById('res2').value ='';
        document.getElementById('res3').value ='';
        document.getElementById('res4').value ='';
        document.getElementById('res5').value ='';
        document.getElementById('res6').value ='';
        document.getElementById('res7').value ='';
        
        // 5- datos identificacion
        document.getElementById('as1').value ='';
        document.getElementById('re1').value ='';
        document.getElementById('as2').value ='';
        document.getElementById('re2').value ='';
        document.getElementById('as3').value ='';
        document.getElementById('re3').value ='';
        document.getElementById('as4').value ='';
        document.getElementById('re4').value ='';
        document.getElementById('as5').value ='';
        document.getElementById('re5').value ='';
        document.getElementById('as6').value ='';
        document.getElementById('re6').value ='';
        document.getElementById('fechaact').value ='';
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

// Validaciones
function desplegarcard2(){
    document.getElementById('desplegarcard2').click();
}

function desplegarcard3(){
    document.getElementById('desplegarcard3').click();
}

function desplegarcard4(){
    document.getElementById('desplegarcard4').click();
}

function desplegarcard5(){
    document.getElementById('desplegarcard5').click();
}

