"use strict";

// Defining website elements to JS 

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let n1 = num1.value;
let n2 = num2.value;
//a button for all buttons

const allButtons = document.querySelectorAll(".buttons");

//individual buttons:

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const percentageButton = document.querySelector("#percentage");

const clearButton = document.querySelector("#clear");
const exitButton = document.querySelector("#exit");


//Calculator Functions
/*  
    1) plus
    2) minus
    3) multiply
    4) divide
    5) percentage
    6) clear    
*/


plusButton.addEventListener("click", (e) => {
    e.preventDefault();
    let n1 = num1.value;
    let n2 = num2.value;
    let res = parseInt(n1) + parseInt(n2);

    if (!n1 || !n2){
       document.querySelector("#result").textContent = "Must input values!";
        return;
    }

    document.querySelector("#result").textContent = `Answer: ${n1} + ${n2} = ` + res;   

    }
)

minusButton.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = num1.value;
    let n2 = num2.value;
    let res = parseInt(n1) - parseInt(n2);

    if (!n1 || !n2){
       document.querySelector("#result").textContent = "Must input values!";
        return;
    }

    result.textContent = `Answer: ${n1} - ${n2} = ` + res;
})

multiplyButton.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = num1.value;
    let n2 = num2.value;
    let res = parseInt(n1) * parseInt(n2);

    if (!n1 || !n2){
       document.querySelector("#result").textContent = "Must input values!";
        return;
    }

    result.textContent = `Answer: ${n1} * ${n2} = ` + res;
})

divideButton.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = num1.value;
    let n2 = num2.value;
    let res = parseInt(n1) / parseInt(n2);

    if (!n1 || !n2){
       document.querySelector("#result").textContent = "Must input values!";
        return;
    }

    result.textContent = `Answer: ${n1} / ${n2} = ` + res;
})

percentageButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    let n1 = num1.value;
    let n2 = num2.value;
    let res = parseInt(n1) % parseInt(n2);

    if (!n1 || !n2){
       document.querySelector("#result").textContent = "Must input values!";
        return;
    }

    result.textContent = `Answer: ${n1} % ${n2} = ` + res;
})

clearButton.addEventListener("click", () => {
    document.getElementById("frm1").reset();
    document.querySelector("#result").innerHTML = "";
})

// Button hovers (all button excl Exit Button):

document.querySelectorAll(".buttons").forEach(item => {
    item.addEventListener("mouseover", () => { 
        item.classList = "buttonHovers";
    } )
})

document.querySelectorAll(".buttons").forEach(item => {
    item.addEventListener("mouseleave", () => { 
        item.classList = "button";
    } )
})


// Exit button and redirect page

exitButton.addEventListener("mouseover", () => { exitButton.className = "buttonHoverExit"});
exitButton.addEventListener("mouseleave", () => {exitButton.className = "button"});

exitButton.addEventListener("click", () => {location.replace("ThankYouPage.html")});


// End