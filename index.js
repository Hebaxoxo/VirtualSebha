let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let tasbeeh = count + " - "
    saveEl.textContent += tasbeeh
    countEl.textContent = 0
    count = 0
}
