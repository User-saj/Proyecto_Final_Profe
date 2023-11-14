/* JavaScript para login.html */

/* ------------------- funcion para cargar datos del LS --------------------- */
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

/* --------------------   funcion para el boton login  -------------------- */
// ***** funcion: lee info del formulario al presionar el boton "login"(submit)
function func_leeLS(evento) {
  // previene la accion original del boton submit
  evento.preventDefault();
  // redirecciona a registreo.html si no hay usuarios guardados
  if (localStorage.length == 0) {
    alert("No hay Usuarios Registrados");
    window.location.href = "registro.html";
  }
  // nombre y pass introducido por el usuario
  const logNombre = document.getElementById("uname").value;
  const logPass = document.getElementById("psw").value;
  // busca el indice del arreglo que coincida con el nombre para login ( si no existe es -1)
  const idxBuscado = usrsArreglo.findIndex((elemento) => elemento.nombre == logNombre);

  // opciones posibles en login
  if (idxBuscado == -1) {
    alert(`El usuario ${logNombre} no está registrado`);
  } else {
    if (usrsArreglo[idxBuscado].contrasena == logPass) {
      // guarda nombre d eusuario en sessionStorage
      sessionStorage.setItem("nombUsr", logNombre);
      alert(`Bienvenido ${logNombre}, has iniciado sesión.`);
      // redireccion a pagina principal
      window.location.href = "index.html";
    } else {
      alert(`La contraseña de ${logNombre} no coincide.`);
    }
  }
}
