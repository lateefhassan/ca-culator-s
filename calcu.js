// const btnsContainer = document.getElementById('numbers');


// function numBtn(num) {
//     return `
//             <button class="btn">${num}</button>
//     `;
// }

// let btns='';
// for (i=0; i<10; i++) {
//     btns += numBtn(i);
// }

// btnsContainer.innerHTML = btns

// const evalSymbols = ['=', 'C', 'Del'];
// const opSymbols = ['x', '/', '+', '-'];
// const idnSymbols = ['+/-', '.'];

// let inputSeeder = [];
// let currentInput = '';
// let idnInput = '';
 
// const pushCurrentToSeeder = () => {
//     inputSeeder.push(`${idnInput}${currentInput}`);
//     currentInput = '';
//     idnInput = '';
// }

// const handleInput = (inputVal) => {
//     console.log({inputVal});
//     let allowOp = false;

//     if(currentInput.length || inputSeeder.length){
//         allowOp = true
//     }
// }

// const buttons = document.querySelectorAll(".operator")
// const span = document.querySelector("span");


// calcBtns = document.querySelectorAll('.btn');
// if(calcBtns.length) {
//     calcBtns.forEach(calcBtn => {
//         calcBtn.addEventListener('click', (e) => {
//             value = e.target.innerHTML;
//             handleInput(value);
//         })
//     });
// }

// buttons.forEach(but => {
//     but.addEventListener('click', (e) => {
//         value = e.target.innerHTML;
//         handleInput(value);
//     })
// });


const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_out = document.querySelector('.display .output')


let input = "";
 for(let key of keys){
    const value = key.dataset.key;

    key.addEventListener("click", () => {
        if(value == "clear"){
            input = "";
            display_input.innerHTML = "";
            display_out.innerHTML = "";
        } else if(value == "backspace"){
            input = input.slice(0, -1);
            display_input.innerHTML = input
        } else if(value == "="){
            let result = eval(perpareInput(input));
            display_out.innerHTML = result;
        } else if (value == "bracket") {
            if(input.indexOf("(") == -1 ||
             input.indexOf("(") != -1 && 
             input.indexOf(")") != -1 &&
              input.lastIndexOf("(") < input.lastIndexOf(")")){
                input += "(";
            } else if(input.indexOf("(") != -1 &&
                      input.indexOf(")") == -1 || 
                     input.indexOf("(") != -1 &&
                     input.indexOf(")") != -1 &&
                      input.lastIndexOf("(") > input.lastIndexOf(")"))
                      {
                       input += ")";
                 }

                 display_input.innerHTML = input
        } else {

            if(validateInput(value)){
                  input += value;
            display_input.innerHTML = input
            }
          
        }
    })
 }

 function cleanInput(input) {
    let input_array = input.split("");
    let input_array_lenght = input_array.length;

    for(let i = 0; i < input_array_lenght; i++){
        if(input_array[i] == "*"){
            input_array[i] = `<span class="operator">x</span>`
        }
    }
 }


 function cleanOutput(){

 }
 

 function validateInput(value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/", "%"];

    if(value == "." && last_input == "."){
        return false
    }

    if(operators.includes(value)){
        if(operators.includes(last_input)){
            return false
        } else {
            return true
        }
    }
     
    return true
 }

 function perpareInput(input) {
    let input_array = input.split("");
    console.log(input_array);

    for (let i = 0; i < input_array.length; i++) {
        if(input_array[i] == "%"){
            input_array[i] = "/100"
        }
      }
      
 return input_array.join("");
 }

 perpareInput()