/* JavaScript para registro.html */

/* ------------------------ acciones iniciales --------------------------- */
// bloquea el boton de guardar
var btnGrdr = document.getElementById("guardar");
btnGrdr.disabled = true;
btnGrdr.style.cursor = "not-allowed";

/* --------------------   funciones -------------------- */
// ***** funcion: guarda info del formulario al presionar el boton "guardar"(submit)
function func_guardaLS(evento) {
  // previene la accion original del boton submit
  evento.preventDefault();

  // variables locales para usar con localStorage(key, value)
  let usuario, info_usuario;
  // numero inicial de usuarios en Local Storage
  let numeroUsrs = localStorage.length;
  // carga la informacion del formulario en variables locales
  let nCompl = document.getElementById("nUsuario").value;
  let nEmail = document.getElementById("mailUsuario").value;
  let nContr = document.getElementById("nPass").value;
  // se llena una variable objeto con los valores obtenidos del formulario
  info_usuario = {
    nombre: nCompl,
    correo: nEmail,
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
