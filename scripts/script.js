const container = document.querySelector(".container");
const createNewSheet = document.querySelector(".create-new-sheet-btn");

function makeGrids(numberOfColumns = 16) {
    let numberOfGrids = numberOfColumns**2;
    for(let i = 0; i < numberOfGrids; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid");
        cell.style.flexBasis = `${960 / numberOfColumns}px`;
        cell.setAttribute("gridOpacity", 0);
        container.appendChild(cell);
    }
    console.log(container.style);
}

function generateRandomColor(opacity) {
    const randomNumber1 = Math.floor(Math.random() * 256); // generate random number between 0 - 255
    const randomNumber2 = Math.floor(Math.random() * 256); // generate random number between 0 - 255
    const randomNumber3 = Math.floor(Math.random() * 256); // generate random number between 0 - 255
    const randomColor = `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${opacity})`;
    return randomColor;
}

container.addEventListener("mouseover", (event) => {
    target = event.target;
    let opacity = Number(target.getAttribute("gridOpacity")) + 0.1;
    target.setAttribute("gridOpacity", opacity)    
    target.style.backgroundColor = generateRandomColor(opacity);
})

container.addEventListener("mouseout", (event) => {
    target = event.target;
    target.style.backgroundColor = "inherit";
})

createNewSheet.addEventListener("click", (e) => {
    e.preventDefault()    
    const numberOfColumns = prompt("Enter number of columns");    
    let convertToNumber = Number(numberOfColumns);
    if (convertToNumber > 100 ||
        convertToNumber < 1 ||
        isNaN(convertToNumber)
    ) {
        alert("Number of columns should be between 1 - 100");
        return;
    }
    container.innerHTML = "";
    makeGrids(convertToNumber);
})
makeGrids();
