const title = document.getElementById("text");
title.innerHTML = "hi im js";
console.dir(title);

title.style.color = "pink";
document.querySelector("#title");


function click () {
  title.style.color = "blue";
}
window.addEventListener("click",click);