const questions=[
    {
        question:" Which one is not programming language?",
        answers:[
            { text :"A)  Java" ,correct: false},
            { text :"B)  HTML" ,correct: true},
            { text :"C)  Python" ,correct: false},
            { text :"D)  C++" ,correct: false},  
        ]
    },
    {
        question:"What is Software?",
        answers:[
            { text :"A) Only hardware components." ,correct: false},
            { text :"B) A system composed of computer programs and data." ,correct: true},
            { text :"C) Exclusively used for gaming.            " ,correct: false},
            { text :"D) Only graphic design tools." ,correct: false},  
        ]
    },
    {
        question:"What is Git and What is its Purpose?",
        answers:[
            { text :" A) A programming language." ,correct: false},
            { text :"B) A file compression tool." ,correct: false},
            { text :"C) A version control system, tracking the history of code." ,correct: true},
            { text :"D) A protocol managing computer networks." ,correct: false},  
        ]
    },
    {
        question:"What is the Correct Order of Software Development Stages?",
        answers:[
            { text :"A) Design, Analysis, Coding, Testing. " ,correct: false},
            { text :"B) Analysis, Testing, Design, Coding." ,correct: false},
            { text :"C) Coding, Design, Analysis, Testing. " ,correct: false},
            { text :"D) Analysis, Design, Coding, Testing. " ,correct: true},  
        ]
    },
    {
        question:"What is Syntax in Programming Language?",
        answers:[
            { text :"A) Runtime of the program." ,correct: false},
            { text :"B) Visual design of the program." ,correct: false},
            { text :"C) The sum of rules in a programming language." ,correct: true},
            { text :"D) User interface of the program." ,correct: false},  
        ]
    },





];




const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    
        button.addEventListener("click", selectAnswer);
    });
    

}



function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}




function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!, Seni coook seviyorum askimmmm Made by Sezzy...`;
    nextButton.innerHTML="play again you are loser";
    nextButton.style.display="block";



}






function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();
