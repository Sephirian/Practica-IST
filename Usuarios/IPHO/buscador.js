// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDK9VZ0rUa2QKARkwgmtdgLFH45T2FuBSA",
    authDomain: "proyecto-practica-5bce3.firebaseapp.com",
    projectId: "proyecto-practica-5bce3",
  });
  var db = firebase.firestore();


// Leer datos
var tablita = document.getElementById('tablita');

db.collection("ipho").onSnapshot((querySnapshot) => {
    tablita.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().rut_emp1}`);
        tablita.innerHTML += `
                <tr>
                  <th scope="row" style="display:none;">$${doc.id}</th>
                  <td>${doc.data().rut_emp1}</td>
                  <td>${doc.data().nombre_emp1}</td>
                  <td>${doc.data().Centro_trabajo}</td>
                  <td>${doc.data().fechaact}</td>
                  <td>
                  <button type="button" onclick="editar(
                    '${doc.id}',
                    '${doc.data().rut_emp1}',
                    '${doc.data().nombre_emp1}',
                    '${doc.data().nombre_representante}',
                    '${doc.data().CIIU_emp1}',
                    '${doc.data().giro_emp1}',
                    '${doc.data().tipoCalleemp}',
                    '${doc.data().nomCalle_emp1}',
                    '${doc.data().numCalle_emp1}',
                    '${doc.data().restDirec_emp}',
                    '${doc.data().localidad_emp}',
                    '${doc.data().comunas}',
                    '${doc.data().tipo_empresa}',
                    '${doc.data().emp_dpr}',
                    '${doc.data().rhs}',
                    '${doc.data().rs_1}',
                    '${doc.data().riosh}',
                    '${doc.data().rs_2}',

                    '${doc.data().Centro_trabajo}',
                    '${doc.data().sucursal_gopist}',
                    '${doc.data().fun_emp}',
                    '${doc.data().Empleador_p}',
                    '${doc.data().rut_emp2}',
                    '${doc.data().cierre_ct}',
                    '${doc.data().f_ini_ct}',
                    '${doc.data().f_cie_ct}',
                    '${doc.data().est_ct}',
                    '${doc.data().geo_la}',
                    '${doc.data().geo_lo}',
                    '${doc.data().nomCalle_emp2}',
                    '${doc.data().numCalle_emp2}',
                    '${doc.data().tipoCalle}',
                    '${doc.data().restDirect_emp1}',
                    '${doc.data().loc_ct}',
                    '${doc.data().comuna_emp1}',
                    '${doc.data().desc_act_ct}',
                    '${doc.data().cphs_ct}',
                    '${doc.data().exp_ct}',
                    '${doc.data().t_t}',
                    '${doc.data().t_m}',
                    '${doc.data().t_h}',
                    '${doc.data().h_exp}',

                    '${doc.data().r_31}',
                    '${doc.data().r_32}',
                    '${doc.data().r_33}',
                    '${doc.data().r_34}',

                    '${doc.data().res1}',
                    '${doc.data().res2}',
                    '${doc.data().res3}',
                    '${doc.data().res4}',
                    '${doc.data().res5}',
                    '${doc.data().res6}',
                    '${doc.data().res7}',

                    '${doc.data().as1}',
                    '${doc.data().re1}',
                    '${doc.data().as2}',
                    '${doc.data().re2}',
                    '${doc.data().as3}',
                    '${doc.data().re3}',
                    '${doc.data().as4}',
                    '${doc.data().re4}',
                    '${doc.data().as5}',
                    '${doc.data().re5}',
                    '${doc.data().as6}',
                    '${doc.data().re6}',
                    '${doc.data().fechaact}'
                  )" class="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop">
                    Visualizar y Editar</button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable text-dark modal-xl" >
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">                        
                            <div id="form">
                            <h3>Identificación de Peligro de Higiene Ocupacional: SILICE</h3>
                        
                            <div class="accordion" id="accordionExample">
                                <div class="card1">
                                  <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        I- Antecedentes de Empresa Evaluada
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <!-- Required meta tags -->
                                        <div class="form-row">
                                          <div class="form-group col-md-4" >
                                            <label for="rut_emp1">RUT Empresa</label>
                                            <input class="form-control" id="rut_emp1" placeholder="11.111.111-1" class="form-control" required>
                                          </div>
                                          <div class="form-group col-md-8">
                                            <label for="nombre_emp1">Razon Social</label>
                                            <input class="form-control" id="nombre_emp1" placeholder="Empresa S.A." required>
                                          </div>
                                        </div>
                                        <div class="form-row">
                                          
                                          <div class="form-group col-md-12">
                                            <label for="nombre_representante">Gerente o Representante Legal</label>
                                            <input type="text" class="form-control" id="nombre_representante" placeholder="Nombre Representante Legal" required>
                                          </div>
                                        </div>
                                        <div class="form-row">
                                          <div class="form-group col-md-2">
                                            <label for="CIIU_emp1" >CIIU</label>
                                            <input class="form-control" id="CIIU_emp1" placeholder="Cod. SII-Ej, 11111">
                                          </div>
                                          <div class="form-group col-md-10">
                                            <label >Descripción CIIU</label>
                                            <input class="form-control" id="giro_emp1" placeholder="Descripción CIIU (Ej, Transporte de Vehículos/Comercio Minoritario)">
                                          </div>
                                        </div>
                                        
                                        <div class="form-row">
                                          <div class="form-group col-md-3">
                                            <label for="tipoCalleemp">Tipo de Calle</label>
                                              <select class="custom-select" id="tipoCalleemp" >
                                                <option>(1) Avenida.</option>
                                                <option>(2) Calle</option>
                                                <option>(3) Pasaje</option>
                                              </select>
                                          </div>
                                          <div class="form-group col-md-6">
                                            <label for="nomCalle_emp1">Dirección Casa Matriz</label>
                                            <input type="text" class="form-control" id="nomCalle_emp1" placeholder="Dirección" >
                                          </div>
                                          <div class="form-group col-md-3">
                                            <label for="numCalle_emp1">Número</label>
                                            <input class="form-control" id="numCalle_emp1" >
                                          </div>
                                          
                                        </div>
                                          <div class="form-row">
                                            <div class="col-4">
                                              <label for="restDirec_emp">Resto Direccion Casa Matriz</label>
                                              <input id="restDirec_emp" type="text" class="form-control" placeholder="Resto dirección de casa matriz" >
                                            </div>
                                            <div class="col-4">
                                              <label for="localidad_emp">Localidad Empresa</label>
                                              <input id="localidad_emp" class="form-control"></input>
                                            </div>
                                            <div class="col-4">
                                              <label for="comunas">Ciudad</label>
                                              <select id="comunas" class="form-control" >
                                                  <option>ALGARROBO</option>
                                                  <option>ALHUÉ</option>
                                                  <option>ALTO BIOBÍO</option>
                                                  <option>ALTO DEL CARMEN</option>
                                                  <option>ALTO HOSPICIO</option>
                                                  <option>ANCUD</option>
                                                  <option>ANDACOLLO</option>
                                                  <option>ANGOL</option>
                                                  <option>ANTÁRTICA</option>
                                                  <option>ANTOFAGASTA</option>
                                                  <option>ANTUCO</option>
                                                  <option>ARAUCO</option>
                                                  <option>ANDACOLLO</option>
                                                  <option>ARICA</option>
                                                  <option>ANDACOLLO</option>
                                                  <option>AYSÉN</option>
                                                  <option>BUIN</option>
                                                  <option>BULNES</option>
                                                  <option>CABILDO</option>
                                                  <option>CABO DE HORNOS (EX - NAVARINO)</option>
                                                  <option>CABRERO</option>
                                                  <option>CALAMA</option>
                                                  <option>CALBUCO</option>                     
                                                  <option>CALDERA</option>                     
                                                  <option>CALERA DE TANGO</option>                     
                                                  <option>CALLE LARGA</option>                     
                                                  <option>CAMARONES</option>                     
                                                  <option>CAMIÑA</option>                     
                                                  <option>CANELA</option>                     
                                                  <option>CAÑETE</option>                     
                                                  <option>CARAHUE</option>                     
                                                  <option>CARTAGENA</option>                     
                                                  <option>CASABLANCA</option>                     
                                                  <option>CASTRO</option>                     
                                                  <option>CATEMU</option>                     
                                                  <option>CAUQUENES</option>                     
                                                  <option>CERRILLOS</option>                     
                                                  <option>CERRO NAVIA</option>                     
                                                  <option>CHAITÉN</option>                     
                                                  <option>CHAÑARAL</option>                     
                                                  <option>CHANCO</option>                     
                                                  <option>CHÉPICA</option>                     
                                                  <option>CHIGUAYANTE</option>                     
                                                  <option>CHILE CHICO</option>                     
                                                  <option>CHILLÁN</option>                     
                                                  <option>CHILLÁN VIEJO</option>                     
                                                  <option>CHOLCHOL</option>                     
                                                  <option>CHONCHI</option>                     
                                                  <option>CISNES</option>                     
                                                  <option>COBQUECURA</option>                     
                                                  <option>COCHAMÓ</option>                     
                                                  <option>COCHRANE</option>                     
                                                  <option>CODEGUA</option>                     
                                                  <option>COELEMU</option>                     
                                                  <option>COIHUECO</option>                     
                                                  <option>COLCHANE</option>                     
                                                  <option>COLBÚN</option>                     
                                                  <option>COLINA</option>                     
                                                  <option>COLLIPULLI</option>                     
                                                  <option>COLTAUCO</option>                     
                                                  <option>COMBARBALÁ</option>                     
                                                  <option>CONCEPCIÓN</option>                     
                                                  <option>CONCHALÍ</option>                     
                                                  <option>CONCÓN</option>                     
                                                  <option>CALBUCO</option>                     
                                                  <option>CONSTITUCIÓN</option>
                                                  <option>CONTULMO</option>
                                                  <option>COPIAPÓ</option>
                                                  <option>COQUIMBO</option>
                                                  <option>CORONEL</option>
                                                  <option>CORRAL</option>
                                                  <option>COYHAIQUE</option>
                                                  <option>CUNCO</option>
                                                  <option>CURACAUTÍN</option>
                                                  <option>CURACAVÍ</option>
                                                  <option>CURACO DE VÉLEZ</option>
                                                  <option>CURANILAHUE</option>
                                                  <option>CURARREHUE</option>
                                                  <option>CUREPTO</option>
                                                  <option>CURICÓ</option>
                                                  <option>DALCAHUE</option>
                                                  <option>DIEGO DE ALMAGRO</option>
                                                  <option>DOÑIHUE</option>
                                                  <option>EL BOSQUE</option>
                                                  <option>EL CARMEN</option>
                                                  <option>EL MONTE</option>
                                                  <option>EL QUISCO</option>
                                                  <option>EL TABO</option>
                                                  <option>EMPEDRADO</option>
                                                  <option>ERCILLA</option>
                                                  <option>ESTACIÓN CENTRAL</option> 
                                                  <option>FLORIDA</option>
                                                  <option>FREIRE</option>
                                                  <option>FREIRINA</option>
                                                  <option>FRESIA</option>
                                                  <option>FRUTILLAR</option>
                                                  <option>FUTALEUFÚ</option>
                                                  <option>FUTRONO</option>
                                                  <option>GALVARINO</option>
                                                  <option>GENERAL LAGOS</option>
                                                  <option>GORBEA</option>
                                                  <option>GRANEROS</option>
                                                  <option>GUAITECAS</option>
                                                  <option>HIJUELAS</option>
                                                  <option>HUALAIHUÉ</option>
                                                  <option>HUALAÑÉ</option>
                                                  <option>HUALPÉN</option>
                                                  <option>HUALQUI</option>
                                                  <option>HUARA</option>
                                                  <option>HUASCO</option>
                                                  <option>HUECHURABA</option>
                                                  <option>ILLAPEL</option>
                                                  <option>INDEPENDENCIA</option>
                                                  <option>IQUIQUE</option>
                                                  <option>ISLA DE MAIPO</option>  
                                                  <option>ISLA DE PASCUA</option>  
                                                  <option>JUAN FERNÁNDEZ</option> 
                                                  <option>LA CALERA</option> 
                                                  <option>LA CISTERNA</option> 
                                                  <option>LA CRUZ</option> 
                                                  <option>LA ESTRELLA</option> 
                                                  <option>LA FLORIDA</option> 
                                                  <option>LA GRANJA</option> 
                                                  <option>LA HIGUERA</option> 
                                                  <option>LA LIGUA</option> 
                                                  <option>LA PINTANA</option> 
                                                  <option>LA REINA</option> 
                                                  <option>LA SERENA</option> 
                                                  <option>LA UNIÓN</option> 
                                                  <option>LAGO RANCO</option> 
                                                  <option>LAGO VERDE</option> 
                                                  <option>LAGUNA BLANCA</option> 
                                                  <option>LAJA</option>
                                                  <option>LAMPA</option>
                                                  <option>LANCO</option>
                                                  <option>LAS CABRAS</option> 
                                                  <option>LAS CONDES</option> 
                                                  <option>LAUTARO</option>
                                                  <option>LEBU</option>
                                                  <option>LICANTÉN</option>
                                                  <option>LIMACHE</option>
                                                  <option>LINARES</option>
                                                  <option>LITUECHE</option>
                                                  <option>LLAY LLAY</option> 
                                                  <option>LLANQUIHUE</option>
                                                  <option>LO BARNECHEA</option> 
                                                  <option>LO ESPEJO</option> 
                                                  <option>LO PRADO</option> 
                                                  <option>LOLOL</option>
                                                  <option>LONCOCHE</option>
                                                  <option>LONGAVÍ</option>
                                                  <option>LONQUIMAY</option>
                                                  <option>LOS ÁLAMOS</option> 
                                                  <option>LOS ANDES</option> 
                                                  <option>LOS ÁNGELES</option> 
                                                  <option>LOS LAGOS</option> 
                                                  <option>LOS MUERMOS</option> 
                                                  <option>LOS SAUCES</option> 
                                                  <option>LOS VILOS</option> 
                                                  <option>LOTA</option>
                                                  <option>LUMACO</option>
                                                  <option>MACHALÍ</option>
                                                  <option>MACUL</option>
                                                  <option>MÁFIL</option>
                                                  <option>MAIPÚ</option>
                                                  <option>MALLOA</option>
                                                  <option>MARCHIHUE</option>
                                                  <option>MARÍA ELENA</option> 
                                                  <option>MARÍA PINTO</option> 
                                                  <option>MARIQUINA</option>
                                                  <option>MAULE</option>
                                                  <option>MAULLÍN</option>
                                                  <option>MEJILLONES</option>
                                                  <option>MELIPEUCO</option>
                                                  <option>MELIPILLA</option>
                                                  <option>MOLINA</option>
                                                  <option>MONTE PATRIA</option> 
                                                  <option>MOSTAZAL</option>
                                                  <option>MULCHÉN</option>
                                                  <option>NACIMIENTO</option>
                                                  <option>NANCAGUA</option>
                                                  <option>NATALES</option>
                                                  <option>NAVIDAD</option>
                                                  <option>NEGRETE</option>
                                                  <option>NINHUE</option>
                                                  <option>ÑIQUÉN</option>
                                                  <option>NOGALES</option>
                                                  <option>NUEVA IMPERIAL</option> 
                                                  <option>ÑUÑOA</option>
                                                  <option>O’HIGGINS</option>
                                                  <option>OLIVAR</option>
                                                  <option>OLLAGÜE</option>
                                                  <option>OLMUÉ</option>
                                                  <option>OSORNO</option>
                                                  <option>OVALLE</option>
                                                  <option>PADRE HURTADO</option> 
                                                  <option>PADRE LAS CASAS</option>  
                                                  <option>PAIGUANO</option>
                                                  <option>PAILLACO</option>
                                                  <option>PAINE</option>
                                                  <option>PALENA</option>
                                                  <option>PALMILLA</option>
                                                  <option>PANGUIPULLI</option>
                                                  <option>PANQUEHUE</option>
                                                  <option>PAPUDO</option>
                                                  <option>PAREDONES</option>
                                                  <option>PARRAL</option>
                                                  <option>PEDRO AGUIRRE CERDA</option>  
                                                  <option>PELARCO</option>
                                                  <option>PELLUHUE</option>
                                                  <option>PEMUCO</option>
                                                  <option>PEÑAFLOR</option>
                                                  <option>PEÑALOLÉN</option>
                                                  <option>PENCAHUE</option>
                                                  <option>PENCO</option>
                                                  <option>PERALILLO</option>
                                                  <option>PERQUENCO</option>
                                                  <option>PETORCA</option>
                                                  <option>PEUMO</option>
                                                  <option>PICA</option>
                                                  <option>PICHIDEGUA</option>
                                                  <option>PICHILEMU</option>
                                                  <option>PINTO</option>
                                                  <option>PIRQUE</option>
                                                  <option>PITRUFQUÉN</option>
                                                  <option>PLACILLA</option>
                                                  <option>PORTEZUELO</option>
                                                  <option>PORVENIR</option>
                                                  <option>POZO ALMONTE</option> 
                                                  <option>PRIMAVERA</option>
                                                  <option>PROVIDENCIA</option>
                                                  <option>PUCHUNCAVÍ</option>
                                                  <option>PUCÓN</option>
                                                  <option>PUDAHUEL</option>
                                                  <option>PUENTE ALTO</option> 
                                                  <option>PUERTO MONTT</option> 
                                                  <option>PUERTO OCTAY</option> 
                                                  <option>PUERTO VARAS</option> 
                                                  <option>PUMANQUE</option>
                                                  <option>PUNITAQUI</option>
                                                  <option>PUNTA ARENAS</option> 
                                                  <option>PUQUELDÓN</option>
                                                  <option>PURÉN</option>
                                                  <option>PURRANQUE</option>
                                                  <option>PUTAENDO</option>
                                                  <option>PUTRE</option>
                                                  <option>PUYEHUE</option>
                                                  <option>QUEILÉN</option>
                                                  <option>QUELLÓN</option>
                                                  <option>QUEMCHI</option>
                                                  <option>QUILACO</option>
                                                  <option>QUILICURA</option>
                                                  <option>QUILLECO</option>
                                                  <option>QUILLÓN</option>
                                                  <option>QUILLOTA</option>
                                                  <option>QUILPUÉ</option>
                                                  <option>QUINCHAO</option>
                                                  <option>QUINTA DE TILCOCO</option>  
                                                  <option>QUINTA NORMAL</option> 
                                                  <option>QUINTERO</option>
                                                  <option>QUIRIHUE</option>
                                                  <option>RANCAGUA</option>
                                                  <option>RÁNQUIL</option>
                                                  <option>RAUCO</option>
                                                  <option>RECOLETA</option>
                                                  <option>RENAICO</option>
                                                  <option>RENCA</option>
                                                  <option>RENGO</option>
                                                  <option>REQUÍNOA</option>
                                                  <option>RETIRO</option>
                                                  <option>RINCONADA</option>
                                                  <option>RÍO BUENO</option> 
                                                  <option>RÍO CLARO</option> 
                                                  <option>RÍO HURTADO</option> 
                                                  <option>RÍO IBÁÑEZ</option> 
                                                  <option>RÍO NEGRO</option> 
                                                  <option>RÍO VERDE</option> 
                                                  <option>ROMERAL</option>
                                                  <option>SAAVEDRA</option>
                                                  <option>SAGRADA FAMILIA</option> 
                                                  <option>SALAMANCA</option>
                                                  <option>SAN ANTONIO</option> 
                                                  <option>SAN BERNARDO</option> 
                                                  <option>SAN CARLOS</option> 
                                                  <option>SAN CLEMENTE</option> 
                                                  <option>SAN ESTEBAN</option> 
                                                  <option>SAN FABIÁN</option> 
                                                  <option>SAN FELIPE</option> 
                                                  <option>SAN FERNANDO</option> 
                                                  <option>SAN GREGORIO</option> 
                                                  <option>SAN IGNACIO</option> 
                                                  <option>SAN JAVIER</option> 
                                                  <option>SAN JOAQUÍN</option> 
                                                  <option>SAN JOSÉ DE MAIPO</option> 
                                                  <option>SAN JUAN DE LA COSTA</option> 
                                                  <option>SAN MIGUEL</option> 
                                                  <option>SAN NICOLÁS</option> 
                                                  <option>SAN PABLO</option> 
                                                  <option>SAN PEDRO</option> 
                                                  <option>SAN PEDRO DE ATACAMA</option> 
                                                  <option>SAN PEDRO DE LA PAZ</option>
                                                  <option>SAN RAFAEL</option> 
                                                  <option>SAN RAMÓN</option> 
                                                  <option>SAN ROSENDO</option> 
                                                  <option>SAN VICENTE</option> 
                                                  <option>SANTA BÁRBARA</option> 
                                                  <option>SANTA CRUZ</option> 
                                                  <option>SANTA JUANA</option> 
                                                  <option>SANTA MARÍA</option> 
                                                  <option>SANTIAGO</option>
                                                  <option>SANTO DOMINGO</option> 
                                                  <option>SIERRA GORDA</option> 
                                                  <option>TALAGANTE</option>
                                                  <option>TALCA</option>
                                                  <option>TALCAHUANO</option>
                                                  <option>TALTAL</option>
                                                  <option>TEMUCO</option>
                                                  <option>TENO</option>
                                                  <option>TEODORO SCHMIDT</option> 
                                                  <option>TIERRA AMARILLA</option> 
                                                  <option>TILTIL</option>
                                                  <option>TIMAUKEL</option>
                                                  <option>TIRÚA</option>
                                                  <option>TOCOPILLA</option>
                                                  <option>TOLTÉN</option>
                                                  <option>TOMÉ</option>
                                                  <option>TORRES DEL PAINE</option>
                                                  <option>TORTEL</option>
                                                  <option>TRAIGUÉN</option>
                                                  <option>TREGUACO</option>
                                                  <option>TUCAPEL</option>
                                                  <option>VALDIVIA</option>
                                                  <option>VALLENAR</option>
                                                  <option>VALPARAÍSO</option>
                                                  <option>VICHUQUÉN</option>
                                                  <option>VICTORIA</option>
                                                  <option>VICUÑA</option>
                                                  <option>VILCÚN</option>
                                                  <option>VILLA ALEGRE</option>
                                                  <option>VILLA ALEMANA</option> 
                                                  <option>VILLARRICA</option>
                                                  <option>VIÑA DEL MAR</option>
                                                  <option>VITACURA</option>
                                                  <option>YERBAS BUENAS</option> 
                                                  <option>YUMBEL</option>
                                                  <option>YUNGAY</option>
                                                  <option>ZAPALLAR</option>
                                                  <option>HORCÓN</option>
                                                  <option>PUERTO NATALES</option> 
                                              </select>
                                            </div>
                        
                                          </div>
                                          <div class="form-row my-3">
                                            <div class="form-group col-md-6">
                                              <label for="tipo_empresa">Tipo de Organización</label>
                                                <select class="custom-select" id="tipo_empresa" >
                                                  <option>Privado.</option>
                                                  <option>Público.</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                              <label for="emp_dpr">Empresa tiene Dpto de Prevención de Riesgos</label>
                                                <select class="custom-select" id="emp_dpr" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                </select>
                                            </div>
                                          </div>
                                          <div class="form-row my-3">
                                            <div class="form-group col-md-6">
                                              <label for="rhs">Existe Reglamento de Higiene y Seguridad</label>
                                                <select class="custom-select" id="rhs" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                  <option>No corresponde.</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                              <label >Está incorporando el riesgo de Silice</label>
                                                <select class="custom-select" id="rs_1" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                </select>
                                            </div>
                                          </div>
                                          <div class="form-row my-3">
                                            <div class="form-group col-md-6">
                                              <label for="riosh">Existe Reglamento de Orden, Higiene y Seguridad</label>
                                                <select class="custom-select" id="riosh" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                  <option>No corresponde.</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                              <label for="rs_2">Está incorporando el riesgo de Silice</label>
                                                <select class="custom-select" id="rs_2" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                </select>
                                            </div>
                                          </div>
                                          <button type="button" class="btn btn-secondary" onclick="desplegarcard2()">Siguiente</button>
                                        </div>
                                    </div>
                                  </div>
                        
                                  <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                      <button id="desplegarcard2"class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        II- Antecedentes del Centro de Trabajo Evaluado (CT)
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                      <div class="form-row">
                                        <div class="form-group col-md-5">
                                          <label>Nombre Centro de Trabajo</label>
                                          <input type="text" class="form-control" id="Centro_trabajo" placeholder="Nombre Representante Legal" >
                                        </div>
                                          <div class="form-group col-md-2">
                                            <label>Numero de sucursal</label>
                                            <input class="form-control" id="sucursal_gopist" placeholder="Asignado en GOPIST" >
                                          </div>
                                          <div class="form-group col-md-5">
                                            <label >Función de Empresa Evaluada en el Centro de Trabajo</label>
                                              <select class="custom-select" id="fun_emp" >
                                                <option>(1) Principal.</option>
                                                <option>(2) Contratista</option>
                                                <option>(3) Subcontratista</option>
                                                <option>(4) Servicios Transitorios</option>
                                              </select>
                                          </div>              
                                          <div class="form-group col-md-5">
                                            <label for="Empleador_p">Nombre Empleador Principal</label>
                                            <input class="form-control" id="Empleador_p" placeholder="Sociedad S.A." >
                                          </div>
                                          <div class="form-group col-md-3">
                                            <label for="rut_emp2">RUT Empleador Principal</label>
                                            <input class="form-control" id="rut_emp2" placeholder="11.111.111-1" >
                                          </div>
                                          <div class="col-4">
                                            <label for="cierre_ct">¿Se conoce fecha de cierre del CT?</label>
                                              <select class="custom-select" id="cierre_ct" >
                                                <option>Si.</option>
                                                <option>No.</option>
                                              </select>
                                          </div>
                                        </div>
                                        <div class="form-row">
                                          <div class="col-3">
                                            <label for="f_ini_ct">Fecha de Inicio del CT</label>
                                            <input type="date" class="form-control"  id="f_ini_ct" placeholder="Fecha de Inicio del CT" >
                                          </div>
                                          <div class="col-3">
                                            <label for="f_cie_ct">Fecha de Cierre del CT</label>
                                            <input type="date" class="form-control" id="f_cie_ct" placeholder="Fecha de Cierre del CT" >
                                          </div>
                                          <div class="col-6">
                                            <label for="est_ct">Estado Centro de Trabajo</label>
                                              <select class="custom-select" id="est_ct" >
                                                <option selected disabled value="">Selecciona...</option>
                                                <option>Activo.</option>
                                                <option>Caduco.</option>
                                              </select>
                                          </div>
                                        </div>
                                        <div class="form-row my-3">
                                          <div class="col">
                                            <label for="geo_la">Geolocalización (Latitud) CT</label>
                                            <input type="text" class="form-control" id="geo_la" placeholder="Clic para geolocalizar" >
                                          </div>
                                          <div class="col">
                                            <label for="geo_lo">Geolocalización (Longitud) CT</label>
                                            <input type="text" class="form-control" id="geo_lo" placeholder="Clic para geolocalizar" >
                                          </div>
                                        </div>
                                        <div class="form-row">
                                          <div class="form-group col-md-5">
                                            <label for="nomCalle_emp2">Nombre de la calle en que se ubica centro de Trabajo</label>
                                            <input type="text" class="form-control" id="nomCalle_emp2" placeholder="Direccion centro de trabajo" >
                                          </div>
                                          <div class="form-group col-md-3">
                                            <label for="numCalle_emp2">Número</label>
                                            <input class="form-control" id="numCalle_emp2" >
                                          </div>
                                          <div class="form-group col-md-4">
                                            <label for="tipoCalle">Tipo de Calle</label>
                                              <select class="custom-select" id="tipoCalle" >
                                                <option>(1) Avenida.</option>
                                                <option>(2) Calle</option>
                                                <option>(3) Pasaje</option>
                                              </select>
                                          </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-5">
                                              <label for="restDirect_emp1">Resto Direccion Casa Matriz</label>
                                              <input type="text" class="form-control" id="restDirect_emp1" placeholder="Resto dirección de casa matriz" >
                                            </div>
                                            <div class="col-4">
                                              <label for="loc_ct">Localidad Centro de Trabajo</label>
                                              <input type="text" class="form-control" id="loc_ct" placeholder="Localidad" >
                                            </div>
                                            <div class="col-3">
                                              <label for="comuna_emp1">Comuna Centro de Trabajo</label>
                                              <input type="text" class="form-control" id="comuna_emp1" placeholder="Comuna" >
                                            </div>
                                          </div>
                                          <div class="form-row">
                                            <div class="form-group col-12 my-3">
                                              <label for="desc_act_ct">Descripción de la actividad de la empresa en el Centro de Trabajo.</label>
                                              <textarea class="form-control" id="desc_act_ct" ></textarea>
                                            </div>
                                            <div class="form-row">
                                              <div class="form-group col-md-6">
                                                <label for="cphs_ct">¿Existe Comité Paritario en CT o se está representando en CPHS de faena?</label>
                                                <select class="custom-select" id="cphs_ct" >
                                                  <option>Si.</option>
                                                  <option>No.</option>
                                                  <option>No corresponde.</option>
                                                </select>
                                              </div>
                                              <div class="form-group col-md-6">
                                                <label for="exp_ct">Se cuenta con experto en Prevencion de Riesgos en el CT</label>
                                                  <select class="custom-select" id="exp_ct" >
                                                    <option>Si.</option>
                                                    <option>No.</option>
                                                  </select>
                                              </div>
                                              <div class="form-group col-md-2">
                                                <label for="t_t">Total de Trabajadores</label>
                                                <input class="form-control" id="t_t" >
                                              </div>
                                              <div class="form-group col-md-2">
                                                <label for="t_m">Total de Mujeres</label>
                                                <input class="form-control" id="t_m" >
                                              </div>
                                              <div class="form-group col-md-2">
                                                <label for="t_h"> Total de Hombres</label>
                                                <input class="form-control" id="t_h" >
                                              </div>
                                              <div class="form-group col-md-6">
                                                <label for="h_exp">Horas dedicadas en CT, del experto en prevencion de riesgos</label>
                                                <input class="form-control" id="h_exp" >
                                              </div>
                                            </div>
                                          </div>
                                      <button type="submit" class="btn btn-secondary" onclick="desplegarcard3()">Siguiente</button>
                                    </div>
                                  </div>
                        
                                <div class="card3">
                                  <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                      <button id="desplegarcard3" class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        III- Antecedentes de la Exposición</button></h2>
                                  </div>
                                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                      <div class="form-group my-3">
                                        <label for="r_31">1.- Identificación de las áreas visitadas y/o analizadas, propias o de terceros.</label>
                                        <textarea class="form-control" id="r_31" ></textarea>
                                      </div>
                                      <div class="form-group my-3">
                                        <label for="r_32">2.- Descripción del proceso e Identificación de las etapas en las que hay presencia de sílice.</label>
                                        <textarea class="form-control" id="r_32"></textarea>
                                      </div>
                                      <div class="form-group my-3">
                                        <label for="r_33">3.- En la actualidad o proximamente, en los servicios, procesos productivos o de mantención, realizados o a realizar en dependencias propias o de terceros, se usan o se está en contacto con materias primas, suministros o productos que contienen sílice:</label>
                                        <textarea class="form-control" id="r_33"> -- Complete este espacio y borre los elementos que no correspondan al presente documento -- Arena, Hormigón, Cuarzo, Cemento, Material Abrasivo que tiene sílice, Morteros, Minerales, Baldosas, Ladrillos, Granalla contaminada con material silíceo, Gravillas, Mármol, Cerámicas, Ladrillo refractario, Pomacita, Ripio, Rocas, Porcelana, Tierras filtrantes, Bolones, Granitos, Porcelanato, Porcelana dental, OTROS. No se identifican materias primas, suministros o productos conteniendo silíce.
                                        </textarea>
                                      </div>
                                      <div class="form-group my-3">
                                        <label for="r_34">4.- Los materiales o elementos anteriores se usan o están presentes en tareas que generan polvo en suspensión.</label>
                                        <textarea class="form-control" id="r_34">-- Complete este espacio y borre los elementos que no correspondan al presente documento -- Pulir/lijar, Debastar, Cortar, Romper, Serrar, Taladrar, Tallar, Tornear, Perforar, Excavar, Demoler, Tamizar, Mezclar, Excavar, Vaciar bolsas, Barrer, Cargar, Chancar/Moler, Roleo/cuarteo muestras, Limpiar andamios, Limpiar con aire comprimido, Limpiar con chorro abrasivo en seco, Limpiar herramientas con materia sicíleos adheridos, Permanecer en lugares con polvo silíceos (durante supervisión, mantención, etc.), No se identifican procesos o tareas que generen polvos sicíleos en suspensión.
                                        </textarea>
                                      </div>
                                      <button type="button" class="btn btn-secondary" onclick="desplegarcard4()">Siguiente</button>
                                  </div>
                                </div>
                        
                                <div class="card4">
                                  <div class="card-header" id="headingFour">
                                    <h2 class="mb-0">
                                      <button id="desplegarcard4" class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        IV- Conclusión Respecto al Centro de Trabajo Evaluado y otros lugares donde se presta servicio.
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res1">
                                        <label class="form-check-label" for="res1">Si existe peligro. Se identifica presencia de polvo de sílice en suspensión en los lugares de trabajo del centro de trabajo evaluado.</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res2">
                                        <label class="form-check-label" for="res2">Si existe peligro. Se identifica presencia de polvo de sílice en suspensión en los lugares de terceros donde se presta el servicio.</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res3">
                                        <label class="form-check-label" for="res3">Si existe peligro. En estapas futuras, en CT y /o lugares de terceros, existirá polvo de sílice en suspensión (ej: obra en construcción).</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res4">
                                        <label class="form-check-label" for="res4">No existe peligro. No se identifica materiales que contienen sílice que pudiesen originar polvo en suspensión.</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res5">
                                        <label class="form-check-label" for="res5">No existe peligro. Se identifica materiales que contienen sílice, pero los procesos no generan polvo en suspensión.</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res6">
                                        <label class="form-check-label" for="res6">No existe peligro. El centro de trabajo actualmente finalizó su proceso o labor, y se encuentra cerrado (CT caducó).</label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="res7">
                                        <label class="form-check-label" for="res7">Empresa ya no es adherente del IST(CT caducó).</label>
                                      </div>
                                      <button type="button" class="btn btn-secondary my-3" onclick="desplegarcard5()">Siguiente</button>
                        
                                    </div>
                                  </div>
                                </div>
                        
                        
                                <div class="card5">
                                  <div class="card-header" id="headingFive">
                                    <h2 class="mb-0">
                                      <button id="desplegarcard5" class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                        V- Datos de Identificación.
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div class="card-body">
                                      <div class="table-responsive">
                                        <table class="table">
                                          <tr>
                                            <th scope="col">Asesor IST</th>
                                            <th scope="col">Representante de la Empresa</th>
                                          </tr>
                                          <tr>
                                            <td><input id="as1" class="form-control" type="text" placeholder="Apellido Paterno"></td>
                                            <td><input id="re1" class="form-control" type="text" placeholder="Apellido Paterno"></td>
                                          </tr>
                                          <tr>
                                            <td><input id="as2" class="form-control" type="text" placeholder="Apellido Materno"></td>
                                            <td><input id="re2" class="form-control" type="text" placeholder="Apellido Materno"></td>
                                          </tr>
                                          <tr>
                                            <td><input id="as3" class="form-control" type="text" placeholder="Apellido Nombres"></td>
                                            <td><input id="re3" class="form-control" type="text" placeholder="Apellido Nombres"></td>
                                          </tr>
                                          <tr>
                                            <td><input id="as4" class="form-control" type="text" placeholder="RUN/CI"></td>
                                            <td><input id="re4" class="form-control" type="text" placeholder="RUN/CI"></td>
                                          </tr>
                                          <tr>
                                            <td><input id="as5" class="form-control" type="text" placeholder="Email"></td>
                                            <td><input id="re5" class="form-control" type="text" placeholder="Email"></td>
                                          </tr>
                                          <tr>
                                            <td><input id="as6" class="form-control" type="text" placeholder="Fono"></td>
                                            <td><input id="re6" class="form-control" type="text" placeholder="Fono"></td>
                                          </tr>
                                        </table>
                        
                                        <p class="my-3">*Las situaciones informadas en este documento, corresponden a aquellas declaradas por la empresa y/u observadas en el momento de la visita.*</p>
                                        <p>*La presente actividad se enmarca dentro del Plan Nacional para la Erradicación de la Silicosis (PLANESI), establecido por el Gobierno de Chile.*</p>
                                        <div><p >Fecha de la Actividad <input id="fechaact" type="date" class="form-control"></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                            </div>
                            <div class="modal-footer">
                            <button type="submit" id= "submit_btn1" class="btn-block my-3 btn btn-secondary col-md-4" data-dismiss='modal'>Enviar</button>
                            </div>
                            </div>
                        </div>
                    </div>   
                  </td>
                  <td><a class="btn btn-primary" href="javascript:genPDF()">Descargar PDF</a></a></td>
                </tr>`
    });
});

                
//Editar
function editar(id,rut_emp1,nombre_emp1,nombre_representante,CIIU_emp1,giro_emp1,tipoCalleemp,nomCalle_emp1,numCalle_emp1,restDirec_emp,
    localidad_emp,comunas,tipo_empresa,emp_dpr,rhs,rs_1,riosh,rs_2,Centro_trabajo,sucursal_gopist,fun_emp,Empleador_p,rut_emp2,cierre_ct,
    f_ini_ct,f_cie_ct,est_ct,geo_la,geo_lo,nomCalle_emp2,numCalle_emp2,tipoCalle,restDirect_emp1,loc_ct,comuna_emp1,desc_act_ct,cphs_ct,
    exp_ct,t_t,t_m,t_h,h_exp,r_31,r_32,r_33,r_34,res1,res2,res3,res4,res5,res6,res7,as1,re1,as2,re2,as3,re3,as4,re4,as5,re5,as6,re6,fechaact
    ){
    
        document.getElementById('rut_emp1').value = rut_emp1;
        document.getElementById('nombre_emp1').value = nombre_emp1;
        document.getElementById('nombre_representante').value = nombre_representante;
        document.getElementById('CIIU_emp1').value = CIIU_emp1;
        document.getElementById('giro_emp1').value = giro_emp1;
        document.getElementById('tipoCalleemp').value = tipoCalleemp;
        document.getElementById('nomCalle_emp1').value = nomCalle_emp1;
        document.getElementById('numCalle_emp1').value = numCalle_emp1;
        document.getElementById('restDirec_emp').value = restDirec_emp;
        document.getElementById('localidad_emp').value = localidad_emp;
        document.getElementById('comunas').value = comunas;
        document.getElementById('tipo_empresa').value = tipo_empresa;
        document.getElementById('emp_dpr').value = emp_dpr;
        document.getElementById('rhs').value = rhs;
        document.getElementById('rs_1').value = rs_1;
        document.getElementById('riosh').value = riosh;
        document.getElementById('rs_2').value = rs_2;
        document.getElementById('Centro_trabajo').value = Centro_trabajo;
        document.getElementById('sucursal_gopist').value = sucursal_gopist;
        document.getElementById('fun_emp').value = fun_emp;
        document.getElementById('Empleador_p').value = Empleador_p;
        document.getElementById('rut_emp2').value = rut_emp2;
        document.getElementById('cierre_ct').value = cierre_ct;
        document.getElementById('f_ini_ct').value = f_ini_ct;
        document.getElementById('f_cie_ct').value = f_cie_ct;
        document.getElementById('est_ct').value = est_ct;
        document.getElementById('geo_la').value = geo_la;
        document.getElementById('geo_lo').value = geo_lo;
        document.getElementById('nomCalle_emp2').value = nomCalle_emp2;
        document.getElementById('numCalle_emp2').value = numCalle_emp2;
        document.getElementById('tipoCalle').value = tipoCalle;
        document.getElementById('restDirect_emp1').value = restDirect_emp1;
        document.getElementById('loc_ct').value = loc_ct;
        document.getElementById('comuna_emp1').value = comuna_emp1;
        document.getElementById('desc_act_ct').value = desc_act_ct;
        document.getElementById('cphs_ct').value = cphs_ct;
        document.getElementById('exp_ct').value = exp_ct;
        document.getElementById('t_t').value = t_t;
        document.getElementById('t_m').value = t_m;
        document.getElementById('t_h').value = t_h;
        document.getElementById('h_exp').value = h_exp;
        document.getElementById('r_31').value = r_31;
        document.getElementById('r_32').value = r_32;
        document.getElementById('r_33').value = r_33;
        document.getElementById('r_34').value = r_34;
        document.getElementById('res1').value = res1;
        document.getElementById('res2').value = res2;
        document.getElementById('res3').value = res3;
        document.getElementById('res4').value = res4;
        document.getElementById('res5').value = res5;
        document.getElementById('res6').value = res6;
        document.getElementById('res7').value = res7;
        document.getElementById('as1').value = as1;
        document.getElementById('re1').value = re1;
        document.getElementById('as2').value = as2;
        document.getElementById('re2').value = re2;
        document.getElementById('as3').value = as3;
        document.getElementById('re3').value = re3;
        document.getElementById('as4').value = as4;
        document.getElementById('re4').value = re4;
        document.getElementById('as5').value = as5;
        document.getElementById('re5').value = re5;
        document.getElementById('as6').value = as6;
        document.getElementById('re6').value = re6;
        document.getElementById('fechaact').value = fechaact;
    
        var submit_btn1 = document.getElementById('submit_btn1');
        submit_btn1.innerHTML= 'Editar';

        submit_btn1.onclick = function(){
            var washingtonRef = db.collection("ipho").doc(id);

            // Set the "capital" field of the city 'DC'

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
            var r_31 = document.getElementById('r_31').value;
            var r_32 = document.getElementById('r_32').value;
            var r_33 = document.getElementById('r_33').value;
            var r_34 = document.getElementById('r_34').value;
            var res1 = document.getElementById('res1').value;
            var res2 = document.getElementById('res2').value;
            var res3 = document.getElementById('res3').value;
            var res4 = document.getElementById('res4').value;
            var res5 = document.getElementById('res5').value;
            var res6 = document.getElementById('res6').value;
            var res7 = document.getElementById('res7').value;
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

            return washingtonRef.update({
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
            
                r_31: r_31,
                r_32: r_32,
                r_33: r_33,
                r_34: r_34,
            
                res1: res1,
                res2: res2,
                res3: res3,
                res4: res4,
                res5: res5,
                res6: res6,
                res7: res7,
                
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
                fechaact : fechaact,
            })
            .then(function() {
                console.log("Document successfully edited!");
                alert("Registro Editado Correctamente");

            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
                alert("Error al Editar Documento");
            });
        }
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

//Buscador
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabla");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




//PDF
function genPDF() {
	var pdf = new jsPDF('p', 'pt', 'letter');
        source = $('#form')[0];
        specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true
            }
        };
        margins = {
            top: 60,
            bottom: 40,
            left: 40,
            width: 522
        };
        pdf.fromHTML(
            source, 
            margins.left, // x coord
            margins.top, { // y coord
                'width': margins.width, 
                'elementHandlers': specialElementHandlers
            },
            function (dispose) {
                pdf.save('IPHO.pdf');
            }, margins
        );
}