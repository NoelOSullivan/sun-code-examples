var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "How would you\neat a hot dog?",
      imageUrl: 'cameron_01.jpg',
      questions: [
        { value:0, text: "With my hands of course" },
        { value:1, text: "Only with a knife and fork" }
      ],
    },
    {
      id:1,
      title: "Have you ever left your child\nbehind in a pub?",
      imageUrl: 'cameron_02.jpg',
      questions: [
        { value:1, text: "Only the once" },
        { value:0, text: "No, I’m not that kind of parent" }
      ],
    },
    {
      id:2,
      title: "Do you like\nspicy food?",
      imageUrl: 'cameron_03.jpg',
      questions: [
        { value:1, text: "Hotter the better"},
        { value:0, text: "I can’t take the heat" }
      ],
    },
    {
      id:3,
      title: "Do you let your other half choose your clothes?",
      imageUrl: 'cameron_04.jpg',
      questions: [
        { value:0, text: "No, I’m a fashionista"},
        { value:1, text: "Yes, I’m not interested in that sort of thing"}
      ],
    },
    {
      id:4,
      title: "What do you\nthink about\nAston Villa?",
      imageUrl: 'cameron_05.jpg',
      questions: [
        { value:1, text: "Best team going"},
        { value:0, text: "Not a fan of the gilet"}
      ],
    },
    {
      id:5,
      title: "How many\nShredded Wheat\nare enough?",
      imageUrl: 'cameron_06.jpg',
      questions: [
        { value:1, text: "Two"},
        { value:0, text: "Three"}
      ],
    },
    {
      id:6,
      title: "Do you support Right To Buy?",
      imageUrl: 'cameron_07.jpg',
      questions: [
        { value:1, text: "Why wouldn’t I, it’s brilliant"},
        { value:0, text: "No, what a ridiculous idea"}
      ],
    },
    {
      id:7,
      title: "Are you\nrelated to\nKim Kardashian?",
      imageUrl: 'cameron_08.jpg',
      questions: [
        { value:0, text: "No, thankfully"},
        { value:1, text: "Yes, we’re 13th cousins"}
      ],
    },
    {
      id:8,
      title: "Did you go to a public school?",
      imageUrl: 'cameron_09.jpg',
      questions: [
        { value:1, text: "Of course, Eton darling"},
        { value:0, text: "No, it was a state school for me"}
      ],
    },
    {
      id:9,
      title: "Favourite\nGame of Thrones\ncharacter?",
      imageUrl: 'cameron_10.jpg',
      questions: [
        { value:1, text: "It’s all about Ned Stark"},
        { value:0, text: "Tyrion Lannister is the man"}
      ],
    }
  ],

  results: [
    { score:0, text: "Are you Red Ed?", resultClass: "result0" },
    { score:1, text: "Are you Red Ed?", resultClass: "result10" },
    { score:2, text: "You're really not Cameron", resultClass: "result20" },
    { score:3, text: "You're really not Cameron", resultClass: "result30" },
    { score:4, text: "You’re a weak shade of blue", resultClass: "result40" },
    { score:5, text: "You’re about half a Cameron", resultClass: "result50" },
    { score:6, text: "You’re quite a bit Cameron actually", resultClass: "result60" },
    { score:7, text: "You’re quite a bit Cameron actually", resultClass: "result70" },
    { score:8, text: "You're very, very Cameron", resultClass: "result80"},
    { score:9, text: "You're very, very Cameron", resultClass: "result90" },
    { score:10, text: "You’re literally D-Cam", resultClass: "result100" }
  ]
}

export default data;