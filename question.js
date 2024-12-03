// Full pool of 20 questions on the topic "anti-doping"
let questions = [
  {
    numb: 1,
    question: "What is the purpose of anti-doping rules?",
    answer: "To ensure fair play",
    options: [
      "To enhance performance",
      "To ensure fair play",
      "To avoid injuries",
      "To reduce costs",
    ],
  },
  {
    numb: 2,
    question: "Which organization is responsible for overseeing global anti-doping policies?",
    answer: "WADA",
    options: ["FIFA", "WADA", "IOC", "USADA"],
  },
  {
    numb: 3,
    question: "Which of the following is considered doping?",
    answer: "Using banned performance-enhancing drugs",
    options: [
      "Drinking water during a match",
      "Using banned performance-enhancing drugs",
      "Wearing high-performance gear",
      "Practicing before a game",
    ],
  },
  {
    numb: 4,
    question: "What does the term 'out-of-competition testing' mean in anti-doping?",
    answer: "Testing athletes outside of events",
    options: [
      "Testing athletes after retirement",
      "Testing athletes outside of events",
      "Testing athletes during the event",
      "Testing only amateur athletes",
    ],
  },
  {
    numb: 5,
    question: "What is the primary goal of anti-doping education?",
    answer: "To promote clean sport",
    options: [
      "To discourage sports participation",
      "To promote clean sport",
      "To increase penalties",
      "To teach athletes about banned drugs",
    ],
  },
  {
    numb: 6,
    question: "What does WADA stand for?",
    answer: "World Anti-Doping Agency",
    options: [
      "World Athletics Development Agency",
      "World Anti-Doping Agency",
      "Worldwide Athlete Development Association",
      "World Anti-Drug Association",
    ],
  },
  {
    numb: 7,
    question: "What is a common method used to detect doping substances in athletes?",
    answer: "Blood and urine tests",
    options: [
      "Blood and urine tests",
      "Performance analytics",
      "Observation during training",
      "Interviews with coaches",
    ],
  },
  {
    numb: 8,
    question: "What is the main reason for banning performance-enhancing drugs?",
    answer: "To protect athlete health and integrity of sport",
    options: [
      "To protect athlete health and integrity of sport",
      "To make sports more challenging",
      "To encourage more participants",
      "To reduce the costs of training",
    ],
  },
  {
    numb: 9,
    question: "What does the term 'Therapeutic Use Exemption (TUE)' mean?",
    answer: "Permission to use a prohibited substance for medical reasons",
    options: [
      "A penalty for doping violations",
      "Permission to use a prohibited substance for medical reasons",
      "An award for fair play",
      "Exemption from anti-doping testing",
    ],
  },
  {
    numb: 10,
    question: "What happens to athletes caught violating anti-doping rules?",
    answer: "They face penalties such as bans and fines",
    options: [
      "They are promoted to higher leagues",
      "They face penalties such as bans and fines",
      "They are offered counseling programs",
      "Nothing happens to them",
    ],
  },
  {
    numb: 11,
    question: "Which of these is a banned method under anti-doping rules?",
    answer: "Blood doping",
    options: [
      "Extra hydration",
      "Blood doping",
      "Strength training",
      "Balanced dieting",
    ],
  },
  {
    numb: 12,
    question: "What is the World Anti-Doping Code?",
    answer: "A set of rules aimed at harmonizing anti-doping policies",
    options: [
      "A guide for creating training programs",
      "A set of rules aimed at harmonizing anti-doping policies",
      "A list of sports that require testing",
      "A guide for athlete nutrition",
    ],
  },
  {
    numb: 13,
    question: "What is the 'Prohibited List' in anti-doping?",
    answer: "A list of substances and methods banned in sports",
    options: [
      "A list of substances and methods banned in sports",
      "A list of sports requiring testing",
      "A list of athletes under investigation",
      "A record of previous violations",
    ],
  },
  {
    numb: 14,
    question: "Who can be tested under anti-doping regulations?",
    answer: "Any athlete, anytime, anywhere",
    options: [
      "Only professional athletes",
      "Athletes during competitions only",
      "Any athlete, anytime, anywhere",
      "Only athletes with previous violations",
    ],
  },
  {
    numb: 15,
    question: "What is the purpose of a doping control officer?",
    answer: "To collect samples for anti-doping testing",
    options: [
      "To coach athletes",
      "To monitor audience behavior",
      "To collect samples for anti-doping testing",
      "To enforce stadium security",
    ],
  },
  {
    numb: 16,
    question: "Which substance is commonly banned due to its performance-enhancing effects?",
    answer: "Anabolic steroids",
    options: [
      "Vitamin supplements",
      "Anabolic steroids",
      "Electrolyte drinks",
      "Protein shakes",
    ],
  },
  {
    numb: 17,
    question: "What is the consequence of refusing a doping test?",
    answer: "It is treated as a doping violation",
    options: [
      "The athlete is exempted from penalties",
      "The test is postponed",
      "It is treated as a doping violation",
      "The athlete receives a warning",
    ],
  },
  {
    numb: 18,
    question: "Which of these is a violation of anti-doping rules?",
    answer: "Possession of prohibited substances",
    options: [
      "Possession of prohibited substances",
      "Use of legal supplements",
      "Consulting a nutritionist",
      "Undergoing medical check-ups",
    ],
  },
  {
    numb: 19,
    question: "What is the impact of doping on an athlete's reputation?",
    answer: "It can damage their career and credibility",
    options: [
      "It enhances their popularity",
      "It can damage their career and credibility",
      "It increases their fan base",
      "It has no impact",
    ],
  },
  {
    numb: 20,
    question: "What should an athlete do if unsure about a medication being banned?",
    answer: "Consult their anti-doping organization",
    options: [
      "Ignore it and continue using it",
      "Consult their anti-doping organization",
      "Wait until after the competition",
      "Ask their coach for advice only",
    ],
  },

];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  const selectedQuestions = shuffle(questions).slice(0, 10); // Select 10 random questions
  let currentQuestionIndex = 0;

  function showQuestion(index) {
    const question = selectedQuestions[index];
    document.getElementById("quiz-question").innerText = question.question;

    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.innerText = option;
      button.onclick = () => {
        if (option === question.answer) {
          alert("Correct!");
        } else {
          alert("Wrong answer.");
        }
        if (currentQuestionIndex < selectedQuestions.length - 1) {
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        } else {
          alert("Quiz Complete!");
        }
      };
      optionsContainer.appendChild(button);
    });
  }

  showQuestion(currentQuestionIndex);
}

document.querySelector(".start_btn button").addEventListener("click", startQuiz);