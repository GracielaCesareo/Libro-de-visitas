alert('Hola');
function mostrarTexto() {
  var inputBox = document.getElementById('cajaTexto');
  document.getElementById('textoMuestra').innerHTML = inputBox.value;
}

function textoEnviado() {
  var division = document.createElement("div");
  var texto = document.createTextNode("document.getElementById('textoMuestra')");
  division.appendChild(texto);
  document.body.appendChild(division);
}

function textoGrande() {
  document.getElementById('textoMuestra').style.fontSize = "30px";
}

function textoMed() {
  document.getElementById('textoMuestra').style.fontSize = "20px";
}

function textoChico() {
  document.getElementById('textoMuestra').style.fontSize = "12px";
}

function cambioColor() {
  var nuevoColor = prompt("Escribe el color en hexadecimal");
  document.getElementById('textoMuestra').style.color = nuevoColor;
}

function cambioFondo() {
  var nuevoFondo = prompt("Escribe el color en hexadecimal");
  document.getElementById('textoMuestra').style.backgroundColor = nuevoFondo;
}

function alineacionDerecha() {
  document.getElementById('textoMuestra').style.textAling = "rigth";
}

function alineacionCentro() {
  document.getElementById('textoMuestra').style.textAling = "center";
}

function alineacionIzquierda() {
  document.getElementById('textoMuestra').style.textAling = "left";
}

function agregarImagen() {
  var imagen = prompt("Escribe la URL de tu imagen");
}

function borrarComentario() {
  var division = document.getElementById("enviado");
  division.removeChild(division.childNodes[0]);
}

function agregarLista() {
  var numeroItems = parseInt(prompt ("¿Cuántos elementos desea agregar?"));
  for (var i = 0; i < numeroItems; i++) {
      var elemento = prompt("Ingresa el elemento número " + i + 1);
  }

}
