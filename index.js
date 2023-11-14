/* JavaScript para index.html */
// al iniciar sesion, el nombre de usuario valido se guarda en el sessionStorage

// controla el elemento usuario (círculo con nombre)
let elemSes = document.getElementById("sesion");
// tamaño del sessionStorage
let tamSStor = sessionStorage.length;

// opciones para el logIn logOut
if (tamSStor != 0) {
  // se ha iniciado sesion, despliega nombre de usuario
  elemSes.innerHTML = sessionStorage.getItem("nombUsr");
  //   al hacer clic se da la opcion de salir de la sesion
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
