// Global variables
let bankBalance = 0;
let bankLoan = 0;
let workBalance = 0;
let computerList = [];
let computerPrice = 0;

const pay = 100;
const interestRate = 0.1;

/* HTML-elements */
// Bank section
const displayBankBalance = document.getElementById("displayBankBalance");
const requestLoanButton = document.getElementById("requestLoanButton");

// Work section
const displayWorkBalance = document.getElementById("displayWorkBalance");
const displayLoan = document.getElementById("displayLoan");
const bankButton = document.getElementById("bankButton");
const workButton = document.getElementById("workButton");
const repayButton = document.getElementById("repayButton");

// Laptop section
const computerSelect = document.getElementById("computerSelect");
const featureList = document.getElementById("featureList");
const titleComputer = document.getElementById("titleComputer");
const descriptionComputer = document.getElementById("descriptionComputer");
const priceComputer = document.getElementById("priceComputer");
const imageComputer = document.getElementById("imageComputer");
const buyLaptopButton = document.getElementById("buyLaptopButton");

window.onload = pageRender();

function pageRender() {
    displayBankBalance.innerText = bankBalance;
    displayWorkBalance.innerText = workBalance;
    displayLoan.innerText = bankLoan;

    if (bankLoan === 0) {
        repayButton.style.display = "none";
    } else {
        repayButton.style.display = "block";
    }
}

function requestLoan() {
    const loanInput = prompt("How much would you like to borrow?\nPlease write the desired amount.");
    const parsedLoanInput = parseInt(loanInput);

    if (bankLoan > 0) {
        alert("Sorry, you have already taken out a loan.");
    } else if (parsedLoanInput > bankBalance * 2) {
        alert("Sorry, you cannot borrow that much.")
    } else if (parsedLoanInput === 0) {
        alert("You wrote 0, try again and write a larger amount");
    } else if (isNaN(parsedLoanInput) === true) {
        alert("Please write the amount with numerals.")
    } else {
        bankLoan = parsedLoanInput;
        bankBalance += bankLoan;
        pageRender();
        console.log(`Money borrowed: ${bankLoan}`);
    }
}

requestLoanButton.addEventListener("click", requestLoan);

function increaseWorkBalance() {
    workBalance += pay;
    pageRender();
}

workButton.addEventListener("click", increaseWorkBalance);

function transferPayToBank() {
    if (bankLoan > 0) {
        const interest = workBalance * interestRate;
        const remainingSalary = workBalance - interest;
        
        bankLoan += interest;
        bankBalance += remainingSalary;
    } else {
        bankBalance += workBalance;
    }
    workBalance = 0;
    pageRender();
}

bankButton.addEventListener("click", transferPayToBank);

const repayLoan = () => {
    if (bankLoan >= workBalance) {
        bankLoan = bankLoan - workBalance; 
    } else {
        bankBalance = bankBalance + workBalance - bankLoan;
        bankLoan = 0;
    }
    workBalance = 0;
    pageRender();
}

repayButton.addEventListener("click", repayLoan);

const buyLaptop = () => {
    if (bankBalance >= computerPrice) {
        bankBalance = bankBalance - computerPrice;
        alert("You are now the proud owner of a new computer!");
    } else {
        alert("Sadly you can't afford this computer.");
    }
    pageRender();
}

buyLaptopButton.addEventListener("click", buyLaptop);

// Fetching all the computers from the API and adding them to the select-element
fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => computerList = data)
    .then(computerList => renderComputerData(computerList));
    
const renderComputerData = computers => {
    computers.forEach(computer => {
        addComputerToMenu(computer);
    });
    
    // Default/first value from the computerList rendered on screen
    const firstComputer = computerList[0];
    titleComputer.innerText = firstComputer.title;
    descriptionComputer.innerText = firstComputer.description;
    priceComputer.innerText = (firstComputer.price + " SEK");
    computerPrice = firstComputer.price;
    imageComputer.setAttribute("src", "https://hickory-quilled-actress.glitch.me/assets/images/1.png");
    
    const specsArray = firstComputer.specs;
    specsArray.forEach(spec => {
        const liElement = document.createElement("li");
        liElement.appendChild(document.createTextNode(spec));
        liElement.classList.add("list-group-item");
        featureList.appendChild(liElement);
    });
}

const addComputerToMenu = computer => {
    const computerOption = document.createElement("option");
    computerOption.value = computer.id;
    computerOption.appendChild(document.createTextNode(computer.title));
    computerSelect.appendChild(computerOption);
}

const handldeComputerMenuChange = e => {
    const selectedComputer = computerList[e.target.selectedIndex];
    titleComputer.innerText = selectedComputer.title;
    descriptionComputer.innerText = selectedComputer.description;
    priceComputer.innerText = (selectedComputer.price + " SEK");
    computerPrice = selectedComputer.price;
    featureList.innerText = [];
    
    selectedComputer.specs.forEach(spec => {
        const liElement = document.createElement("li");
        liElement.appendChild(document.createTextNode(spec));
        featureList.appendChild(liElement);
    });
    
    imageComputer.setAttribute("src", `https://hickory-quilled-actress.glitch.me/${selectedComputer.image}`);
    imageComputer.setAttribute("alt", `${selectedComputer.title} model`);
}

computerSelect.addEventListener("change", handldeComputerMenuChange);


