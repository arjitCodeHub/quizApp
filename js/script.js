const questions = [
    {
        'que': "Which of the following is a markup language ?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "PHP",
        'correct': "a"
    },
    {
        'que': "What year was Javascript launched ?",
        'a': "1999",
        'b': "1995",
        'c': "1998",
        'd': "None of the above",
        'correct': "b"
    },
    {
        'que': "What does CSS stands for ?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason object Notation",
        'd': "Helicopters Terminals Motorboats Lamborgins",
        'correct': "b"
    },
    {
        'que': "How many selectors in CSS ?",
        'a': "1",
        'b': "3",
        'c': "5",
        'd': "4",
        'correct': "b"
    },
    {
        'que': "Which one of the sementic tag ?",
        'a': "hr",
        'b': "div",
        'c': "a",
        'd': "footer",
        'correct': "d"
    },
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestions = () => {
    if (index === total) {
        return end();
    }
    reset();
    const data = questions[index]
    // console.log(data);
    queBox.innerText = `${index + 1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestions()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                // console.log("Yes");
                answer = input.value;

            }
            else {
                console.log("No");
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center" >
 <h3> Thank you for playing the quiz </h3> 
 <h2> ${right} / ${total} are correct </h2> 
 </div> `
}

//  inital call
loadQuestions()