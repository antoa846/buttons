var modal = document.getElementById("popup-modal");
var openBtn = document.getElementById("open-popup");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}