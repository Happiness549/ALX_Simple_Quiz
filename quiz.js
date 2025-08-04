'strict mode';

function checkAnswer(){
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name ="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    
   if(userAnswer === correctAnswer){
    Feedback.textContent = "Correct! well done."
   }else{
    feedback.textContent = "That's incorrect. Try again!"
   }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);