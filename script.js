const Startbutton = document.getElementById('start')
const Nextbutton = document.getElementById('next')
const questionContainerElement = document.getElementById('question-cont')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer')

let shuffledQuestions, currentQuestionIndex

Startbutton.addEventListener('click', Startgame)
Nextbutton.addEventListener('click', () => {
    currentQuestionIndex++
    SetNextquestion()
})

function Startgame () {
  console.log('Started')
  Startbutton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  SetNextquestion()

}

function SetNextquestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', Selectanswer)
        answerButtonElement.appendChild(button)
    });
}
function resetState() {
    clearStatusclass(document.body)
    Nextbutton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild 
            (answerButtonElement.firstChild)
}
}

function Selectanswer (e) {
    const selectedbutton = e.target
    const correct = selectedbutton.dataset.correct
    setStatusclass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusclass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        Nextbutton.classList.remove('hide')
    } else {
        Startbutton.innerText = 'restart'
        Startbutton.classList.remove('hide')
    }
    
}

function setStatusclass(element, correct) {
    clearStatusclass(element)
    if (correct) {
    element.classList.add('correct')
    } else {
    element.classList.add('wrong') 
    }
}

function clearStatusclass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the full meaning of HTML?',
        answer: [
            { text: 'Hypertext Markup Language', correct: true},
            { text: 'Hypertest Markup Language', correct: false}
        ]
    },
    {
        question: 'What is the full meaning of CSS?',
        answer: [
            { text: 'Current Style Sheet', correct: false},
            { text: 'Cascading Style Sheet', correct: true}
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answer: [
            { text: 'The World Wide Web Consortium', correct: true},
            { text: 'World Web Wide Consortium', correct: false}
        ]
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        answer: [
            { text: 'True', correct: true},
            { text: 'False', correct: false}
        ]
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        answer: [
            { text: 'Styles', correct: false},
            { text: 'Style', correct: true}
        ]
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        answer: [
            { text: 'color', correct: true},
            { text: 'text-color', correct: false}
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answer: [
            { text: 'The <body> section', correct: false},
            { text: 'Both the <head> section and the <body> section', correct: true}
        ]
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answer: [
            { text: 'True', correct: false},
            { text: 'False', correct: true}
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answer: [
            { text: 'function Vephla()', correct: true},
            { text: 'function = Vephla()', correct: false}
        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answer: [
            { text: 'var colors = ["red", "green", "blue"]', correct: true},
            { text: 'var colors = "red", "green", "blue"', correct: false}
        ]
    }
]