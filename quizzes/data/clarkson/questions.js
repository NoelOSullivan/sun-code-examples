var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "How’s\nyour\ntemper?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:0, text: "I’m quite a placid person"},
        { value:1, text: "BRING ME A STEAK. NOW!!!"}
      ],
    },
    {
      id:1,
      title: "Does spending time with smaller people make you feel more important?",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:1, text: "Yes, it makes me feel like a giant"},
        { value:0, text: "Size doesn’t matter"}
      ],
    },
    {
      id:2,
      title: "Should people be allowed to smoke\nin public places?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:0, text: "No, it’s a horrible habit"},
        { value:1, text: "Yes, the ban is a national disgrace"}
      ],
    },
    {
      id:3,
      title: "Thoughts\non denim?",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:1, text: "It’s the only material for me" },
        { value:0, text: "I’m not bothered" }
      ],
    },
    {
      id:4,
      title: "Would you\never get…\na caravan?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:1, text: "God no, they should be banned from the road" },
        { value:0, text: "Yes, they’re fun and roomy" }
      ],
    },
    {
      id:5,
      title: "What do you think of the 70mph speeding limit on motorways?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:0, text: "Sensible" },
        { value:1, text: "Ridiculous - it’s a Bronze Age Law" }
      ],
    },
    {
      id:6,
      title: "How often are you\nin trouble with HR?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:0, text: "Never" },
        { value:1, text: "Erm, quite often" }
      ],
    },
    {
      id:7,
      title: "Do you have a mysterious friend?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:1, text: "Yes, but I can’t reveal his identity" },
        { value:0, text: "What? No." }
      ],
    },
    {
      id:8,
      title: "Would you like\nto punch\nPiers Morgan?",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:1, text: "Right in the kisser" },
        { value:0, text: "Violence is never the answer" }
      ], 
    },
    {
      id:9,
      title: "Do you believe in climate change?",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:0, text: "Yes" },
        { value:1, text: "It’s science fiction" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "Is your name Oisin Tymon?", resultClass:"result0" },
    { score:1, text: "Is your name Oisin Tymon?", resultClass:"result10" },
    { score:2, text: "Can you even drive?", resultClass:"result20" },
    { score:3, text: "Can you even drive?", resultClass:"result30" },
    { score:4, text: "Not bad, but you’re more like Hammond", resultClass:"result40" },
    { score:5, text: "Not bad, but you’re more like Hammond", resultClass:"result50" },
    { score:6, text: "You wouldn’t be seen dead in a Renault Clio", resultClass:"result60" },
    { score:7, text: "You know how to stir up controversy", resultClass:"result70" },
    { score:8, text: "You know how to stir up controversy", resultClass:"result80" },
    { score:9, text: "You're only a leather jacket away from true Clarkson form ", resultClass:"result90" },
    { score:10, text: "You’re in Top Gear!", resultClass:"result100" }
  ]
}

export default data;