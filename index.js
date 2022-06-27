// Get the modal
var modal = document.getElementById("myModal");
var credit = document.getElementById("credit");
var creditmodal = document.getElementById("creditmodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var creditclose = document.getElementsByClassName("creditclose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
creditclose.onclick = function () {
  creditmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

credit.onclick = function (event) {
  creditmodal.style.display = "block";
};

window.onload = function () {
  //modal.style.display = "block";
  console.log("If you see this, tell me I messed something up");
};

console.log(
  "This is an internal development branch and you should not be seeing this"
);
