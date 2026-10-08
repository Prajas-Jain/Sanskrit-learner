/* =========================================
   SANSKRIT LEARNER
   ========================================= */


/* =========================================
   PLAYER DATA
   ========================================= */

let totalXP =
    Number(localStorage.getItem("sanskritXP")) || 0;

let completedLessons =
    JSON.parse(
        localStorage.getItem("completedLessons")
    ) || [];

let streak =
    Number(localStorage.getItem("sanskritStreak")) || 0;

let lastLearningDate =
    localStorage.getItem("lastLearningDate") || "";

let badges =
    JSON.parse(
        localStorage.getItem("sanskritBadges")
    ) || [];

let currentLesson = "";

let currentQuestion = 0;

let testScore = 0;

let selectedAnswer = null;


/* =========================================
   LESSON DATA
   ========================================= */

const lessons = {

    words: {

        name: "Basic Words",

        learn: [

            {
                word: "जलम्",
                meaning: "Water",
                explanation: "जलम् means water."
            },

            {
                word: "फलम्",
                meaning: "Fruit",
                explanation: "फलम् means fruit."
            },

            {
                word: "पुस्तकम्",
                meaning: "Book",
                explanation: "पुस्तकम् means book."
            },

            {
                word: "गृहम्",
                meaning: "House",
                explanation: "गृहम् means house or home."
            },

            {
                word: "वृक्षः",
                meaning: "Tree",
                explanation: "वृक्षः means tree."
            }

        ],

        test: [

            {
                word: "बालकः",

                options: [
                    "A) Boy",
                    "B) Girl",
                    "C) Friend",
                    "D) Teacher"
                ],

                answer: "A) Boy"
            },

            {
                word: "बालिका",

                options: [
                    "A) Boy",
                    "B) Girl",
                    "C) Mother",
                    "D) Sister"
                ],

                answer: "B) Girl"
            },

            {
                word: "सूर्यः",

                options: [
                    "A) Moon",
                    "B) Star",
                    "C) Sun",
                    "D) Sky"
                ],

                answer: "C) Sun"
            },

            {
                word: "चन्द्रः",

                options: [
                    "A) Moon",
                    "B) Sun",
                    "C) Tree",
                    "D) Water"
                ],

                answer: "A) Moon"
            },

            {
                word: "मित्रम्",

                options: [
                    "A) Enemy",
                    "B) Teacher",
                    "C) Student",
                    "D) Friend"
                ],

                answer: "D) Friend"
            }

        ]
    },


    numbers: {

        name: "Basic Numbers",

        learn: [

            {
                word: "एकम्",
                meaning: "One",
                explanation: "एकम् means one."
            },

            {
                word: "द्वे",
                meaning: "Two",
                explanation: "द्वे means two."
            },

            {
                word: "त्रीणि",
                meaning: "Three",
                explanation: "त्रीणि means three."
            },

            {
                word: "चत्वारि",
                meaning: "Four",
                explanation: "चत्वारि means four."
            },

            {
                word: "पञ्च",
                meaning: "Five",
                explanation: "पञ्च means five."
            }

        ],

        test: [

            {
                word: "एकम्",

                options: [
                    "A) Two",
                    "B) One",
                    "C) Three",
                    "D) Four"
                ],

                answer: "B) One"
            },

            {
                word: "द्वे",

                options: [
                    "A) One",
                    "B) Three",
                    "C) Two",
                    "D) Five"
                ],

                answer: "C) Two"
            },

            {
                word: "त्रीणि",

                options: [
                    "A) Three",
                    "B) Four",
                    "C) Five",
                    "D) Two"
                ],

                answer: "A) Three"
            },

            {
                word: "चत्वारि",

                options: [
                    "A) Two",
                    "B) Five",
                    "C) One",
                    "D) Four"
                ],

                answer: "D) Four"
            },

            {
                word: "पञ्च",

                options: [
                    "A) Four",
                    "B) Three",
                    "C) Five",
                    "D) Two"
                ],

                answer: "C) Five"
            }

        ]
    },


    grammar: {

        name: "Basic Grammar",

        learn: [

            {
                word: "रामः पठति।",
                meaning: "Ram reads.",
                explanation: "पठति means 'reads'. It is a verb."
            },

            {
                word: "बालकः गच्छति।",
                meaning: "The boy goes.",
                explanation: "गच्छति means 'goes'."
            },

            {
                word: "सा पठति।",
                meaning: "She reads.",
                explanation: "सा means 'she'."
            },

            {
                word: "सः लिखति।",
                meaning: "He writes.",
                explanation: "सः means 'he'."
            },

            {
                word: "अहम् पठामि।",
                meaning: "I read.",
                explanation: "अहम् means 'I' and पठामि means 'I read'."
            }

        ],

        test: [

            {
                word: "What is the meaning of 'सः'?",

                options: [
                    "A) She",
                    "B) I",
                    "C) He",
                    "D) You"
                ],

                answer: "C) He"
            },

            {
                word: "What is the meaning of 'सा'?",

                options: [
                    "A) She",
                    "B) He",
                    "C) I",
                    "D) They"
                ],

                answer: "A) She"
            },

            {
                word: "What does 'गच्छति' mean?",

                options: [
                    "A) Reads",
                    "B) Goes",
                    "C) Writes",
                    "D) Eats"
                ],

                answer: "B) Goes"
            },

            {
                word: "What does 'लिखति' mean?",

                options: [
                    "A) Goes",
                    "B) Eats",
                    "C) Reads",
                    "D) Writes"
                ],

                answer: "D) Writes"
            },

            {
                word: "What is the meaning of 'अहम्'?",

                options: [
                    "A) I",
                    "B) He",
                    "C) She",
                    "D) You"
                ],

                answer: "A) I"
            }

        ]
    }

};


