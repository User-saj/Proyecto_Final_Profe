/* JavaScript para index.html */
// al iniciar sesion, el nombre de usuario valido se guarda en el sessionStorage

// controla el elemento nombre de usuario
const nombreSes = document.getElementById("lnkUsuario");
const ttipSes = document.getElementById("tooltiptext");

// tamaño del sessionStorage
let tamSStor = sessionStorage.length;

// opciones para el logIn logOut
if (tamSStor != 0) {
  // se ha iniciado sesion, despliega nombre guardado en session Storage
  nombreSes.innerHTML = sessionStorage.getItem("nombUsr");
  ttipSes.innerHTML = "terminar sesión";
  const avatarSes = sessionStorage.getItem("avatarUsr");
  // agrega imagen de usuario
  imagenSesion = document.getElementById("imgUsr");
  imagenSesion.setAttribute("src", avatarSes);
  imagenSesion.setAttribute("width", "30%");
  // al hacer clic en el nombre de usuario se da la opcion de salir de la sesion
  nombreSes.onclick = function () {
    if (confirm("Deseas salir de la sesión?")) {
      // borra el nombre de usuario
      sessionStorage.clear();
      // recarga la pagina
      location.reload();
    }
  };
} else {
  // no se ha iniciado sesion, liga a login.html
  nombreSes.href = "login.html";
  nombreSes.innerHTML = "login";
  ttipSes.innerHTML = "iniciar sesión";
}
