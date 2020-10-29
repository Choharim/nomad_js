

const title = document.querySelector("#text");
title.style.color = "red";

const base = "red";
const other = "blue";

function colorChangeClick () {

  const current = title.style.color;

if (current === base){
    title.style.color = "blue";
}
else {
    title.style.color = "red";
}

}
window.addEventListener("click",colorChangeClick);
