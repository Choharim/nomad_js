

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



const otherClassName = "clicked";

function nameChange () {
  const currentClassName = title.className ;
  if(currentClassName !== otherClassName){
    title.className = otherClassName;
    
  }
  else{
    title.className = "unclicked";
  }
}

function init () {
  window.addEventListener("click",nameChange);
}
init ();