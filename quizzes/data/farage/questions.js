var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Are you a big fan of tweed?",
      imageUrl: 'farage_01.jpg',
      questions: [
        { value:1, text: "What else is there to wear" },
        { value:0, text: "No, I wouldn’t be seen dead in it" }
      ],
    },
    {
      id:1,
      title: "What are your thoughts on John Lennon’s song, Imagine?",
      imageUrl: 'farage_02.jpg',
      questions: [
        { value:0, text: "I love it" },
        { value:1, text: "What a load of trash" }
      ],
    },
    {
      id:2,
      title: "Have you ever been hit by a car while drunk?",
      imageUrl: 'farage_03.jpg',
      questions: [
        { value:0, text: "Can’t say I have" },
        { value:1, text: "Yes, but I barely remember it" }
      ],
    },
    {
      id:3,
      title: "What are your thoughts on smoking?",
      imageUrl: 'farage_04.jpg',
      questions: [
        { value:1, text: "I’m like a chimney" },
        { value:0, text: "What an awful habit" }
      ],
    },
    {
      id:4,
      title: "Are you a self-confessed boozer?",
      imageUrl: 'farage_05.jpg',
      questions: [
        { value:1, text: "Yes, pass me a pint" },
        { value:0, text: "No, I’m tee-total" }
      ],
    },
    {
      id:5,
      title: "Your views on wind farms…",
      imageUrl: 'farage_06.jpg',
      questions: [
        { value:1, text: "I personally want to blow them up" },
        { value:0, text: "They’re beautiful" }
      ],
    },
    {
      id:6,
      title: "Have you ever survived a plane crash?",
      imageUrl: 'farage_07.jpg',
      questions: [
        { value:1, text: "Yes, it’s a great tale to tell at the pub" },
        { value:0, text: "No, who is even that lucky" }
      ],
    },
    {
      id:7,
      title: "Do you think you look like a frog?",
      imageUrl: 'farage_08.jpg',
      questions: [
        { value:1, text: "Yes, the resemblance is uncanny" },
        { value:0, text: "Can’t see it myself" }
      ],
    },
    {
      id:8,
      title: "Are immigrants to blame for traffic jams?",
      imageUrl: 'farage_09.jpg',
      questions: [
        { value:1, text: "Yes, it’s all their fault" },
        { value:0, text: "No, let’s be serious" }
      ],
    },
    {
      id:9,
      title: "Who is your favourite world leader?",
      imageUrl: 'farage_10.jpg',
      questions: [
        { value:1, text: "Putin’s my man" },
        { value:0, text: "I’m in Obama’s corner" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You’re definitely no fan of Nigel", resultClass:"result0" },
    { score:1, text: "You’re definitely no fan of Nigel", resultClass:"result10" },
    { score:2, text: "You’re definitely no fan of Nigel", resultClass:"result20" },
    { score:3, text: "You’re a lukewarm Farage", resultClass:"result30" },
    { score:4, text: "You’re a lukewarm Farage", resultClass:"result40" },
    { score:5, text: "You’re on the fence of Farage", resultClass:"result50" },
    { score:6, text: "You’re on the fence of Farage", resultClass:"result60" },
    { score:7, text: "You’re more like Nigel than you realise", resultClass:"result70" },
    { score:8, text: "You’re more like Nigel than you realise", resultClass:"result80" },
    { score:9, text: "Are you two drinking partners?", resultClass:"result90" },
    { score:10, text: "You’re more kipper than Farage himself", resultClass:"result100" }
  ]
}

export default data;