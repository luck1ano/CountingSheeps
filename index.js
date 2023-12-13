let countEl = document.getElementById("sheep-count");
let countSave = document.getElementById("count-save");
let sheep = 0;
function count() {
    sheep += 1;
    countEl.textContent = sheep;
}

function save() {
    let countStr = sheep + " - ";
    countSave.textContent += countStr;
    countEl.textContent = 0;
    sheep = 0;
}