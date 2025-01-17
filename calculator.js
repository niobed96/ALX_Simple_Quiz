const add = document.getElementById('add');
add.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = intiger(number1, number2);

    document.querySelector('#calculation-result').textContent = result;
})

function intiger(num1, num2){
    return num1 + num2;
}

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = intiger2(number1, number2);
    
    document.querySelector('#calculation-result').textContent = result;
})

function intiger2(num1, num2){
    return num1 - num2;
}

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = intiger3(number1, number2);
    
    document.querySelector('#calculation-result').textContent = result;
})

function intiger3(num1, num2){
    return num1 * num2;
}

const divide = document.getElementById('divide');
divide.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = intiger4(number1, number2);
    
    document.querySelector('#calculation-result').textContent = result;
})

function intiger4(num1, num2){
    return num1 / num2;
}
