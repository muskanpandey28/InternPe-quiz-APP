const questions =[
    {
        question:"HTML stands for",
        answers:[
            {text:"Hyperlinks and Text Markup Language",correct:false},
            {text:"Hyper Text Markup Language",correct:true},
            {text:"Home Tool Markup Language",correct:false},
            {text:"Hypertag  Markup Language",correct:false},

        ]
    },
    {
        question:"The web is based on",
        answers:[
            {text:"Images",correct:false},
            {text:"Text",correct:false},
            {text:"HTML",correct:true},
            {text:"Information",correct:false},
        ]
    },
{
    question:"Which of these tags are all table tags?",
        answers:[
            {text:"table,head,tfoot",correct:false},
            {text:"table,tr,td",correct:true},
            {text:"thead,body,tr",correct:false},
            {text:"table,tr,tt",correct:false},
        ]
    },
    {
        question:"How can you make a numbered list ?",
        answers:[
            {text:"ol",correct:true},
            {text:"ul",correct:false},
            {text:"list",correct:false},
            {text:"dl",correct:false},
        ]
    },
{
        question:"What is the correct CSS syntax?",
        answers:[
            {text:"{body:color=black;}",correct:false},
            {text:"body:color=black;",correct:false},
            {text:"{body;color:black;}",correct:false},
            {text:"body{color:black;}",correct:true},
        ]
    }

        ];
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");

        let currentQuestionIndex = 0;
        let score = 0;
        function startQuiz(){
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML ="Next";
            showQuestion();
        }
            function showQuestion(){
                resetState();
                let currentQuestion = questions[currentQuestionIndex];
                let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
}
    );
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    }
        );
        nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = 'you scored 4/5',
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=> {
        if(currentQuestionIndex < questions.length){
            handleNextButton();

        }else{
          startQuiz();  
        }
    }
    );
startQuiz();
