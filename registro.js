/* JavaScript para registro.html */

/* --------------------- acciones iniciales ----------------------- */
// bloquea el boton de guardar
var btnGrdr = document.getElementById("guardar");
btnGrdr.disabled = true;
btnGrdr.style.cursor = "not-allowed";

/* --------------- funcion para cargar datos del LS --------------- */
// ***** funcion: extrae todos los usuarios de Local Sorage en un arreglo
function todoStorage() {
  let arreglo = [], // arreglo vacio
    keys = Object.keys(localStorage), // var con todos los key de localStorage
    i = keys.length; // numero de keys en localStorage
  // i-- resta 1 a i en cada iteracion, se detiene cuando i=0
  while (i--) {
    // almacena en el arreglo un objeto(con todos los datos) por cada usuario
    arreglo.push(JSON.parse(localStorage.getItem(keys[i]))); // push añade elemento al final
  }
  return arreglo;
}
const usrsArreglo = todoStorage();

// ***** funcion: guarda info del formulario al presionar el boton "guardar"(submit)
function func_guardaLS(evento) {
  // previene la accion original del boton submit
  evento.preventDefault();

  // variables locales para usar con localStorage(key, value)
  let usuario, info_usuario;
  // numero inicial de usuarios en Local Storage
  let numeroUsrs = localStorage.length;
  // carga la informacion del formulario en variables locales
  let nNombre = document.getElementById("nUsuario").value;
  let nEmail = document.getElementById("mailUsuario").value;
  let nContr = document.getElementById("nPass").value;
  //  revisa que avatar se selecciono
  let varAvatar = document.querySelector('input[name="avatar"]:checked');
  if (varAvatar != null) {
    nAvatar = varAvatar.value;
  } else {
    nAvatar = "#";
  }

  /* busca en el local storage si ya existe el nombre o el email */
  // indice del arreglo que coincida con el nombre ( si no existe es -1)
  const idxNombre = usrsArreglo.findIndex((elemento) => elemento.nombre == nNombre);
  if (idxNombre > -1) {
    alert(`EL nombre ${nNombre} ya está registrado.`);
    return;
  }
  // indice del arreglo que coincida con el email ( si no existe es -1)
  const idxEmail = usrsArreglo.findIndex((elemento) => elemento.correo == nEmail);
  if (idxEmail > -1) {
    alert(`EL correo ${nEmail} ya está registrado.`);
    return;
  }

  // se llena una variable objeto con los valores obtenidos del formulario
  info_usuario = {
    nombre: nNombre,
    correo: nEmail,
    avatar: nAvatar,
    contrasena: nContr,
  };
  // se genera una key consecutiva cada vez que se presiona el boton submit
  usuario = `usuario_${numeroUsrs + 1}`;
  // se almacena en localStorage el objeto con la info del personaje
  localStorage.setItem(usuario, JSON.stringify(info_usuario));
  // mensaje de agradecimiento
  alert(`Gracias ${info_usuario.nombre} por registrarte.`);
  // redireccion a pagina principal
  window.location.href = "index.html";
}

// funcion que se ejecuta al marcar la casilla de terminos
function chkCondi() {
  // variable que controla la casilla terminos
  let terminos = document.getElementById("term_cond").checked;
  // habilita guardar si terminos esta marcado
  if (terminos) {
    btnGrdr.disabled = false;
    btnGrdr.style.cursor = "pointer";
  } else {
    btnGrdr.disabled = true;
    btnGrdr.style.cursor = "not-allowed";
  }
}
