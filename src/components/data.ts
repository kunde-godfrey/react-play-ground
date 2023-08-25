const questions = [
    {
        id: 1,
        body: "How How often do you clean your teeth?",
        answers: [
          { id: 1, title: "A", content: "Twice a day or more", score: 0 },
          { id: 2, title: "B", content: "Once a day", score: 1 },
          { id: 3, title: "C", content: "Less than once a day", score: 2 },
          { id: 4, title: "D", content: "Never", score: 3 },
        ],
      },
      {
        id: 2,
        body: "How often do you use dental floss or an interdental brush?",
        answers: [
          { id: 1, title: "A", content: "Every day or almost every day", score: 0 },
          { id: 2, title: "B", content: "Sometimes", score: 1 },
          { id: 3, title: "C", content: "Rarely", score: 2 },
          { id: 4, title: "D", content: "Never", score: 3 },
        ],
      },
      {
        id: 3,
        body: "Do your gums ever bleed when you clean your teeth?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, ccasionally", score: 1 },
          { id: 3, title: "C", content: "Yes, often", score: 2 },
          { id: 4, title: "D", content: "Yes, always", score: 3 },
        ],
      },
      {
        id: 4,
        body: "Have you ever had gum disease?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, but it has been treated", score: 1 },
          { id: 3, title: "C", content: "Yes, and it has not been treated", score: 2 },
          { id: 4, title: "D", content: "I don't know", score: 3 },
        ],
      },
      {
        id: 5,
        body: "Have you ever had a toothache?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, but not in the last 6 months", score: 1 },
          { id: 3, title: "C", content: "Yes, in the last 6 months", score: 2 },
          { id: 4, title: "D", content: "Yes, currently", score: 3 },
        ],
      },
      {
        id: 6,
        body: "Have you ever lost a tooth because of decay or gum disease?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, but it has been replaced", score: 1 },
          { id: 3, title: "C", content: "Yes, and it has not been replaced", score: 2 },
          { id: 4, title: "D", content: "I don't know", score: 3 },
        ],
      },
      
      {
        id: 7,
        body: "Have you ever had a filling or crown?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, but not in the last 5 years", score: 1 },
          { id: 3, title: "C", content: "Yes, in the last 5 years", score: 2 },
          { id: 4, title: "D", content: "Yes, and it needs to be replaced", score: 3 },
        ],
      },
      {
        id: 8,
        body: "Have you ever had dentures or partial dentures?",
        answers: [
          { id: 1, title: "A", content: "No", score: 0 },
          { id: 2, title: "B", content: "Yes, but not currently", score: 1 },
          { id: 3, title: "C", content: "Yes, and I wear them regularly", score: 2 },
          { id: 4, title: "D", content: "Yes, but I don't wear them regularly", score: 3 },
        ],
      },
      {
        id: 9,
        body: "Are your dentures or partial dentures comfortable?",
        answers: [
          { id: 1, title: "A", content: "Yes, always", score: 0 },
          { id: 2, title: "B", content: "Yes, sometimes", score: 1 },
          { id: 3, title: "C", content: "No, but I can still wear them", score: 2 },
          { id: 4, title: "D", content: "No, and I can't wear them", score: 3 },
        ],
      },
      {
        id: 10,
        body: "How often do you visit a dentist or dental hygienist for a check-up or cleaning?",
        answers: [
          { id: 1, title: "A", content: "Every 6 months or less", score: 0 },
          { id: 2, title: "B", content: "Every 7-12 months", score: 1 },
          { id: 3, title: "C", content: "Every 13-24 months", score: 2 },
          { id: 4, title: "D", content: "More than 2 years ago or never", score: 3 },
        ],
      },
      {
        id: 11,
        body: "How often do you have a dry mouth?",
        answers: [
          { id: 1, title: "A", content: "Never or almost never", score: 0 },
          { id: 2, title: "B", content: "Sometimes", score: 1 },
          { id: 3, title: "C", content: "Often", score: 2 },
          { id: 4, title: "D", content: "Always", score: 3 },
        ],
      },
      {
        id: 12,
        body: "How often do you have pain or discomfort in your mouth, face, or jaw?",
        answers: [
          { id: 1, title: "A", content: "Never or almost never", score: 0 },
          { id: 2, title: "B", content: "Sometimes", score: 1 },
          { id: 3, title: "C", content: "Often", score: 2 },
          { id: 4, title: "D", content: "Always", score: 3 },
        ],
      },
      {
        id: 13,
        body: "How often do you have difficulty eating because of problems with your mouth or teeth?",
        answers: [
          { id: 1, title: "A", content: "Never or almost never", score: 0 },
          { id: 2, title: "B", content: "Sometimes", score: 1 },
          { id: 3, title: "C", content: "Often", score: 2 },
          { id: 4, title: "D", content: "Every time I eat", score: 3 },
        ],
      },

];

const total = questions.reduce((acc, question) => question.answers[3].score + acc, 0)

export {questions, total};
