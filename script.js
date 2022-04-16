"use strict";


const result = document.querySelector("[data-result]");

function percentageOf() {
    let percent = document.querySelector("[data-percent]").value;
    let num = document.querySelector("[data-num]").value;
    document.querySelector("[data-value]").value = (num / 100) * percent;
    result.innerText = `${percent}% of number ${num} = ${(num / 100) * percent}`;
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";


}

const myDiv = document.getElementById("myDiv");
function changeStyle() {
    let element = document.getElementById("myDiv");

    let button = document.getElementById("my-primary");
    
    element.style.backgroundColor = "#143F6B";
    event.preventDefault();
    button.style.backgroundColor = "#F55353";
    event.preventDefault();
   
}
