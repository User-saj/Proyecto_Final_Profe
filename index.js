/* JavaScript para index.html */
// al iniciar sesion, el nombre de usuario valido se guarda en el sessionStorage

// controla el elemento nombre de usuario
let elemSes = document.getElementById("lnkUsuario");
// tamaño del sessionStorage
let tamSStor = sessionStorage.length;

// opciones para el logIn logOut
if (tamSStor != 0) {
  // se ha iniciado sesion, despliega nombre guardado en session Storage
  elemSes.innerHTML = sessionStorage.getItem("nombUsr");
  // agrega imagen de usuario
  imagenSesion = document.getElementById("imgUsr");
  imagenSesion.setAttribute("src", "sombrero.png");
  imagenSesion.setAttribute("width", "30%");
  // al hacer clic en el nombre de usuario se da la opcion de salir de la sesion
  elemSes.onclick = function () {
    if (confirm("Deseas salir de la sesión?")) {
      // borra el nombre de usuario
      sessionStorage.clear();
      // recarga la pagina
      location.reload();
    }
  };
} else {
  // no se ha iniciado sesion, liga a login.html
  elemSes.href = "login.html";
  elemSes.innerHTML = "login";
}
