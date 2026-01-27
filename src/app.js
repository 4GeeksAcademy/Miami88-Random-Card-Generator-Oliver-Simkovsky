import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const container = document.querySelector("#container");
  const button = this.document.querySelector("#btn");

  function addButton(e){
    const newDiv = document.createElement("div");
    newDiv.className = "text-center";
    newDiv.textContent = "hello";

    container.appendChild(newDiv);
  }

  button.addEventListener("click", addButton);
};
