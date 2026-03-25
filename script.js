const header = document.querySelector("h1");

header.addEventListener("click", function() {
  header.style.color = "red";
  document.body.style.backgroundColor = "pink";
  header.style.fontFamily = "Courier New";
});