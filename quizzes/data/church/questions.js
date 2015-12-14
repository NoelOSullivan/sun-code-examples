var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Have you ever\ncalled the Queen an\n“old woman who\nhas no idea\nwhat’s going on”?",
      imageUrl: 'church_01.jpg',
      questions: [
        { value:0, text: "No, I’d never do such a thing" },
        { value:1, text: "Yes, she is isn’t she?" }
      ],
    },
    {
      id:1,
      title: "Did you find fame by singing over the phone on a telly show?",
      imageUrl: 'church_02.jpg',
      questions: [
        { value:0, text: "No, I don’t have the voice of an angel" },
        { value:1, text: "Of course, I’m a child singer" }
      ],
    },
    {
      id:2,
      title: "What are\nyour thoughts\non Wales?",
      imageUrl: 'church_03.jpg',
      questions: [
        { value:1, text: "Best country there is boyo" },
        { value:0, text: "I could take it or leave it" }
      ],
    },
    {
      id:3,
      title: "How many records have you sold?",
      imageUrl: 'church_04.jpg',
      questions: [
        { value:0, text: "None, I’ve a real job" },
        { value:1, text: "Oh, just 10 million" }
      ],
    },
    {
      id:4,
      title: "Have you ever\nspent your wages\ntoo quickly?",
      imageUrl: 'church_05.jpg',
      questions: [
        { value:1, text: "Yes, and I will have to work for the rest of my adult life" },
        { value:0, text: "No, I’ve millions still in the bank" }
      ],
    },
    {
      id:5,
      title: "Would you ever\ncall the Pope\na Nazi?",
      imageUrl: 'church_06.jpg',
      questions: [
        { value:0, text: "No, he’s far from being one of those" },
        { value:1, text: "Yes, but it was only for my TV show" }
      ],
    },
    {
      id:6,
      title: "Ever marched against austerity?",
      imageUrl: 'church_07.jpg',
      questions: [
        { value:1, text: "Yes, I’m a placard waving prosecco socialist" },
        { value:0, text: "No, I’m angelic" }
      ],
    },
    {
      id:7,
      title: "Have you ever\nbeen a bit of\na party animal?",
      imageUrl: 'church_08.jpg',
      questions: [
        { value:0, text: "I’m no binge drinker me" },
        { value:1, text: "I can certainly sink ‘em" }
      ],
    },
    {
      id:8,
      title: "What are your thoughts on a Twitter spat?",
      imageUrl: 'church_09.jpg',
      questions: [
        { value:1, text: "Love one, I’d even challenge someone to a boxing match" },
        { value:0, text: "I’m better than that" }
      ],
    },
    {
      id:9,
      title: "Ever been investigated by HMRC?",
      imageUrl: 'church_10.jpg',
      questions: [
        { value:1, text: "Yes, they’re always asking about my missing millions" },
        { value:0, text: "No, can’t say I have" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "Do you even know where Wales is?", resultClass:"result0" },
    { score:1, text: "Do you even know where Wales is?", resultClass:"result10" },
    { score:2, text: "Do you even know where Wales is?", resultClass:"result20" },
    { score:3, text: "You’ve no voice of an angel", resultClass:"result30" },
    { score:4, text: "You’ve no voice of an angel", resultClass:"result40" },
    { score:5, text: "You’re half way to Church", resultClass:"result50" },
    { score:6, text: "You’re half way to Church", resultClass:"result60" },
    { score:7, text: "You’re more like Charlotte than you think", resultClass:"result70" },
    { score:8, text: "You’re more like Charlotte than you think", resultClass:"result80" },
    { score:9, text: "You must be binge-drinking buddies", resultClass:"result90" },
    { score:10, text: "Are you actually Charlotte Church?", resultClass:"result100" }
  ]
}

export default data;