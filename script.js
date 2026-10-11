/**
 * Sanskrit Learner - Main Application JavaScript
 * School AI Exhibition Prototype
 * Handles: 30-Lesson Learning Journey (9 Core Functional + 21 Exhibition Placeholders),
 * Learn Mode, Test Mode, Gamification (XP, Streak, Level, Badges), and AI Sanskrit Tutor.
 */

// ==========================================================================
// 1. LESSON DATA (30 Lessons across 10 Units with Hindi + English)
// Lessons 1–9: Fully functional interactive lessons with 5 learnCards & 5 quiz questions.
// Lessons 10–30: Structured full 30-lesson curriculum for school exhibition.
// ==========================================================================
const LESSONS_DATA = [
  // ------------------------------------------------------------------------
  // Unit 1: Basic Words (शब्दज्ञानम्) — [Functional]
  // ------------------------------------------------------------------------
  {
    id: 1,
    icon: "📖",
    unit: 1,
    unitTitle: "शब्दज्ञानम् (Basic Words)",
    title: "Everyday Words — Level 1",
    subtitle: "Essential items & places",
    learnCards: [
      {
        sanskrit: "जलम्",
        hindi: "पानी",
        english: "Water",
        explanation: "जलम् का अर्थ पानी होता है। (Jalam means water.) दैनिक जीवन में इसका बहुत उपयोग होता है।"
      },
      {
        sanskrit: "फलम्",
        hindi: "फल",
        english: "Fruit",
        explanation: "फलम् का अर्थ फल (Fruit) होता है। जैसे: आम्रम् (आम), सेवम् (सेब)।"
      },
      {
        sanskrit: "पुस्तकम्",
        hindi: "किताब",
        english: "Book",
        explanation: "पुस्तकम् का अर्थ किताब या पुस्तक (Book) होता है।"
      },
      {
        sanskrit: "गृहम्",
        hindi: "घर",
        english: "House",
        explanation: "गृहम् का अर्थ घर या निवास स्थान (House) होता है।"
      },
      {
        sanskrit: "विद्यालयः",
        hindi: "विद्यालय / पाठशाला",
        english: "School",
        explanation: "विद्यालयः का अर्थ स्कूल या पाठशाला (School) होता है, जहाँ विद्या प्राप्त होती है।"
      }
    ],
    quiz: [
      {
        question: "जलम् का अर्थ क्या है?",
        options: [
          "पानी / Water",
          "फल / Fruit",
          "किताब / Book",
          "घर / House"
        ],
        correctIndex: 0,
        explanation: "जलम् का सही अर्थ 'पानी' (Water) होता है।"
      },
      {
        question: "पुस्तकम् का सही अर्थ चुनें:",
        options: [
          "घर / House",
          "किताब / Book",
          "पानी / Water",
          "फल / Fruit"
        ],
        correctIndex: 1,
        explanation: "पुस्तकम् का अर्थ 'किताब' (Book) होता है।"
      },
      {
        question: "School को संस्कृत में क्या कहते हैं?",
        options: [
          "गृहम्",
          "पुस्तकम्",
          "विद्यालयः",
          "फलम्"
        ],
        correctIndex: 2,
        explanation: "School को संस्कृत में 'विद्यालयः' कहा जाता है।"
      },
      {
        question: "फलम् का अर्थ क्या है?",
        options: [
          "किताब / Book",
          "विद्यालय / School",
          "फल / Fruit",
          "पानी / Water"
        ],
        correctIndex: 2,
        explanation: "फलम् का अर्थ 'फल' (Fruit) होता है।"
      },
      {
        question: "गृहम् का सही अर्थ क्या है?",
        options: [
          "घर / House",
          "पानी / Water",
          "विद्यालय / School",
          "किताब / Book"
        ],
        correctIndex: 0,
        explanation: "गृहम् का अर्थ 'घर' (House) होता है।"
      }
    ]
  },
  {
    id: 2,
    icon: "🌿",
    unit: 1,
    unitTitle: "शब्दज्ञानम् (Basic Words)",
    title: "Common Sanskrit — Level 2",
    subtitle: "Nature & Daily Companions",
    learnCards: [
      {
        sanskrit: "वृक्षः",
        hindi: "पेड़",
        english: "Tree",
        explanation: "वृक्षः का अर्थ पेड़ या तरु (Tree) होता है। यह पुंल्लिङ्ग शब्द है।"
      },
      {
        sanskrit: "मित्रम्",
        hindi: "दोस्त / सखा",
        english: "Friend",
        explanation: "मित्रम् का अर्थ दोस्त या मित्र (Friend) होता है। संस्कृत में यह नपुंसकलिंग शब्द है।"
      },
      {
        sanskrit: "पुष्पम्",
        hindi: "फूल",
        english: "Flower",
        explanation: "पुष्पम् का अर्थ फूल या सुमन (Flower) होता है।"
      },
      {
        sanskrit: "सूर्यः",
        hindi: "सूरज",
        english: "Sun",
        explanation: "सूर्यः का अर्थ सूरज (Sun) होता है। यह दिन में प्रकाश देता है।"
      },
      {
        sanskrit: "चन्द्रः",
        hindi: "चाँद",
        english: "Moon",
        explanation: "चन्द्रः का अर्थ चाँद (Moon) होता है, जो रात्रि में शीतलता देता है।"
      }
    ],
    quiz: [
      {
        question: "वृक्षः का अर्थ क्या होता है?",
        options: [
          "फूल / Flower",
          "पेड़ / Tree",
          "चाँद / Moon",
          "दोस्त / Friend"
        ],
        correctIndex: 1,
        explanation: "वृक्षः का अर्थ 'पेड़' (Tree) होता है।"
      },
      {
        question: "'Friend' को संस्कृत में क्या कहते हैं?",
        options: [
          "मित्रम्",
          "पुष्पम्",
          "सूर्यः",
          "गृहम्"
        ],
        correctIndex: 0,
        explanation: "Friend को संस्कृत में 'मित्रम्' कहते हैं।"
      },
      {
        question: "सूर्यः और चन्द्रः का क्या अर्थ है?",
        options: [
          "पेड़ और फूल / Tree and Flower",
          "किताब और घर / Book and House",
          "सूरज और चाँद / Sun and Moon",
          "पानी और फल / Water and Fruit"
        ],
        correctIndex: 2,
        explanation: "सूर्यः का अर्थ 'सूरज' (Sun) और चन्द्रः का अर्थ 'चाँद' (Moon) होता है।"
      },
      {
        question: "पुष्पम् का सही अर्थ क्या है?",
        options: [
          "फूल / Flower",
          "पेड़ / Tree",
          "सूरज / Sun",
          "विद्यालय / School"
        ],
        correctIndex: 0,
        explanation: "पुष्पम् का अर्थ 'फूल' (Flower) होता है।"
      },
      {
        question: "रात में आकाश में 'चन्द्रः' दिखाई देता है। 'चन्द्रः' का क्या अर्थ है?",
        options: [
          "चाँद / Moon",
          "सूरज / Sun",
          "तारा / Star",
          "बादल / Cloud"
        ],
        correctIndex: 0,
        explanation: "चन्द्रः का अर्थ 'चाँद' (Moon) होता है।"
      }
    ]
  },
  {
    id: 3,
    icon: "🏛️",
    unit: 1,
    unitTitle: "शब्दज्ञानम् (Basic Words)",
    title: "Word Master — Level 3",
    subtitle: "Relations & Guides",
    learnCards: [
      {
        sanskrit: "माता",
        hindi: "माँ / जननी",
        english: "Mother",
        explanation: "माता का अर्थ जननी या माँ (Mother) होता है।"
      },
      {
        sanskrit: "पिता",
        hindi: "पिताजी / जनक",
        english: "Father",
        explanation: "पिता का अर्थ पिता या जनक (Father) होता है।"
      },
      {
        sanskrit: "भ्राता",
        hindi: "भाई",
        english: "Brother",
        explanation: "भ्राता का अर्थ भाई (Brother) होता है।"
      },
      {
        sanskrit: "भगिनी",
        hindi: "बहन",
        english: "Sister",
        explanation: "भगिनी का अर्थ बहन (Sister) होता है।"
      },
      {
        sanskrit: "गुरुः",
        hindi: "अध्यापक / गुरु",
        english: "Teacher / Mentor",
        explanation: "गुरुः का अर्थ शिक्षक, आचार्य या गुरु (Teacher) होता है।"
      }
    ],
    quiz: [
      {
        question: "भ्राता का सही अर्थ क्या है?",
        options: [
          "भाई / Brother",
          "बहन / Sister",
          "माँ / Mother",
          "पिता / Father"
        ],
        correctIndex: 0,
        explanation: "भ्राता का अर्थ 'भाई' (Brother) होता है।"
      },
      {
        question: "'Sister' को संस्कृत में क्या कहते हैं?",
        options: [
          "माता",
          "भगिनी",
          "गुरुः",
          "मित्रम्"
        ],
        correctIndex: 1,
        explanation: "Sister को संस्कृत में 'भगिनी' कहा जाता है।"
      },
      {
        question: "शिक्षक (Teacher) को संस्कृत में क्या कहते हैं?",
        options: [
          "पिता",
          "विद्यालयः",
          "गुरुः",
          "भ्राता"
        ],
        correctIndex: 2,
        explanation: "Teacher को संस्कृत में 'गुरुः' या शिक्षकः कहते हैं।"
      },
      {
        question: "माता-पिता का क्या अर्थ है?",
        options: [
          "भाई-बहन / Brother-Sister",
          "माँ-पिताजी / Mother-Father",
          "दोस्त-शिक्षक / Friend-Teacher",
          "सूरज-चाँद / Sun-Moon"
        ],
        correctIndex: 1,
        explanation: "माता = Mother, पिता = Father।"
      },
      {
        question: "'Mother' को संस्कृत में क्या कहते हैं?",
        options: [
          "भगिनी",
          "माता",
          "भ्राता",
          "मित्रम्"
        ],
        correctIndex: 1,
        explanation: "Mother को संस्कृत में 'माता' या जननी कहते हैं।"
      }
    ]
  },

  // ------------------------------------------------------------------------
  // Unit 2: Numbers (संख्याज्ञानम्) — [Functional]
  // ------------------------------------------------------------------------
  {
    id: 4,
    icon: "🔢",
    unit: 2,
    unitTitle: "संख्याज्ञानम् (Numbers)",
    title: "Numbers 1–10 — Level 1",
    subtitle: "Counting in Sanskrit",
    learnCards: [
      {
        sanskrit: "एकम् (1), द्वे (2)",
        hindi: "एक (1), दो (2)",
        english: "One (1), Two (2)",
        explanation: "एकम् = 1, द्वे = 2. ये शुरुआती संस्कृत संख्याएँ हैं।"
      },
      {
        sanskrit: "त्रीणि (3), चत्वारि (4)",
        hindi: "तीन (3), चार (4)",
        english: "Three (3), Four (4)",
        explanation: "त्रीणि = 3, चत्वारि = 4."
      },
      {
        sanskrit: "पञ्च (5), षट् (6)",
        hindi: "पाँच (5), छह (6)",
        english: "Five (5), Six (6)",
        explanation: "पञ्च = 5 (जैसे पंचतन्त्र), षट् = 6 (जैसे षट्कोण)।"
      },
      {
        sanskrit: "सप्त (7), अष्ट (8)",
        hindi: "सात (7), आठ (8)",
        english: "Seven (7), Eight (8)",
        explanation: "सप्त = 7 (सप्तऋषि), अष्ट = 8 (अष्टाध्यायी)।"
      },
      {
        sanskrit: "नव (9), दश (10)",
        hindi: "नौ (9), दस (10)",
        english: "Nine (9), Ten (10)",
        explanation: "नव = 9 (नवरत्न), दश = 10 (दशानन)।"
      }
    ],
    quiz: [
      {
        question: "संस्कृत में 'पञ्च' का क्या अर्थ है?",
        options: [
          "तीन / Three (3)",
          "पाँच / Five (5)",
          "सात / Seven (7)",
          "नौ / Nine (9)"
        ],
        correctIndex: 1,
        explanation: "पञ्च का अर्थ 5 (Five) होता है।"
      },
      {
        question: "संख्या '8' को संस्कृत में क्या कहते हैं?",
        options: [
          "षट्",
          "सप्त",
          "अष्ट",
          "दश"
        ],
        correctIndex: 2,
        explanation: "संख्या 8 को 'अष्ट' कहते हैं।"
      },
      {
        question: "क्रम 'एकम्, द्वे, त्रीणि' का सही अर्थ क्या है?",
        options: [
          "1, 2, 3",
          "4, 5, 6",
          "7, 8, 9",
          "2, 4, 6"
        ],
        correctIndex: 0,
        explanation: "एकम् = 1, द्वे = 2, त्रीणि = 3."
      },
      {
        question: "संख्या '10' को संस्कृत में क्या कहते हैं?",
        options: [
          "नव",
          "दश",
          "चत्वारि",
          "द्वे"
        ],
        correctIndex: 1,
        explanation: "संख्या 10 को 'दश' कहा जाता है।"
      },
      {
        question: "संख्या '4' (Four) को संस्कृत में क्या कहते हैं?",
        options: [
          "चत्वारि",
          "पञ्च",
          "षट्",
          "सप्त"
        ],
        correctIndex: 0,
        explanation: "संख्या 4 को संस्कृत में 'चत्वारि' कहते हैं।"
      }
    ]
  },
  {
    id: 5,
    icon: "🔟",
    unit: 2,
    unitTitle: "संख्याज्ञानम् (Numbers)",
    title: "Numbers 11–50 — Level 2",
    subtitle: "Higher Counting & Tens",
    learnCards: [
      {
        sanskrit: "एकादश (11), द्वादश (12)",
        hindi: "ग्यारह (11), बारह (12)",
        english: "Eleven (11), Twelve (12)",
        explanation: "दश में एक जोड़ने पर 'एकादश' (11) और दो जोड़ने पर 'द्वादश' (12) बनता है।"
      },
      {
        sanskrit: "विंशतिः (20)",
        hindi: "बीस (20)",
        english: "Twenty (20)",
        explanation: "विंशतिः का अर्थ 20 होता है। (जैसे एकविंशतिः = 21)।"
      },
      {
        sanskrit: "त्रिंशत् (30)",
        hindi: "तीस (30)",
        english: "Thirty (30)",
        explanation: "त्रिंशत् का अर्थ 30 होता है।"
      },
      {
        sanskrit: "चत्वारिंशत् (40)",
        hindi: "चालीस (40)",
        english: "Forty (40)",
        explanation: "चत्वारिंशत् का अर्थ 40 (Forty) होता है।"
      },
      {
        sanskrit: "पञ्चाशत् (50)",
        hindi: "पचास (50)",
        english: "Fifty (50)",
        explanation: "पञ्चाशत् का अर्थ 50 (Fifty) होता है।"
      }
    ],
    quiz: [
      {
        question: "विंशतिः का क्या अर्थ है?",
        options: [
          "10 (दस)",
          "20 (बीस)",
          "30 (तीस)",
          "50 (पचास)"
        ],
        correctIndex: 1,
        explanation: "विंशतिः का अर्थ 20 (Twenty) होता है।"
      },
      {
        question: "संख्या '12' को संस्कृत में क्या कहते हैं?",
        options: [
          "एकादश",
          "द्वादश",
          "त्रिंशत्",
          "पञ्चाशत्"
        ],
        correctIndex: 1,
        explanation: "12 को संस्कृत में 'द्वादश' कहते हैं।"
      },
      {
        question: "पञ्चाशत् का मान क्या है?",
        options: [
          "25",
          "40",
          "50",
          "15"
        ],
        correctIndex: 2,
        explanation: "पञ्चाशत् का अर्थ 50 होता है।"
      },
      {
        question: "'Forty (40)' को संस्कृत में क्या कहते हैं?",
        options: [
          "चत्वारिंशत्",
          "विंशतिः",
          "द्वादश",
          "दश"
        ],
        correctIndex: 0,
        explanation: "40 को संस्कृत में 'चत्वारिंशत्' कहते हैं।"
      },
      {
        question: "संख्या '11' (Eleven) को संस्कृत में क्या कहते हैं?",
        options: [
          "दश",
          "एकादश",
          "द्वादश",
          "त्रिंशत्"
        ],
        correctIndex: 1,
        explanation: "11 को संस्कृत में 'एकादश' कहा जाता है।"
      }
    ]
  },
  {
    id: 6,
    icon: "🧮",
    unit: 2,
    unitTitle: "संख्याज्ञानम् (Numbers)",
    title: "Numbers in Sentences — Level 3",
    subtitle: "Using quantities in context",
    learnCards: [
      {
        sanskrit: "एकः बालकः",
        hindi: "एक लड़का",
        english: "One boy",
        explanation: "पुंल्लिङ्ग में 1 के लिए 'एकः' का प्रयोग होता है। जैसे: एकः बालकः।"
      },
      {
        sanskrit: "द्वे फले",
        hindi: "दो फल",
        english: "Two fruits",
        explanation: "नपुंसकलिंग द्विवचन में 2 के लिए 'द्वे' का प्रयोग होता है। फलम् -> फले -> द्वे फले।"
      },
      {
        sanskrit: "त्रीणि पुस्तकानि",
        hindi: "तीन किताबें",
        english: "Three books",
        explanation: "नपुंसकलिंग बहुवचन में 'त्रीणि' का प्रयोग होता है।"
      },
      {
        sanskrit: "पञ्च पाण्डवाः",
        hindi: "पाँच पाण्डव",
        english: "Five Pandavas",
        explanation: "संख्या 5 से आगे सभी लिंगों में रूप समान रहते हैं: पञ्च पाण्डवाः (5 पांडव)।"
      },
      {
        sanskrit: "सप्त वासराः",
        hindi: "सात दिन (सप्ताह के)",
        english: "Seven days",
        explanation: "सप्ताह में सात दिन होते हैं: 'सप्ताहस्य सप्त वासराः भवन्ति'।"
      }
    ],
    quiz: [
      {
        question: "'एकः बालकः' का सही हिन्दी अर्थ क्या है?",
        options: [
          "दो लड़के / Two boys",
          "एक लड़का / One boy",
          "तीन किताबें / Three books",
          "पाँच लड़के / Five boys"
        ],
        correctIndex: 1,
        explanation: "एकः बालकः = एक लड़का (One boy)।"
      },
      {
        question: "'Two fruits' को संस्कृत में कैसे लिखेंगे?",
        options: [
          "एकम् फलम्",
          "द्वे फले",
          "त्रीणि फलानि",
          "पञ्च फले"
        ],
        correctIndex: 1,
        explanation: "दो फलों के लिए द्विवचन रूप 'द्वे फले' होता है।"
      },
      {
        question: "'पञ्च पाण्डवाः' में 'पञ्च' का क्या अर्थ है?",
        options: [
          "चार (4)",
          "पाँच (5)",
          "छह (6)",
          "सात (7)"
        ],
        correctIndex: 1,
        explanation: "पञ्च = 5 (पाँच)।"
      },
      {
        question: "पुस्तकानि के साथ '3' के लिए क्या आएगा?",
        options: [
          "त्रयः",
          "तिस्रः",
          "त्रीणि",
          "एकम्"
        ],
        correctIndex: 2,
        explanation: "पुस्तकम् नपुंसकलिंग है, इसलिए 'त्रीणि पुस्तकानि' सही है।"
      },
      {
        question: "'सप्त वासराः' का सही अर्थ क्या है?",
        options: [
          "सात दिन / Seven days",
          "सात फल / Seven fruits",
          "पाँच दिन / Five days",
          "तीन लड़के / Three boys"
        ],
        correctIndex: 0,
        explanation: "सप्त = सात, वासराः = दिन। 'सप्त वासराः' का अर्थ 'सात दिन' होता है।"
      }
    ]
  },

  // ------------------------------------------------------------------------
  // Unit 3: Grammar Basics (व्याकरणप्रवेशः) — [Functional]
  // ------------------------------------------------------------------------
  {
    id: 7,
    icon: "📜",
    unit: 3,
    unitTitle: "व्याकरणप्रवेशः (Grammar)",
    title: "Grammar Basics — Level 1",
    subtitle: "Purusha & Present Tense (लट् लकार)",
    learnCards: [
      {
        sanskrit: "सः पठति",
        hindi: "वह पढ़ता है",
        english: "He reads",
        explanation: "प्रथम पुरुष (Third Person): सः = वह (He), पठति = पढ़ता है (reads)।"
      },
      {
        sanskrit: "त्वम् पठसि",
        hindi: "तुम पढ़ते हो",
        english: "You read",
        explanation: "मध्यम पुरुष (Second Person): त्वम् = तुम (You), पठसि = पढ़ते हो।"
      },
      {
        sanskrit: "अहम् पठामि",
        hindi: "मैं पढ़ता हूँ",
        english: "I read",
        explanation: "उत्तम पुरुष (First Person): अहम् = मैं (I), पठामि = पढ़ता हूँ।"
      },
      {
        sanskrit: "लट् लकार (Present Tense)",
        hindi: "वर्तमान काल",
        english: "Present Tense",
        explanation: "क्रिया के वर्तमान काल रूप: पठति (वह), पठसि (तुम), पठामि (मैं)।"
      },
      {
        sanskrit: "तौ / ते",
        hindi: "वे दोनों / वे सब",
        english: "They two / They all",
        explanation: "द्विवचन: तौ पठतः (वे दोनों पढ़ते हैं), बहुवचन: ते पठन्ति (वे सब पढ़ते हैं)।"
      }
    ],
    quiz: [
      {
        question: "'अहम्' (I) के साथ पठ् धातु का सही रूप क्या होगा?",
        options: [
          "पठति",
          "पठसि",
          "पठामि",
          "पठन्ति"
        ],
        correctIndex: 2,
        explanation: "अहम् (उत्तम पुरुष एकवचन) के साथ 'पठामि' का प्रयोग होता है (अहम् पठामि = मैं पढ़ता हूँ)।"
      },
      {
        question: "'सः पठति' का सही हिन्दी अर्थ क्या है?",
        options: [
          "तुम पढ़ते हो / You read",
          "वह पढ़ता है / He reads",
          "मैं पढ़ता हूँ / I read",
          "वे सब पढ़ते हैं / They read"
        ],
        correctIndex: 1,
        explanation: "सः = वह, पठति = पढ़ता है (He reads)।"
      },
      {
        question: "'त्वम्' (You) के साथ कौन सा क्रियापद आएगा?",
        options: [
          "पठसि",
          "पठति",
          "पठामि",
          "पठतः"
        ],
        correctIndex: 0,
        explanation: "त्वम् (मध्यम पुरुष) के साथ 'पठसि' लगता है (त्वम् पठसि)।"
      },
      {
        question: "संस्कृत में 'वर्तमान काल' को क्या कहते हैं?",
        options: [
          "लट् लकार (Lat Lakar)",
          "लृट् लकार (Lrit Lakar)",
          "लङ् लकार (Lang Lakar)",
          "लोट् लकार (Lot Lakar)"
        ],
        correctIndex: 0,
        explanation: "वर्तमान काल (Present Tense) को संस्कृत में 'लट् लकार' कहते हैं।"
      },
      {
        question: "'अहं पठामि' का सही अर्थ क्या है?",
        options: [
          "वह पढ़ता है / He reads",
          "तुम पढ़ते हो / You read",
          "मैं पढ़ता हूँ / I read",
          "वे दोनों पढ़ते हैं / They read"
        ],
        correctIndex: 2,
        explanation: "अहम् = मैं, पठामि = पढ़ता हूँ। अतः 'अहं पठामि' = 'मैं पढ़ता हूँ'।"
      }
    ]
  },
  {
    id: 8,
    icon: "✍️",
    unit: 3,
    unitTitle: "व्याकरणप्रवेशः (Grammar)",
    title: "Vibhakti & Forms — Level 2",
    subtitle: "Cases (कारक व विभक्तियाँ)",
    learnCards: [
      {
        sanskrit: "प्रथमा विभक्ति (रामः)",
        hindi: "कर्ता कारक (राम ने / राम)",
        english: "Nominative Case (Subject: Rama)",
        explanation: "रामः = राम (Subject)। कार्य करने वाला कर्ता होता है (प्रथमा विभक्ति)।"
      },
      {
        sanskrit: "द्वितीया विभक्ति (रामम्)",
        hindi: "कर्म कारक (राम को)",
        english: "Accusative Case (Object: to Rama)",
        explanation: "रामम् = राम को (Object)। क्रिया का फल जिस पर पड़ता है (द्वितीया विभक्ति)।"
      },
      {
        sanskrit: "तृतीया विभक्ति (रामेण)",
        hindi: "करण कारक (राम के द्वारा / से)",
        english: "Instrumental Case (By/with Rama)",
        explanation: "रामेण = राम के द्वारा या साधन (With/By Rama)।"
      },
      {
        sanskrit: "चतुर्थी विभक्ति (रामाय)",
        hindi: "सम्प्रदान कारक (राम के लिए)",
        english: "Dative Case (For Rama)",
        explanation: "रामाय = राम के लिए (For Rama)। किसी को कुछ देने के अर्थ में।"
      },
      {
        sanskrit: "षष्ठी विभक्ति (रामस्य)",
        hindi: "सम्बन्ध कारक (राम का / की / के)",
        english: "Genitive Case (Rama's / of Rama)",
        explanation: "रामस्य = राम का (Rama's)। जैसे: रामस्य पुस्तकम् = राम की किताब।"
      }
    ],
    quiz: [
      {
        question: "'रामस्य' में कौन सी विभक्ति है और इसका क्या अर्थ है?",
        options: [
          "प्रथमा (राम)",
          "द्वितीया (राम को)",
          "षष्ठी (राम का / Rama's)",
          "तृतीया (राम से)"
        ],
        correctIndex: 2,
        explanation: "रामस्य षष्ठी विभक्ति (Genitive) है, जिसका अर्थ 'राम का' (Rama's) होता है।"
      },
      {
        question: "'राम को' (Object) के लिए कौन सा रूप प्रयुक्त होगा?",
        options: [
          "रामः",
          "रामम्",
          "रामेण",
          "रामाय"
        ],
        correctIndex: 1,
        explanation: "द्वितीया विभक्ति एकवचन में 'रामम्' होता है (कर्म कारक = राम को)।"
      },
      {
        question: "'रामेण' का सही अर्थ क्या है?",
        options: [
          "राम के लिए / For Rama",
          "राम के द्वारा / By Rama",
          "राम का / Rama's",
          "राम में / In Rama"
        ],
        correctIndex: 1,
        explanation: "रामेण तृतीया विभक्ति है, जिसका अर्थ 'राम के द्वारा' (By/With Rama) होता है।"
      },
      {
        question: "'रामाय' किस विभक्ति का रूप है?",
        options: [
          "चतुर्थी विभक्ति (के लिए)",
          "प्रथमा विभक्ति (ने)",
          "द्वितीया विभक्ति (को)",
          "पञ्चमी विभक्ति (से अलग)"
        ],
        correctIndex: 0,
        explanation: "रामाय चतुर्थी विभक्ति (सम्प्रदान) का रूप है (राम के लिए)।"
      },
      {
        question: "कर्ता कारक (Subject) के लिए प्रथमा विभक्ति में राम का क्या रूप होता है?",
        options: [
          "रामम्",
          "रामः",
          "रामेण",
          "रामस्य"
        ],
        correctIndex: 1,
        explanation: "प्रथमा विभक्ति एकवचन (Subject/कर्ता) में 'रामः' रूप होता है।"
      }
    ]
  },
  {
    id: 9,
    icon: "🧩",
    unit: 3,
    unitTitle: "व्याकरणप्रवेशः (Grammar)",
    title: "Sentence Builder — Level 3",
    subtitle: "Complete Sanskrit sentences",
    learnCards: [
      {
        sanskrit: "बालकः विद्यालयं गच्छति।",
        hindi: "लड़का स्कूल जाता है।",
        english: "The boy goes to school.",
        explanation: "बालकः (Subject) + विद्यालयम् (School - Object) + गच्छति (goes - Verb)।"
      },
      {
        sanskrit: "सः जलं पिबति।",
        hindi: "वह पानी पीता है।",
        english: "He drinks water.",
        explanation: "सः = वह, जलम् = पानी, पिबति = पीता है।"
      },
      {
        sanskrit: "अहं पुस्तकं पठामि।",
        hindi: "मैं किताब पढ़ता हूँ।",
        english: "I read a book.",
        explanation: "अहम् = मैं, पुस्तकम् = किताब, पठामि = पढ़ता हूँ।"
      },
      {
        sanskrit: "त्वं किं करोषि?",
        hindi: "तुम क्या कर रहे हो?",
        english: "What are you doing?",
        explanation: "त्वम् = तुम, किम् = क्या, करोषि = करते हो।"
      },
      {
        sanskrit: "वृक्षात् पत्रं पतति।",
        hindi: "पेड़ से पत्ता गिरता है।",
        english: "A leaf falls from the tree.",
        explanation: "वृक्षात् (पञ्चमी विभक्ति - पेड़ से अलग होना) + पत्रम् (पत्ता) + पतति (गिरता है)।"
      }
    ],
    quiz: [
      {
        question: "'बालकः विद्यालयं गच्छति' का सही अर्थ क्या है?",
        options: [
          "लड़का घर आता है / Boy comes home",
          "लड़का स्कूल जाता है / Boy goes to school",
          "लड़का फल खाता है / Boy eats fruit",
          "लड़का पानी पीता है / Boy drinks water"
        ],
        correctIndex: 1,
        explanation: "बालकः विद्यालयं गच्छति = लड़का स्कूल जाता है (The boy goes to school)।"
      },
      {
        question: "'मैं किताब पढ़ता हूँ' का संस्कृत अनुवाद क्या होगा?",
        options: [
          "सः पुस्तकं पठति।",
          "त्वं पुस्तकं पठसि।",
          "अहं पुस्तकं पठामि।",
          "बालकः पुस्तकं लिखति।"
        ],
        correctIndex: 2,
        explanation: "अहम् (मैं) के साथ 'पठामि' आता है, अतः 'अहं पुस्तकं पठामि' सही है।"
      },
      {
        question: "'वृक्षात् पत्रं पतति' में 'वृक्षात्' में कौन सी विभक्ति है?",
        options: [
          "प्रथमा (Subject)",
          "द्वितीया (Object)",
          "पञ्चमी (Separation / से अलग)",
          "सप्तमी (Location)"
        ],
        correctIndex: 2,
        explanation: "पेड़ से अलग होने के कारण अपादान कारक में पञ्चमी विभक्ति (वृक्षात्) लगी है।"
      },
      {
        question: "'सः जलं पिबति' का क्या अर्थ है?",
        options: [
          "वह पानी पीता है / He drinks water",
          "वह फल खाता है / He eats fruit",
          "तुम पानी पीते हो / You drink water",
          "मैं पानी पीता हूँ / I drink water"
        ],
        correctIndex: 0,
        explanation: "सः = वह, जलम् = पानी, पिबति = पीता है।"
      },
      {
        question: "'तुम क्या कर रहे हो?' का संस्कृत वाक्य क्या है?",
        options: [
          "त्वं किं करोषि?",
          "सः किं करोति?",
          "अहं किं करोमि?",
          "बालकः कुत्र गच्छति?"
        ],
        correctIndex: 0,
        explanation: "तुम (त्वम्) के साथ 'करोषि' आता है, अतः 'त्वं किं करोषि?' सही रूप है।"
      }
    ]
  },

  // ------------------------------------------------------------------------
  // Unit 4: Greetings & Etiquette (अभिवादनम् व शिष्टाचारः) 
  // ------------------------------------------------------------------------
  {
    id: 10,
    icon: "🙏",
    unit: 4,
    unitTitle: "अभिवादनम् (Greetings)",
    title: "Daily Greetings — Level 1",
    subtitle: "Salutations & courtesies (नमो नमः, सुप्रभातम)",
    isUpcoming: true
  },
  {
    id: 11,
    icon: "🤝",
    unit: 4,
    unitTitle: "अभिवादनम् (Greetings)",
    title: "Polite Expressions — Level 2",
    subtitle: "Thanks, apologies & requests (धन्यवादः, कृपया)",
    isUpcoming: true
  },
  {
    id: 12,
    icon: "🗣️",
    unit: 4,
    unitTitle: "अभिवादनम् (Greetings)",
    title: "Sanskrit Introductions — Level 3",
    subtitle: "Introducing yourself & others (मम नाम...)",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 5: Pronouns & Person (सर्वनाम पदानि) 
  // ------------------------------------------------------------------------
  {
    id: 13,
    icon: "👉",
    unit: 5,
    unitTitle: "सर्वनाम पदानि (Pronouns)",
    title: "Demonstrative Pronouns — Level 1",
    subtitle: "This, That & Pointing (एषः, एषा, एतत्)",
    isUpcoming: true
  },
  {
    id: 14,
    icon: "👥",
    unit: 5,
    unitTitle: "सर्वनाम पदानि (Pronouns)",
    title: "Personal Pronouns — Level 2",
    subtitle: "We, You all & They (वयम्, यूयम्, तानि)",
    isUpcoming: true
  },
  {
    id: 15,
    icon: "❓",
    unit: 5,
    unitTitle: "सर्वनाम पदानि (Pronouns)",
    title: "Question Words — Level 3",
    subtitle: "Who, What & Where (कः, किम्, कुत्र)",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 6: Nouns & Gender (लिङ्ग परिचयः) 
  // ------------------------------------------------------------------------
  {
    id: 16,
    icon: "🦁",
    unit: 6,
    unitTitle: "लिङ्ग परिचयः (Nouns & Gender)",
    title: "Masculine Nouns — Level 1",
    subtitle: "Akarant Pul-linga forms (बालकः, अश्वः, गजः)",
    isUpcoming: true
  },
  {
    id: 17,
    icon: "🌸",
    unit: 6,
    unitTitle: "लिङ्ग परिचयः (Nouns & Gender)",
    title: "Feminine Nouns — Level 2",
    subtitle: "Akarant & Ikarant Stri-linga (बालिका, लता)",
    isUpcoming: true
  },
  {
    id: 18,
    icon: "🍃",
    unit: 6,
    unitTitle: "लिङ्ग परिचयः (Nouns & Gender)",
    title: "Neuter Nouns — Level 3",
    subtitle: "Napumsaka-linga objects (पत्रम्, वनम्)",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 7: Verb Forms & Tenses (धातु रूपाणि) 
  // ------------------------------------------------------------------------
  {
    id: 19,
    icon: "⏳",
    unit: 7,
    unitTitle: "धातु रूपाणि (Verb Forms)",
    title: "Future Tense — Level 1",
    subtitle: "Lrit Lakar forms (लृट् लकार: पठिष्यति)",
    isUpcoming: true
  },
  {
    id: 20,
    icon: "🕰️",
    unit: 7,
    unitTitle: "धातु रूपाणि (Verb Forms)",
    title: "Past Tense — Level 2",
    subtitle: "Lang Lakar forms (लङ् लकार: अपठत्)",
    isUpcoming: true
  },
  {
    id: 21,
    icon: "⚡",
    unit: 7,
    unitTitle: "धातु रूपाणि (Verb Forms)",
    title: "Imperative Mood — Level 3",
    subtitle: "Lot Lakar orders & requests (लोट्: पठतु)",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 8: Vibhakti & Shabdroop (शब्दरूप सिद्धिः) 
  // ------------------------------------------------------------------------
  {
    id: 22,
    icon: "📚",
    unit: 8,
    unitTitle: "शब्दरूप सिद्धिः (Shabdroop)",
    title: "Hari & Guru Forms — Level 1",
    subtitle: "Short 'i' and 'u' noun declensions",
    isUpcoming: true
  },
  {
    id: 23,
    icon: "📋",
    unit: 8,
    unitTitle: "शब्दरूप सिद्धिः (Shabdroop)",
    title: "Pronoun Tables — Level 2",
    subtitle: "Asmad & Yushmad master tables",
    isUpcoming: true
  },
  {
    id: 24,
    icon: "📍",
    unit: 8,
    unitTitle: "शब्दरूप सिद्धिः (Shabdroop)",
    title: "Locative Case — Level 3",
    subtitle: "Saptami Vibhakti (वने, गृहे, विद्यालये)",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 9: Karak, Sandhi & Avyay (कारक, सन्धि व अव्यय) 
  // ------------------------------------------------------------------------
  {
    id: 25,
    icon: "💎",
    unit: 9,
    unitTitle: "कारक, सन्धि व अव्यय",
    title: "Essential Indeclinables — Level 1",
    subtitle: "Avyay words (अत्र, तत्र, यत्र, सर्वत्र, अपि)",
    isUpcoming: true
  },
  {
    id: 26,
    icon: "🔗",
    unit: 9,
    unitTitle: "कारक, सन्धि व अव्यय",
    title: "Vowel Sandhi Basics — Level 2",
    subtitle: "Dirgha, Guna & Vriddhi sandhi rules",
    isUpcoming: true
  },
  {
    id: 27,
    icon: "🎯",
    unit: 9,
    unitTitle: "कारक, सन्धि व अव्यय",
    title: "Karak & Upapada — Level 3",
    subtitle: "Case associations in complete sentences",
    isUpcoming: true
  },

  // ------------------------------------------------------------------------
  // Unit 10: Reading & Advanced Practice (कथा व अभ्यासः) 
  // ------------------------------------------------------------------------
  {
    id: 28,
    icon: "🏗️",
    unit: 10,
    unitTitle: "कथा व अभ्यासः (Reading)",
    title: "Complex Sentence Builder — Level 1",
    subtitle: "Correlative clauses (यदा-तदा, यदि-तर्हि)",
    isUpcoming: true
  },
  {
    id: 29,
    icon: "📖",
    unit: 10,
    unitTitle: "कथा व अभ्यासः (Reading)",
    title: "Simple Sanskrit Stories — Level 2",
    subtitle: "Short moral tales with word-by-word guide",
    isUpcoming: true
  },
  {
    id: 30,
    icon: "👑",
    unit: 10,
    unitTitle: "कथा व अभ्यासः (Reading)",
    title: "Panchatantra Challenge — Level 3",
    subtitle: "Classic fables, verses & comprehension",
    isUpcoming: true
  }
];

// ==========================================================================
// 2. BADGES DEFINITIONS
// ==========================================================================
const BADGES_CONFIG = [
  {
    id: "first_step",
    icon: "🌱",
    title: "First Step",
    desc: "Complete your first Sanskrit lesson.",
    condition: (state) => state.completedLessons.length >= 1
  },
  {
    id: "xp_starter",
    icon: "⚡",
    title: "XP Starter",
    desc: "Earn at least 50 Experience Points (XP).",
    condition: (state) => state.xp >= 50
  },
  {
    id: "perfect_score",
    icon: "🏆",
    title: "Perfect Score",
    desc: "Score 100% on any lesson quiz.",
    condition: (state) => state.hasPerfectScore === true
  },
  {
    id: "word_explorer",
    icon: "📚",
    title: "Word Explorer",
    desc: "Complete Basic Words Level 1 (Everyday Words).",
    condition: (state) => state.completedLessons.includes(1)
  },
  {
    id: "grammar_starter",
    icon: "🧠",
    title: "Grammar Starter",
    desc: "Complete Grammar Basics Level 1.",
    condition: (state) => state.completedLessons.includes(7)
  },
  {
    id: "sanskrit_pandit",
    icon: "👑",
    title: "Sanskrit Pandit",
    desc: "Complete all 9 functional core lessons on the trail!",
    condition: (state) => state.completedLessons.length >= 9
  }
];

// ==========================================================================
// 3. PERSISTENT STATE MANAGEMENT (localStorage)
// ==========================================================================
const STORAGE_KEY = "sanskrit_learner_user_state_v1";

function getDefaultState() {
  return {
    xp: 0,
    level: 1,
    streak: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    completedLessons: [], // list of completed lesson IDs (1-9)
    currentLessonId: 1,   // current unlocked lesson pointer (1-9)
    earnedBadges: [],     // array of badge IDs
    hasPerfectScore: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const data = JSON.parse(raw);
    
    // Check and update streak based on calendar date
    const today = new Date().toISOString().split("T")[0];
    if (data.lastActiveDate !== today) {
      const last = new Date(data.lastActiveDate);
      const cur = new Date(today);
      const diffDays = Math.round((cur - last) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        data.streak = (data.streak || 1) + 1;
      } else if (diffDays > 1) {
        data.streak = 1;
      }
      data.lastActiveDate = today;
      saveState(data);
    }
    return data;
  } catch (err) {
    console.error("Error reading localStorage:", err);
    return getDefaultState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
}

let appState = loadState();

// ==========================================================================
// 4. ACTIVE LESSON RUNTIME STATE
// ==========================================================================
let currentActiveLesson = null;
let currentCardIndex = 0;
let currentQuestionIndex = 0;
let currentQuizScore = 0;
let isAnswered = false;

// ==========================================================================
// 5. DOM ELEMENTS CACHE
// ==========================================================================
const elStreakVal = document.getElementById("streak-val");
const elXpVal = document.getElementById("xp-val");
const elLevelVal = document.getElementById("level-val");
const elOverallProgressBar = document.getElementById("overall-progress-bar");
const elProgressSummary = document.getElementById("progress-summary");
const elLevelTitleTxt = document.getElementById("level-title-txt");
const elXpNeededTxt = document.getElementById("xp-needed-txt");

const elTrailContainer = document.getElementById("trail-container");
const elTrailPathBg = document.getElementById("trail-path-bg");
const elTrailPathFill = document.getElementById("trail-path-fill");

const elLessonModal = document.getElementById("lesson-modal");
const elCloseLessonBtn = document.getElementById("close-lesson-btn");
const elLessonModalCat = document.getElementById("lesson-modal-cat");
const elLessonModalTitle = document.getElementById("lesson-modal-title");
const elLessonStepIndicator = document.getElementById("lesson-step-indicator");
const elModalStepProgress = document.getElementById("modal-step-progress");

// Learn Mode DOM
const elLearnModeView = document.getElementById("learn-mode-view");
const elLearnSanskrit = document.getElementById("learn-sanskrit");
const elLearnHindi = document.getElementById("learn-hindi");
const elLearnEnglish = document.getElementById("learn-english");
const elLearnExplanation = document.getElementById("learn-explanation");
const elNextLearnBtn = document.getElementById("next-learn-btn");

// Test Mode DOM
const elTestModeView = document.getElementById("test-mode-view");
const elTestQuestionCounter = document.getElementById("test-question-counter");
const elTestQuestionText = document.getElementById("test-question-text");
const elTestOptionsContainer = document.getElementById("test-options-container");
const elTestFeedback = document.getElementById("test-feedback");
const elFeedbackIcon = document.getElementById("feedback-icon");
const elFeedbackTitle = document.getElementById("feedback-title");
const elFeedbackDesc = document.getElementById("feedback-desc");
const elNextQuestionBtn = document.getElementById("next-question-btn");

// Complete View DOM
const elCompleteModeView = document.getElementById("complete-mode-view");
const elCompleteScoreVal = document.getElementById("complete-score-val");
const elCompleteXpVal = document.getElementById("complete-xp-val");
const elCompleteAccuracyVal = document.getElementById("complete-accuracy-val");
const elUnlockAlertText = document.getElementById("unlock-alert-text");
const elFinishLessonBtn = document.getElementById("finish-lesson-btn");

// AI Tutor DOM
const elTutorModal = document.getElementById("tutor-modal");
const elOpenTutorBtn = document.getElementById("open-tutor-btn");
const elOpenTutorBannerBtn = document.getElementById("open-tutor-banner-btn");
const elCloseTutorBtn = document.getElementById("close-tutor-btn");
const elTutorChatBody = document.getElementById("tutor-chat-body");
const elTutorInput = document.getElementById("tutor-input");
const elTutorSendBtn = document.getElementById("tutor-send-btn");
const elSuggestionsContainer = document.getElementById("suggestions-container");

// Badges Modal DOM
const elBadgesModal = document.getElementById("badges-modal");
const elOpenBadgesBtn = document.getElementById("open-badges-btn");
const elCloseBadgesBtn = document.getElementById("close-badges-btn");
const elBadgesGrid = document.getElementById("badges-grid");

// Toast Notification DOM
const elToastNotify = document.getElementById("toast-notify");
const elToastIcon = document.getElementById("toast-icon");
const elToastTitle = document.getElementById("toast-title");
const elToastDesc = document.getElementById("toast-desc");

// ==========================================================================
// 6. INITIALIZATION & TRAIL RENDERING (All 30 Lessons across 10 Units)
// ==========================================================================
function initApp() {
  updateStats();
  updateProgress();
  renderTrailNodes();
  
  // Multiple draw triggers to ensure smooth SVG bezier calculations across font load & layout
  setTimeout(drawTrailCurvedPath, 80);
  setTimeout(drawTrailCurvedPath, 350);
  window.addEventListener("load", drawTrailCurvedPath);

  // Setup Event Listeners
  setupEventListeners();

  // Listen to window resize to redraw curved SVG path
  window.addEventListener("resize", debounce(drawTrailCurvedPath, 150));
}

function updateStats() {
  // Level formula: Level 1 at 0-49 XP, Level 2 at 50-99 XP, Level 3 at 100-149 XP...
  const computedLevel = Math.floor(appState.xp / 50) + 1;
  appState.level = computedLevel;

  elStreakVal.textContent = appState.streak;
  elXpVal.textContent = appState.xp;
  elLevelVal.textContent = appState.level;

  // Title rank based on level
  const rankTitles = [
    "जिज्ञासुः (Curious Beginner)",
    "आरम्भकः (Rising Student)",
    "शब्दशिल्पी (Word Crafter)",
    "व्याकरणज्ञः (Grammar Scholar)",
    "विद्वान् (Advanced Scholar)",
    "पण्डितः (Sanskrit Master)"
  ];
  const rankIdx = Math.min(appState.level - 1, rankTitles.length - 1);
  elLevelTitleTxt.textContent = `Level ${appState.level}: ${rankTitles[rankIdx]}`;

  const nextLevelCeil = appState.level * 50;
  const xpNeeded = nextLevelCeil - appState.xp;
  elXpNeededTxt.textContent = `${xpNeeded} XP to Level ${appState.level + 1}`;

  checkAndAwardBadges();
  saveState(appState);
}

function updateProgress() {
  // Progress tracks the genuinely completed functional lessons (out of 9)
  const completedCount = appState.completedLessons.length;
  elProgressSummary.textContent = `${completedCount} / 9 Lessons Completed`;
  const pct = Math.round((completedCount / 9) * 100);
  elOverallProgressBar.style.width = `${pct}%`;
}

// Render all 30 lesson nodes across 10 unit containers
function renderTrailNodes() {
  // Map containers for Units 1 to 10
  const unitWraps = {};
  for (let u = 1; u <= 10; u++) {
    const wrap = document.getElementById(`nodes-unit-${u}`);
    if (wrap) {
      wrap.innerHTML = "";
      unitWraps[u] = wrap;
    }
  }

  // Zigzag pattern sequence: Center, Left, Right
  const positions = ["pos-center", "pos-left", "pos-right"];

  LESSONS_DATA.forEach((lesson, index) => {
    const isCompleted = appState.completedLessons.includes(lesson.id);
    const isCurrent = (lesson.id === appState.currentLessonId);
    const isUpcoming = (lesson.isUpcoming === true);
    const isLocked = !isCompleted && !isCurrent;
    const levelNumber = ((lesson.id - 1) % 3) + 1;

    let stateClass = "state-locked";
    let icon = lesson.icon || "📖";
    let statusText = "Locked (Unlock previous)";
    let badgeText = "LOCKED";

    if (isCompleted) {
      stateClass = "state-completed";
      icon = "⭐";
      statusText = "Completed • Review";
      badgeText = "COMPLETED";
    } else if (isCurrent) {
      stateClass = "state-current";
      icon = "▶️";
      statusText = "Start Lesson";
      badgeText = "UP NEXT";
    } else if (isUpcoming) {
      // Lessons 10–30: Visually consistent, vibrant curriculum lessons matching unit color
      stateClass = `state-curriculum unit-node-${lesson.unit}`;
      icon = lesson.icon || "📖";
      statusText = "Unlock via Trail Progress";
      badgeText = `LEVEL ${levelNumber}`;
    }

    const posClass = positions[index % 3];

    const row = document.createElement("div");
    row.className = `trail-node-row ${posClass}`;
    row.dataset.lessonId = lesson.id;

    row.innerHTML = `
      <div class="node-interactive-wrap">
        <button class="node-circle-btn ${stateClass}" id="node-btn-${lesson.id}" aria-label="Lesson ${lesson.id}: ${lesson.title}">
          <span class="node-icon">${icon}</span>
          <span class="node-number-tag">L${lesson.id}</span>
        </button>

        <div class="node-info-card">
          <span class="node-card-badge">${badgeText}</span>
          <h4 class="node-card-title">${lesson.title}</h4>
          <span class="node-card-status">${statusText}</span>
        </div>
      </div>
    `;

    // Click handler for node button & card
    const btn = row.querySelector(".node-circle-btn");
    const card = row.querySelector(".node-info-card");
    const handleNodeClick = () => {
      if (isUpcoming) {
        showToast("📚 " + lesson.title, "Complete previous levels on the learning trail to unlock this lesson!");
      } else if (isLocked) {
        showToast("🔒 Lesson Locked", "Complete previous lessons to unlock this one!");
      } else {
        startLesson(lesson.id);
      }
    };

    btn.addEventListener("click", handleNodeClick);
    if (card) {
      card.style.cursor = "pointer";
      card.addEventListener("click", handleNodeClick);
    }

    if (unitWraps[lesson.unit]) {
      unitWraps[lesson.unit].appendChild(row);
    }
  });
}

function drawTrailCurvedPath() {
  const container = elTrailContainer;
  const buttons = container.querySelectorAll(".node-circle-btn");
  if (!buttons || buttons.length < 2) return;

  const containerRect = container.getBoundingClientRect();
  const points = [];

  buttons.forEach((btn) => {
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - containerRect.left;
    const y = rect.top + rect.height / 2 - containerRect.top;
    points.push({ x, y });
  });

  if (points.length < 2) return;

  // Build a smooth cubic bezier path connecting every point
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];

    const dy = p1.y - p0.y;
    const cp1x = p0.x;
    const cp1y = p0.y + dy * 0.55;
    const cp2x = p1.x;
    const cp2y = p1.y - dy * 0.55;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }

  elTrailPathBg.setAttribute("d", d);
  elTrailPathFill.setAttribute("d", d);

  // Set the fill progress on the trail based on completed functional lessons
  const totalLength = elTrailPathBg.getTotalLength ? elTrailPathBg.getTotalLength() : 2500;
  const completedCount = appState.completedLessons.length;
  const ratio = Math.min(completedCount / 30, 1);
  
  elTrailPathFill.style.strokeDasharray = `${totalLength}`;
  elTrailPathFill.style.strokeDashoffset = `${totalLength * (1 - ratio)}`;
}

// ==========================================================================
// 7. LESSON RUNTIME & FLOW (LEARN -> TEST -> COMPLETE)
// Operates on the 9 core interactive lessons.
// ==========================================================================

function startLesson(lessonId) {
  const lesson = LESSONS_DATA.find((l) => l.id === lessonId);
  if (!lesson || lesson.isUpcoming || !lesson.learnCards || lesson.id > 9) {
    showToast("📚 " + (lesson ? lesson.title : "Curriculum Lesson"), "Complete previous levels on the learning trail to unlock this lesson!");
    return;
  }

  currentActiveLesson = lesson;
  currentCardIndex = 0;
  currentQuestionIndex = 0;
  currentQuizScore = 0;
  isAnswered = false;

  // Set Modal Headers
  elLessonModalCat.textContent = lesson.unitTitle;
  elLessonModalTitle.textContent = lesson.title;

  // Open modal
  elLessonModal.classList.add("active");
  elLessonModal.setAttribute("aria-hidden", "false");

  // Switch to PART 1: LEARN MODE
  showLearnMode();
}

function showLearnMode() {
  elLearnModeView.style.display = "flex";
  elTestModeView.style.display = "none";
  elCompleteModeView.style.display = "none";

  renderCurrentLearnCard();
}

function renderCurrentLearnCard() {
  const cards = currentActiveLesson.learnCards;
  const card = cards[currentCardIndex];
  const total = cards.length;

  elLessonStepIndicator.textContent = `Learn Card ${currentCardIndex + 1} of ${total}`;
  const pct = Math.round(((currentCardIndex + 1) / total) * 50); // Learn cards represent first 50%
  elModalStepProgress.style.width = `${pct}%`;

  elLearnSanskrit.textContent = card.sanskrit;
  elLearnHindi.textContent = card.hindi;
  elLearnEnglish.textContent = card.english;
  elLearnExplanation.textContent = card.explanation;

  // Change button label on the last card
  if (currentCardIndex === total - 1) {
    elNextLearnBtn.innerHTML = "<span>Start Lesson Test ✍️ →</span>";
  } else {
    elNextLearnBtn.innerHTML = "<span>Next Card →</span>";
  }
}

function nextLearn() {
  const total = currentActiveLesson.learnCards.length;
  if (currentCardIndex < total - 1) {
    currentCardIndex++;
    renderCurrentLearnCard();
  } else {
    // All 5 learn cards completed! Automatically transition to PART 2: TEST MODE
    showTestMode();
  }
}

function showTestMode() {
  elLearnModeView.style.display = "none";
  elTestModeView.style.display = "flex";
  elCompleteModeView.style.display = "none";

  currentQuestionIndex = 0;
  currentQuizScore = 0;
  showQuestion();
}

/**
 * Quiz rendering function strictly following user requirements:
 * 1. Find the options container.
 * 2. Clear old options.
 * 3. Create four option buttons.
 * 4. Put A/B/C/D badges before options.
 * 5. Attach click event to each button.
 * 6. Make sure the correct answer index matches the actual option.
 * 7. Show Next Question button immediately in view without requiring scrolling.
 */
function showQuestion() {
  isAnswered = false;
  elTestFeedback.style.display = "none";
  elNextQuestionBtn.style.display = "none";

  // Anchor scroll to top on each new question
  if (elTestModeView) {
    elTestModeView.scrollTop = 0;
  }

  const questions = currentActiveLesson.quiz;
  const q = questions[currentQuestionIndex];
  const totalQ = questions.length;

  // Progress update (50% + quiz progress)
  elLessonStepIndicator.textContent = `Test: Question ${currentQuestionIndex + 1} of ${totalQ}`;
  const testPct = 50 + Math.round(((currentQuestionIndex + 1) / totalQ) * 50);
  elModalStepProgress.style.width = `${testPct}%`;

  elTestQuestionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQ}`;
  elTestQuestionText.textContent = q.question;

  // 1. Find options container
  const container = elTestOptionsContainer;

  // 2. Clear old options
  container.innerHTML = "";

  const optionLetters = ["A", "B", "C", "D"];

  // 3 & 4. Create four buttons with A, B, C, D labels
  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `
      <span class="option-letter">${optionLetters[idx]}</span>
      <span class="option-text">${optText}</span>
    `;

    // 5. Attach click event to each button
    btn.addEventListener("click", () => {
      checkAnswer(idx, btn);
    });

    container.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, clickedBtn) {
  if (isAnswered) return; // prevent multiple clicks
  isAnswered = true;

  const q = currentActiveLesson.quiz[currentQuestionIndex];
  const buttons = elTestOptionsContainer.querySelectorAll(".option-btn");

  // Disable all options immediately to prevent further clicks
  buttons.forEach((b) => (b.disabled = true));

  const isCorrect = (selectedIndex === q.correctIndex);

  if (isCorrect) {
    clickedBtn.classList.add("correct");
    currentQuizScore++;
    appState.xp += 10; // +10 XP for correct answer
    updateStats();

    elTestFeedback.className = "feedback-banner correct-banner";
    elFeedbackIcon.textContent = "🎉";
    elFeedbackTitle.textContent = "उत्तमम्! Correct Answer! (+10 XP)";
    elFeedbackDesc.textContent = q.explanation || "Well done! Your answer is spot on.";
  } else {
    clickedBtn.classList.add("wrong");
    // Highlight the correct answer
    if (buttons[q.correctIndex]) {
      buttons[q.correctIndex].classList.add("correct");
    }

    elTestFeedback.className = "feedback-banner wrong-banner";
    elFeedbackIcon.textContent = "💡";
    elFeedbackTitle.textContent = "पुनः प्रयत्नं कुरु (Keep Learning!)";
    elFeedbackDesc.textContent = q.explanation || `The correct answer was: ${q.options[q.correctIndex]}`;
  }

  elTestFeedback.style.display = "flex";

  // 7. Show the Next Question button only after an answer is selected
  const isLastQuestion = (currentQuestionIndex === currentActiveLesson.quiz.length - 1);
  if (isLastQuestion) {
    elNextQuestionBtn.innerHTML = "<span>View Lesson Results 🏆 →</span>";
  } else {
    elNextQuestionBtn.innerHTML = "<span>Next Question →</span>";
  }
  elNextQuestionBtn.style.display = "flex";

  // Seamlessly keep Next button visible without requiring manual scroll
  setTimeout(() => {
    if (elNextQuestionBtn && elNextQuestionBtn.style.display !== "none") {
      elNextQuestionBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 20);
}

function nextQuestion() {
  const totalQ = currentActiveLesson.quiz.length;
  if (currentQuestionIndex < totalQ - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    // 5th Question answered -> show lesson results / completion screen
    completeLesson();
  }
}

function completeLesson() {
  elLearnModeView.style.display = "none";
  elTestModeView.style.display = "none";
  elCompleteModeView.style.display = "flex";

  const totalQ = currentActiveLesson.quiz.length;
  const accuracy = Math.round((currentQuizScore / totalQ) * 100);
  const earnedXp = currentQuizScore * 10;

  elCompleteScoreVal.textContent = `${currentQuizScore} / ${totalQ}`;
  elCompleteXpVal.textContent = `+${earnedXp} XP`;
  elCompleteAccuracyVal.textContent = `${accuracy}%`;

  if (accuracy === 100) {
    appState.hasPerfectScore = true;
  }

  // Mark lesson as completed if not already marked
  if (!appState.completedLessons.includes(currentActiveLesson.id)) {
    appState.completedLessons.push(currentActiveLesson.id);
  }

  // Unlock next lesson if available (strictly capped to the 9 core functional lessons)
  const nextId = currentActiveLesson.id + 1;
  if (nextId <= 9) {
    appState.currentLessonId = nextId;
    elUnlockAlertText.textContent = `Lesson ${nextId} is now unlocked on the trail! 🔓`;
  } else {
    elUnlockAlertText.textContent = `🎉 Congratulations! You have completed all 9 core exhibition levels! 👑`;
  }

  updateStats();
  updateProgress();
  renderTrailNodes();
  setTimeout(drawTrailCurvedPath, 100);
}

function closeLesson() {
  elLessonModal.classList.remove("active");
  elLessonModal.setAttribute("aria-hidden", "true");
  currentActiveLesson = null;
}

// ==========================================================================
// 8. AI SANSKRIT TUTOR (DEMO MODE WITH BILINGUAL INTELLIGENCE)
// ==========================================================================

const TUTOR_KNOWLEDGE_BASE = [
  {
    keywords: ["रामः और रामम्", "रामः", "रामम्", "राम और रामम", "ramah", "ramam"],
    response: `<strong>रामः और रामम् में भेद (Difference between रामः and रामम्):</strong><br><br>
• <strong>रामः (Ramah):</strong> यह <strong>प्रथमा विभक्ति, एकवचन</strong> (Nominative Case) है। इसका अर्थ कर्ता (Subject) होता है — यानी <em>"राम ने"</em> या सिर्फ <em>"राम"</em>।<br>
उदाहरण: <em>रामः पठति।</em> (राम पढ़ता है / Rama reads.)<br><br>
• <strong>रामम् (Ramam):</strong> यह <strong>द्वितीया विभक्ति, एकवचन</strong> (Accusative Case) है। इसका अर्थ कर्म (Object) होता है — यानी <em>"राम को"</em>।<br>
उदाहरण: <em>बालकः रामं पश्यति।</em> (लड़का राम को देखता है / The boy sees Rama.)`
  },
  {
    keywords: ["सः और सा", "सः", "सा", "sah", "saa"],
    response: `<strong>सः और सा का अर्थ (Meaning of सः and सा):</strong><br><br>
संस्कृत में दोनों का अर्थ <strong>"वह" (He/She)</strong> होता है, लेकिन लिंग का भेद है:<br><br>
• <strong>सः (Sah):</strong> पुंल्लिङ्ग (Masculine) के लिए उपयोग होता है = <strong>वह (He)</strong>।<br>
उदाहरण: <em>सः बालकः अस्ति।</em> (वह लड़का है / He is a boy.)<br><br>
• <strong>सा (Saa):</strong> स्त्रीलिङ्ग (Feminine) के लिए उपयोग होता है = <strong>वह (She)</strong>।<br>
उदाहरण: <em>सा बालिका अस्ति।</em> (वह लड़की है / She is a girl.)<br><br>
• नपुंसकलिंग (Neuter) के लिए <strong>तत् (Tat)</strong> का प्रयोग होता है (जैसे: तत् फलम् = वह फल / That fruit).`
  },
  {
    keywords: ["पठति और पठामि", "पठति", "पठामि", "pathati", "pathami"],
    response: `<strong>पठति और पठामि में अन्तर (Difference between पठति and पठामि):</strong><br><br>
यह संस्कृत में <strong>पुरुष (Person)</strong> का नियम है:<br><br>
• <strong>पठति (Pathati):</strong> प्रथम पुरुष (Third Person) के साथ आता है (सः/सा/बालकः)।<br>
अर्थ: <em>"वह पढ़ता/पढ़ती है"</em> (He/She reads).<br>
उदाहरण: <em>सः पठति।</em><br><br>
• <strong>पठामि (Pathami):</strong> उत्तम पुरुष (First Person) के साथ आता है (अहम्)।<br>
अर्थ: <em>"मैं पढ़ता हूँ"</em> (I read).<br>
उदाहरण: <em>अहं पठामि।</em><br><br>
(और मध्यम पुरुष 'त्वम्' के साथ <strong>पठसि</strong> आता है: त्वं पठसि = You read.)`
  },
  {
    keywords: ["फलम् शब्द", "फलम् के रूप", "फल के रूप", "phalam"],
    response: `<strong>फलम् शब्द के रूप (नपुंसकलिंग अकारान्त):</strong><br><br>
• <strong>प्रथमा विभक्ति:</strong> फलम् (एक फल) — फले (दो फल) — फलानि (बहुत से फल)<br>
• <strong>द्वितीया विभक्ति:</strong> फलम् — फले — फलानि<br>
• <strong>तृतीया विभक्ति:</strong> फलेन — फलाभ्याम् — फलैः (फल से / द्वारा)<br>
• <strong>चतुर्थी विभक्ति:</strong> फलाय — फलाभ्याम् — फलेभ्यः (फल के लिए)<br>
• <strong>पञ्चमी विभक्ति:</strong> फलात् — फलाभ्याम् — फलेभ्यः (फल से अलग)<br>
• <strong>षष्ठी विभक्ति:</strong> फलस्य — फलयोः — फलानाम् (फल का/की/के)<br>
• <strong>सप्तमी विभक्ति:</strong> फले — फलयोः — फलेषु (फल में/पर)`
  },
  {
    keywords: ["संख्या", "गिनती", "1 से 10", "numbers", "counting"],
    response: `<strong>संस्कृत संख्याएँ १ से १० (Numbers 1 to 10):</strong><br><br>
1 = <strong>एकम् (Ekam)</strong><br>
2 = <strong>द्वे (Dve)</strong><br>
3 = <strong>त्रीणि (Treeni)</strong><br>
4 = <strong>चत्वारि (Chatvaari)</strong><br>
5 = <strong>पञ्च (Pancha)</strong><br>
6 = <strong>षट् (Shat)</strong><br>
7 = <strong>सप्त (Sapta)</strong><br>
8 = <strong>अष्ट (Ashta)</strong><br>
9 = <strong>नव (Nava)</strong><br>
10 = <strong>दश (Dasha)</strong>`
  },
  {
    keywords: ["लट् लकार", "वर्तमान काल", "lat lakar", "present tense"],
    response: `<strong>लट् लकार (Present Tense / वर्तमान काल):</strong><br><br>
जब कोई कार्य वर्तमान समय में हो रहा होता है, तब लट् लकार का प्रयोग करते हैं।<br>
इसके प्रत्यय (Suffixes) याद रखें:<br><br>
• प्रथम पुरुष: <strong>-ति, -तः, -न्ति</strong> (पठति, पठतः, पठन्ति)<br>
• मध्यम पुरुष: <strong>-सि, -थः, -थ</strong> (पठसि, पठथः, पठथ)<br>
• उत्तम पुरुष: <strong>-आमि, -आवः, -आमः</strong> (पठामि, पठावः, पठामः)`
  },
  {
    keywords: ["अहम् और त्वम्", "अहम्", "त्वम्", "aham", "tvam"],
    response: `<strong>अहम् और त्वम् (Aham & Tvam):</strong><br><br>
• <strong>अहम् (Aham):</strong> इसका अर्थ <em>"मैं" (I)</em> होता है। यह उत्तम पुरुष (First Person) है।<br>
उदाहरण: <em>अहं विद्यालयं गच्छामि।</em> (मैं स्कूल जाता हूँ / I go to school.)<br><br>
• <strong>त्वम् (Tvam):</strong> इसका अर्थ <em>"तुम" (You)</em> होता है। यह मध्यम पुरुष (Second Person) है।<br>
उदाहरण: <em>त्वं किं पठसि?</em> (तुम क्या पढ़ रहे हो? / What are you reading?)`
  },
  {
    keywords: ["विभक्ति", "कारक", "cases", "vibhakti"],
    response: `<strong>संस्कृत में ७ विभक्तियाँ (7 Cases in Sanskrit):</strong><br><br>
1. <strong>प्रथमा (Nominative):</strong> कर्ता कारक (ने) — जैसे: बालकः (लड़के ने)<br>
2. <strong>द्वितीया (Accusative):</strong> कर्म कारक (को) — जैसे: बालकम् (लड़के को)<br>
3. <strong>तृतीया (Instrumental):</strong> करण कारक (से / द्वारा) — जैसे: बालकेन (लड़के द्वारा)<br>
4. <strong>चतुर्थी (Dative):</strong> सम्प्रदान कारक (के लिए) — जैसे: बालकाय (लड़के के लिए)<br>
5. <strong>पञ्चमी (Ablative):</strong> अपादान कारक (से अलग) — जैसे: बालकात् (लड़के से)<br>
6. <strong>षष्ठी (Genitive):</strong> सम्बन्ध कारक (का, के, की) — जैसे: बालकस्य (लड़के का)<br>
7. <strong>सप्तमी (Locative):</strong> अधिकरण कारक (में, पर) — जैसे: बालके (लड़के में)`
  }
];

function openAITutor() {
  elTutorModal.classList.add("active");
  elTutorModal.setAttribute("aria-hidden", "false");
  elTutorInput.focus();
}

function closeAITutor() {
  elTutorModal.classList.remove("active");
  elTutorModal.setAttribute("aria-hidden", "true");
}

function askAITutor(userQuery) {
  const query = userQuery || elTutorInput.value.trim();
  if (!query) return;

  // Append user message
  appendChatMessage(query, "user");
  elTutorInput.value = "";

  // Simulate natural AI thinking delay (350ms)
  setTimeout(() => {
    const reply = getAIResponse(query);
    appendChatMessage(reply, "bot");
  }, 350);
}

function appendChatMessage(htmlText, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${sender}-message`;
  
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  msgDiv.innerHTML = `
    <div class="msg-bubble">${htmlText}</div>
    <span class="msg-time">${timeStr}</span>
  `;

  elTutorChatBody.appendChild(msgDiv);
  elTutorChatBody.scrollTop = elTutorChatBody.scrollHeight;
}

function getAIResponse(query) {
  const lower = query.toLowerCase().trim();

  // Search in predefined knowledge base
  for (const item of TUTOR_KNOWLEDGE_BASE) {
    const matched = item.keywords.some((k) => lower.includes(k.toLowerCase()));
    if (matched) {
      return item.response;
    }
  }

  // Smart fallback response in clean Hindi + English
  return `<strong>AI Sanskrit Tutor:</strong><br>
आपका प्रश्न: <em>"${escapeHtml(query)}"</em><br><br>
संस्कृत सीखने का यह एक उत्तम नियम है! कक्षा ९ के पाठ्यक्रम अनुसार:<br>
• संस्कृत में किसी भी वाक्य को समझने के लिए पहले <strong>कर्ता (Subject)</strong> और <strong>क्रिया (Verb)</strong> का सम्बन्ध देखें।<br>
• शब्द रूपों के लिए प्रथमा से सप्तमी तक विभक्तियों का अभ्यास करें (जैसे: रामः, रामम्, रामेण...)।<br>
• लट् लकार (वर्तमान काल) में: <em>सः पठति, त्वं पठसि, अहं पठामि</em>।<br><br>
💡 <em>सुझाव: आप ऊपर दिए गए सुझाव प्रश्नों पर भी क्लिक करके देख सकते हैं!</em>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ==========================================================================
// 9. BADGES & NOTIFICATIONS
// ==========================================================================

function checkAndAwardBadges() {
  BADGES_CONFIG.forEach((badge) => {
    if (!appState.earnedBadges.includes(badge.id)) {
      if (badge.condition(appState)) {
        appState.earnedBadges.push(badge.id);
        saveState(appState);
        showToast(`🏆 Badge Unlocked: ${badge.title}`, badge.desc);
      }
    }
  });
}

function openBadgesModal() {
  renderBadgesGrid();
  elBadgesModal.classList.add("active");
  elBadgesModal.setAttribute("aria-hidden", "false");
}

function closeBadgesModal() {
  elBadgesModal.classList.remove("active");
  elBadgesModal.setAttribute("aria-hidden", "true");
}

function renderBadgesGrid() {
  elBadgesGrid.innerHTML = "";

  BADGES_CONFIG.forEach((badge) => {
    const isUnlocked = appState.earnedBadges.includes(badge.id);
    const card = document.createElement("div");
    card.className = `badge-item-card ${isUnlocked ? "unlocked" : "locked"}`;

    card.innerHTML = `
      <div class="badge-icon-wrap">${badge.icon}</div>
      <div class="badge-details">
        <h5>${badge.title}</h5>
        <p>${badge.desc}</p>
        <span class="badge-status-tag">${isUnlocked ? "✅ Unlocked" : "🔒 In Progress"}</span>
      </div>
    `;

    elBadgesGrid.appendChild(card);
  });
}

let toastTimer = null;
function showToast(title, desc) {
  elToastTitle.textContent = title;
  elToastDesc.textContent = desc;

  elToastNotify.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    elToastNotify.classList.remove("show");
  }, 4000);
}

// ==========================================================================
// 10. EVENT LISTENERS SETUP
// ==========================================================================

function setupEventListeners() {
  // Lesson Modal buttons
  elCloseLessonBtn.addEventListener("click", closeLesson);
  elNextLearnBtn.addEventListener("click", nextLearn);
  elNextQuestionBtn.addEventListener("click", nextQuestion);
  elFinishLessonBtn.addEventListener("click", closeLesson);

  // AI Tutor buttons
  elOpenTutorBtn.addEventListener("click", openAITutor);
  elOpenTutorBannerBtn.addEventListener("click", openAITutor);
  elCloseTutorBtn.addEventListener("click", closeAITutor);
  elTutorSendBtn.addEventListener("click", () => askAITutor());

  elTutorInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      askAITutor();
    }
  });

  // Suggestion chips inside AI Tutor
  elSuggestionsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion-chip")) {
      const questionText = e.target.textContent;
      askAITutor(questionText);
    }
  });

  // Badges Modal
  elOpenBadgesBtn.addEventListener("click", openBadgesModal);
  elCloseBadgesBtn.addEventListener("click", closeBadgesModal);

  // Close modals when clicking backdrop
  [elLessonModal, elTutorModal, elBadgesModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (modal === elLessonModal) currentActiveLesson = null;
      }
    });
  });

  // Close modal on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLesson();
      closeAITutor();
      closeBadgesModal();
    }
  });
}

// Helper debounce function
function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Start app when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initApp);
