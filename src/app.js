import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
    const container = document.querySelector("#container");
    const button = document.querySelector("#btn");

    function addButton(e) {
        // most outer div
        const obj = document.createElement("div");
        obj.className = "obj container-fluid h-100 d-flex justify-content-center align-items-center";

        // card container
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container bg-white p-4 rounded";

        // inner wrapper
        const inner = document.createElement("div");
        inner.className = "h-100 d-flex flex-column";

        // top row
        const topRow = document.createElement("div");
        topRow.className = "row";

        // top left
        const topLeft = document.createElement("div");
        topLeft.className = "col-2 fs-1";
        topLeft.textContent = "♣";

        const topRight = document.createElement("div");
        topRight.className = "col-10";

        topRow.appendChild(topLeft);
        topRow.appendChild(topRight);

        // middle row

        const midRow = document.createElement("div");
        midRow.className = "row my-auto";

        const midLeft = document.createElement("div");
        midLeft.className = "col-5";

        const midCenter = document.createElement("div");
        midCenter.className = "col-2 fs-1";
        midCenter.textContent = "#";

        const midRight = document.createElement("div");
        midRight.className = "col-5";

        midRow.appendChild(midLeft);
        midRow.appendChild(midCenter);
        midRow.appendChild(midRight);

        // bottom row

        const bottomRow = document.createElement("div");
        bottomRow.className = "row";

        const bottomLeft = document.createElement("div");
        bottomLeft.className = "col-10";

        const bottomRight = document.createElement("div");
        bottomRight.className = "reverse col-2 fs-1";
        bottomRight.textContent = "♣";


        bottomRow.appendChild(bottomLeft);
        bottomRow.appendChild(bottomRight);

        // all together
        inner.appendChild(topRow);
        inner.appendChild(midRow);
        inner.appendChild(bottomRow);

        cardContainer.appendChild(inner);
        obj.appendChild(cardContainer);
        container.appendChild(obj);
    }

    button.addEventListener("click", addButton);
};
