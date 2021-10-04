//console.log("Your index.js file is loaded correctly!");

var modal = document.getElementById("myModal");
var mainPhoto = document.getElementById("mainPhoto");
var span = document.getElementsByClassName("modal-close-button")[0];

mainPhoto.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

// cerrar el modal cuando se da click fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}