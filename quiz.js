function checkAnswer(){
    const correctAnswer = '4'
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    const userAnswer = selectedRadio.value;
    const feedback = document.querySelector('#feedback')

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
    }
    else{
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submit = document.querySelector('#submit-answer');
submit.addEventListener('click', checkAnswer);