const inputArea = document.getElementById("input-area");
const listContainer = document.getElementById("list-container");

function addText() {
    if (inputArea.value === "") {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputArea.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }

    inputArea.value = "";

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);