/* =========================================
   SCREEN NAVIGATION
   ========================================= */

function showLessons() {

    document.getElementById("home-screen").style.display =
        "none";

    document.getElementById("lessons-screen").style.display =
        "block";

    document.getElementById("quiz-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "none";

    document.getElementById("ai-tutor-screen").style.display =
        "none";

    updateAllDisplays();
}


function startLesson(lesson) {

    currentLesson = lesson;

    currentQuestion = 0;

    testScore = 0;

    selectedAnswer = null;


    document.getElementById("home-screen").style.display =
        "none";

    document.getElementById("lessons-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "none";

    document.getElementById("ai-tutor-screen").style.display =
        "none";

    document.getElementById("quiz-screen").style.display =
        "block";


    loadQuestion();
}


function goBackToLessons() {

    document.getElementById("home-screen").style.display =
        "none";

    document.getElementById("lessons-screen").style.display =
        "block";

    document.getElementById("quiz-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "none";

    document.getElementById("ai-tutor-screen").style.display =
        "none";


    updateAllDisplays();
}


/* =========================================
   QUIZ
   ========================================= */

function loadQuestion() {

    const lesson =
        lessons[currentLesson];

    const totalQuestions =
        lesson.learn.length +
        lesson.test.length;


    selectedAnswer = null;


    document.getElementById("result").textContent =
        "";

    document.getElementById("options-container").innerHTML =
        "";

    document.getElementById("learn-example").innerHTML =
        "";


    document.getElementById("question-number").textContent =
        `${currentQuestion + 1} / ${totalQuestions}`;


    document.getElementById("lesson-name").textContent =
        lesson.name;


    const progress =
        ((currentQuestion + 1) /
        totalQuestions) * 100;


    document.getElementById("progress-fill").style.width =
        progress + "%";


    /* LEARN */

    if (
        currentQuestion <
        lesson.learn.length
    ) {

        const item =
            lesson.learn[currentQuestion];


        document.getElementById("mode-label").textContent =
            "📖 LEARN";


        document.getElementById("question-text").textContent =
            item.word;


        document.getElementById("question-description").textContent =
            item.meaning;


        document.getElementById("learn-example").textContent =
            item.explanation;


        document.getElementById("next-button").textContent =
            "Got it! Next →";


        return;
    }


    /* TEST */

    const testIndex =
        currentQuestion -
        lesson.learn.length;


    const question =
        lesson.test[testIndex];


    document.getElementById("mode-label").textContent =
        "📝 TEST";


    document.getElementById("question-text").textContent =
        question.word;


    document.getElementById("question-description").textContent =
        "Choose the correct answer.";


    document.getElementById("next-button").textContent =
        "Next →";


    question.options.forEach(option => {

        const button =
            document.createElement("button");


        button.textContent =
            option;

        button.className =
            "option";


        button.onclick =
            function () {

                selectAnswer(
                    button,
                    option
                );

            };


        document
            .getElementById("options-container")
            .appendChild(button);

    });

}


function selectAnswer(
    button,
    answer
) {

    selectedAnswer =
        answer;


    document
        .querySelectorAll(".option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );
}


function nextQuestion() {

    const lesson =
        lessons[currentLesson];


    /* TEST QUESTION */

    if (
        currentQuestion >=
        lesson.learn.length
    ) {

        if (
            selectedAnswer === null
        ) {

            document.getElementById("result").textContent =
                "Please select an answer first.";

            return;
        }


        const testIndex =
            currentQuestion -
            lesson.learn.length;


        const correctAnswer =
            lesson.test[testIndex].answer;


        if (
            selectedAnswer ===
            correctAnswer
        ) {

            testScore++;

            totalXP += 10;

            saveProgress();


            document.getElementById("result").textContent =
                "✅ Correct! +10 XP";

        }

        else {

            document.getElementById("result").textContent =
                `❌ Correct answer: ${correctAnswer}`;

        }


        updateAllDisplays();
    }


    currentQuestion++;


    const totalQuestions =
        lesson.learn.length +
        lesson.test.length;


    if (
        currentQuestion >=
        totalQuestions
    ) {

        completeLesson();

        return;
    }


    loadQuestion();
}


/* =========================================
   COMPLETE LESSON
   ========================================= */

function completeLesson() {

    updateStreak();


    if (
        !completedLessons.includes(
            currentLesson
        )
    ) {

        completedLessons.push(
            currentLesson
        );

    }


    let newBadge = "";


    /* FIRST LESSON */

    if (
        completedLessons.length >= 1 &&
        !badges.includes("first")
    ) {

        badges.push("first");

        newBadge =
            "🌱 First Step unlocked!";

    }


    /* 50 XP */

    if (
        totalXP >= 50 &&
        !badges.includes("xp")
    ) {

        badges.push("xp");

        newBadge =
            "⭐ XP Starter unlocked!";

    }


    /* PERFECT */

    if (
        testScore === 5 &&
        !badges.includes("perfect")
    ) {

        badges.push("perfect");

        newBadge =
            "🎯 Perfect Score unlocked!";

    }


    /* WORDS */

    if (
        completedLessons.includes("words") &&
        !badges.includes("words")
    ) {

        badges.push("words");

        newBadge =
            "📖 Word Explorer unlocked!";

    }


    /* GRAMMAR */

    if (
        completedLessons.includes("grammar") &&
        !badges.includes("grammar")
    ) {

        badges.push("grammar");

        newBadge =
            "🧩 Grammar Starter unlocked!";

    }


    saveProgress();


    document.getElementById("quiz-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "block";


    document.getElementById("final-score").textContent =
        testScore;


    document.getElementById("final-xp").textContent =
        testScore * 10;


    document.getElementById("badge-earned").textContent =
        newBadge;


    if (
        testScore === 5
    ) {

        document.getElementById("final-message").textContent =
            "Perfect score! You mastered this lesson! 🔥";

    }

    else if (
        testScore >= 3
    ) {

        document.getElementById("final-message").textContent =
            "Great job! Keep practising! 💪";

    }

    else {

        document.getElementById("final-message").textContent =
            "Good attempt! Try the lesson again! 📚";

    }

}


/* =========================================
   STREAK SYSTEM
   ========================================= */

function getLocalDateKey(date = new Date()) {

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;
}


function getYesterdayKey() {

    const yesterday =
        new Date();


    yesterday.setDate(
        yesterday.getDate() - 1
    );


    return getLocalDateKey(
        yesterday
    );
}


function updateStreak() {

    const today =
        getLocalDateKey();


    /* Already studied today */

    if (
        lastLearningDate === today
    ) {

        return;
    }


    /* First learning day */

    if (
        lastLearningDate === ""
    ) {

        streak = 1;

    }


    /* Consecutive day */

    else if (
        lastLearningDate ===
        getYesterdayKey()
    ) {

        streak++;

    }


    /* Missed one or more days */

    else {

        streak = 1;

    }


    lastLearningDate =
        today;


    saveProgress();

}


/* =========================================
   SAVE DATA
   ========================================= */

function saveProgress() {

    localStorage.setItem(
        "sanskritXP",
        totalXP
    );


    localStorage.setItem(
        "completedLessons",
        JSON.stringify(
            completedLessons
        )
    );


    localStorage.setItem(
        "sanskritStreak",
        streak
    );


    localStorage.setItem(
        "lastLearningDate",
        lastLearningDate
    );


    localStorage.setItem(
        "sanskritBadges",
        JSON.stringify(
            badges
        )
    );

}


/* =========================================
   DISPLAY UPDATES
   ========================================= */

function updateAllDisplays() {

    updateXPDisplay();

    updateCompletedLessons();

    updateBadges();


    document.getElementById("streak").textContent =
        streak;

}


function updateXPDisplay() {

    document.getElementById("total-xp").textContent =
        totalXP;


    document.getElementById("lesson-xp").textContent =
        totalXP;


    const level =
        Math.floor(
            totalXP / 50
        ) + 1;


    document.getElementById("level").textContent =
        level;

}


function updateCompletedLessons() {

    document.getElementById("completed-count").textContent =
        completedLessons.length;


    const lessonNames = [
        "words",
        "numbers",
        "grammar"
    ];


    lessonNames.forEach(
        lesson => {

            const element =
                document.getElementById(
                    `${lesson}-status`
                );


            if (
                completedLessons.includes(
                    lesson
                )
            ) {

                element.textContent =
                    "✓ Completed";

                element.classList.add(
                    "completed"
                );

            }

            else {

                element.textContent =
                    "Not Started";

                element.classList.remove(
                    "completed"
                );

            }

        }
    );

}


function updateBadges() {

    const badgeMap = {

        first: "badge-first",

        xp: "badge-xp",

        perfect: "badge-perfect",

        words: "badge-words",

        grammar: "badge-grammar"

    };


    Object.keys(badgeMap).forEach(
        badge => {

            const element =
                document.getElementById(
                    badgeMap[badge]
                );


            if (
                badges.includes(badge)
            ) {

                element.classList.remove(
                    "locked"
                );

                element.classList.add(
                    "unlocked"
                );

            }

            else {

                element.classList.add(
                    "locked"
                );

                element.classList.remove(
                    "unlocked"
                );

            }

        }
    );

}


/* =========================================
   AI TUTOR
   ========================================= */

function openAITutor() {

    document.getElementById("home-screen").style.display =
        "none";

    document.getElementById("lessons-screen").style.display =
        "none";

    document.getElementById("quiz-screen").style.display =
        "none";

    document.getElementById("result-screen").style.display =
        "none";

    document.getElementById("ai-tutor-screen").style.display =
        "block";


    document.getElementById("ai-input").focus();

}


function closeAITutor() {

    document.getElementById("ai-tutor-screen").style.display =
        "none";

    document.getElementById("lessons-screen").style.display =
        "block";

}


/* =========================================
   AI CHAT
   ========================================= */

function handleAIKey(event) {

    if (
        event.key === "Enter"
    ) {

        askAITutor();

    }

}


function useSuggestion(question) {

    document.getElementById("ai-input").value =
        question;


    askAITutor();

}


function askAITutor() {

    const input =
        document.getElementById("ai-input");


    const question =
        input.value.trim();


    if (
        question === ""
    ) {

        return;

    }


    addUserMessage(
        question
    );


    input.value =
        "";


    setTimeout(
        function () {

            const answer =
                getTutorResponse(
                    question
                );


            addTutorMessage(
                answer
            );

        },
        400
    );

}


/* =========================================
   ADD USER MESSAGE
   ========================================= */

function addUserMessage(
    message
) {

    const container =
        document.getElementById(
            "chat-container"
        );


    const messageBox =
        document.createElement(
            "div"
        );


    messageBox.className =
        "chat-message user-message";


    messageBox.innerHTML = `

        <div class="message-content">

            <strong>You</strong>

            <p>${escapeHTML(message)}</p>

        </div>

    `;


    container.appendChild(
        messageBox
    );


    scrollChatToBottom();

}


/* =========================================
   ADD TUTOR MESSAGE
   ========================================= */

function addTutorMessage(
    message
) {

    const container =
        document.getElementById(
            "chat-container"
        );


    const messageBox =
        document.createElement(
            "div"
        );


    messageBox.className =
        "chat-message tutor-message";


    messageBox.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div class="message-content">

            <strong>
                AI Sanskrit Tutor
            </strong>

            <p>
                ${message}
            </p>

        </div>

    `;


    container.appendChild(
        messageBox
    );


    scrollChatToBottom();

}


/* =========================================
   TUTOR RESPONSE ENGINE
   ========================================= */

function getTutorResponse(
    question
) {

    const q =
        question
            .toLowerCase()
            .trim();


    /* RAMAH / RAMAM */

    if (
        q.includes("रामः") ||
        q.includes("रामम्")
    ) {

        return `
            <b>रामः</b> और <b>रामम्</b> दोनों
            "Rama" को refer करते हैं, लेकिन
            sentence में उनका grammatical role
            अलग होता है.<br><br>

            <b>रामः</b> → प्रथमा विभक्ति
            (कर्ता / subject)<br>

            <b>रामम्</b> → द्वितीया विभक्ति
            (कर्म / object)<br><br>

            Example:<br>
            <b>रामः पठति।</b> → Rama reads.<br>
            <b>रामम् पश्यति।</b> → He sees Rama.
        `;

    }


    /* SAHA / SAA */

    if (
        q.includes("सः") &&
        q.includes("सा")
    ) {

        return `
            <b>सः</b> का अर्थ है <b>He</b>
            और <b>सा</b> का अर्थ है <b>She</b>।<br><br>

            👦 सः = He<br>
            👧 सा = She<br><br>

            Example:<br>
            <b>सः पठति।</b> → He reads.<br>
            <b>सा पठति।</b> → She reads.
        `;

    }


    /* PATHATI / PATHAMI */

    if (
        q.includes("पठति") &&
        q.includes("पठामि")
    ) {

        return `
            <b>पठति</b> और <b>पठामि</b> दोनों
            "read" से related हैं, लेकिन
            person अलग है.<br><br>

            <b>पठति</b> → He/She reads<br>
            <b>पठामि</b> → I read<br><br>

            Example:<br>
            <b>सः पठति।</b> → He reads.<br>
            <b>अहम् पठामि।</b> → I read.
        `;

    }


    /* BASIC WORDS */

    if (
        q.includes("जलम्") ||
        q.includes("जल")
    ) {

        return `
            <b>जलम्</b> का अर्थ है
            <b>Water (पानी)</b>। 💧<br><br>

            Example:<br>
            <b>जलम् अस्ति।</b> → There is water.
        `;

    }


    if (
        q.includes("फलम्") ||
        q.includes("फल")
    ) {

        return `
            <b>फलम्</b> का अर्थ है
            <b>Fruit (फल)</b>। 🍎<br><br>

            यह एक नपुंसकलिङ्ग शब्द है।
        `;

    }


    if (
        q.includes("पुस्तकम्") ||
        q.includes("पुस्तक")
    ) {

        return `
            <b>पुस्तकम्</b> का अर्थ है
            <b>Book (किताब)</b>। 📖<br><br>

            Example:<br>
            <b>पुस्तकम् पठामि।</b>
            → I read a book.
        `;

    }


    /* NUMBERS */

    if (
        q.includes("एकम्") ||
        q.includes("एक")
    ) {

        return `
            <b>एकम्</b> का अर्थ है
            <b>One (एक)</b>। 🔢
        `;

    }


    if (
        q.includes("द्वे") ||
        q.includes("दो")
    ) {

        return `
            <b>द्वे</b> का अर्थ है
            <b>Two (दो)</b>।
        `;

    }


    if (
        q.includes("त्रीणि") ||
        q.includes("तीन")
    ) {

        return `
            <b>त्रीणि</b> का अर्थ है
            <b>Three (तीन)</b>।
        `;

    }


    /* VERBS */

    if (
        q.includes("गच्छति")
    ) {

        return `
            <b>गच्छति</b> का अर्थ है
            <b>goes / जाता है</b>।<br><br>

            Example:<br>
            <b>बालकः गच्छति।</b>
            → The boy goes.
        `;

    }


    if (
        q.includes("लिखति")
    ) {

        return `
            <b>लिखति</b> का अर्थ है
            <b>writes / लिखता है</b>।<br><br>

            Example:<br>
            <b>सः लिखति।</b>
            → He writes.
        `;

    }


    if (
        q.includes("पठति")
    ) {

        return `
            <b>पठति</b> का अर्थ है
            <b>reads / पढ़ता या पढ़ती है</b>।<br><br>

            Example:<br>
            <b>रामः पठति।</b>
            → Ram reads.
        `;

    }


    /* PRONOUNS */

    if (
        q.includes("अहम्")
    ) {

        return `
            <b>अहम्</b> का अर्थ है
            <b>I (मैं)</b>।<br><br>

            Example:<br>
            <b>अहम् पठामि।</b>
            → I read.
        `;

    }


    /* GENERAL GRAMMAR */

    if (
        q.includes("व्याकरण") ||
        q.includes("grammar")
    ) {

        return `
            संस्कृत में <b>व्याकरण</b> का मतलब
            language के rules से है।<br><br>

            इसमें शब्दों के रूप,
            विभक्ति, लिङ्ग, वचन, पुरुष,
            धातु और वाक्य-रचना जैसे topics
            आते हैं।
        `;

    }


    /* HELLO */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("namaste") ||
        q.includes("नमस्ते")
    ) {

        return `
            नमस्ते! 🙏<br><br>

            मैं तुम्हारा <b>AI Sanskrit Tutor</b>
            हूँ। तुम Sanskrit words,
            grammar या sentence से related
            doubt पूछ सकते हो।
        `;

    }


    /* FALLBACK */

    return `
        अच्छा question! 🤔<br><br>

        अभी मेरे Demo Tutor में इस question
        का exact answer available नहीं है।<br><br>

        तुम Sanskrit के किसी word,
        grammar rule या sentence का
        doubt पूछकर try कर सकते हो।
        <br><br>

        <b>Example:</b><br>
        "रामः और रामम् में क्या difference है?"
    `;

}


/* =========================================
   SECURITY
   ========================================= */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================
   CHAT SCROLL
   ========================================= */

function scrollChatToBottom() {

    const container =
        document.getElementById(
            "chat-container"
        );


    container.scrollTop =
        container.scrollHeight;

}


/* =========================================
   STARTUP
   ========================================= */

document.getElementById(
    "lessons-screen"
).style.display = "none";


document.getElementById(
    "quiz-screen"
).style.display = "none";


document.getElementById(
    "result-screen"
).style.display = "none";


document.getElementById(
    "ai-tutor-screen"
).style.display = "none";


updateAllDisplays();