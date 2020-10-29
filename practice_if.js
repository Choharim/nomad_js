

const title = document.querySelector("#text");

const base = "red";
const other = "blue";

function colorChange () {

  const current = title.style.color;

if (current === base){
    title.style.color = "blue";
}
else {
    title.style.color = "red";
}

}

function init () {
  title.style.color = "red";
  title.addEventListener("mouseenter",colorChange);
}
init();