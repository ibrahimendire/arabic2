const quizData = [
    {
        question: "Select the right word for أَنْتُمَا",
        choices: ["تَشْرَبِينَ", "تَشْرَبُ", "تَشْرَبَانِ"],
        correct: 2,
    },
    {
        question: "Select the right word for هُمَا(2 girl)",
        choices: ["تَشْرَبُونَ", "يَشْرَبَانِ", "تَشْرَبَانِ"],
        correct: 2,
    },
    {
        question: "Select the right word for هُوَ",
        choices: ["تَشْرَبَ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 2,
    },
    {
        question: "Select the right word for نَحْنُ",
        choices: ["نَشْرَبُ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 0,
    },
    {
        question: "Select the right word for هِيَ",
        choices: ["نَشْرَبُ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 1,
    },
    {
        question: "Select the right word for أَنَا",
        choices: ["أَشْرَبَ", "أَشْرَبُ", "نَشْرَبُ"],
        correct: 1,
    },
    {
        question: "Select the right word for أَنْتُمْ",
        choices: ["تَشْرَبُونَ", "يَشْرَبَانِ", "تَشْرَبَانِ"],
        correct: 0,
    },
    {
        question: "Select the right word for هُوَ",
        choices: ["تَشْرَبَ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 2,
    },
    {
        question: "Select the right word for أَنْتَ",
        choices: ["نَشْرَبُ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 1,
    },
    {
        question: "Select the right word for أَنْتِ",
        choices: ["تَشْرَبِينَ", "تَشْرَبُ", "يَشْرَبُ"],
        correct: 0,
    },
    
    {
        question: "Select the right word for هُمَا(2 boy) ",
        choices: ["تَشْرَبِينَ", "يَشْرَبَانِ", "تَشْرَبَانِ"],
        correct: 1,
    },
    {
        question: "Select the right word for أَنْتُمْ",
        choices: ["تَشْرَبُونَ", "يَشْرَبَانِ", "تَشْرَبَانِ"],
        correct: 0,
    },
    
    {
        question: "Select the right word for هُنَّ",
        choices: ["تَشْرَبُونَ", "يَشْرَبَانِ", "يَشْرَبْنَ"],
        correct: 2,
    },
    {
        question: "Select the right word for أَنْتُنَّ",
        choices: ["تَشْرَبُونَ", "تَشْرَبْنَ", "يَشْرَبْنَ"],
        correct: 1,
    },
    {
        question: "Select the right word for هُمْ",
        choices: ["تَشْرَبُونَ", "تَشْرَبْنَ", "يَشْرَبُونَ"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const choiceButtons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.textContent = currentQuizData.question;

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = currentQuizData.choices[i];
    }
}

function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];

    if (choice === currentQuizData.correct) {
        resultText.textContent = "Correct!";
        score++;
    } else {
        resultText.textContent = "Wrong. The correct answer is: " + currentQuizData.choices[currentQuizData.correct];
    }

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].disabled = true;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        resultText.textContent = "";
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].disabled = false;
        }
        nextButton.style.display = "none";
    } else {
        // Display the final score
        questionText.textContent = "Quiz completed!";
        resultText.textContent = "Your Score: " + score + " out of " + quizData.length;
        choicesList.style.display = "none";
        nextButton.style.display = "none";
    }
}

loadQuestion();