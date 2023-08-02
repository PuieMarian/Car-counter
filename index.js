let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    
    saveEl.textContent += countStr; // 3. Render the variable in the saveEl using innerText

    countEl.textContent = 0;

    count = 0;

    console.log(count);
}

