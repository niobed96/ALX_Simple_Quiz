const add = document.getElementById('add');
add.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = number1 + number2;
    document.querySelector('#calculation-result').textContent = result;
})

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result = number1 - number2;
    
    document.querySelector('#calculation-result').textContent = result;
})

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result= number1 * number2;
    
    document.querySelector('#calculation-result').textContent = result;
})

const divide = document.getElementById('divide');
divide.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value)|| 0;
    const number2 = parseFloat(document.getElementById('number2').value)|| 0;

    const result= number1 / number2;
    
    document.querySelector('#calculation-result').textContent = result;
})
