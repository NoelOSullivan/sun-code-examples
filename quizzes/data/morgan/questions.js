var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "How would you\nfeel about being\nslagged off by\nThe Guardian?",
      imageUrl: 'morgan_01.jpg',
      questions: [
        { value:0, text: "It feels rough – I love that paper and everything it stands for" },
        { value:1, text: "There’s no higher form of praise" }
      ],
    },
    {
      id:1,
      title: "Do you think Kevin Pietersen should  play for the England cricket team again?",
      imageUrl: 'morgan_02.jpg',
      questions: [
        { value:1, text: "Yes, he is a great batsman" },
        { value:0, text: "No, he can't be trusted" }
      ],
    },
    {
      id:2,
      title: "Should US\ngun laws\nbe tightened?",
      imageUrl: 'morgan_03.jpg',
      questions: [
        { value:1, text: "Yes, I have been banging on about it for years" },
        { value:0, text: "No, you need a gun to protect yourself over there" }
      ],
    },
    {
      id:3,
      title: "Are you a fan of Arsenal?",
      imageUrl: 'morgan_04.jpg',
      questions: [
        { value:0, text: "Are you kidding" },
        { value:1, text: "Yes, Gunners all the way" }
      ],
    },
    {
      id:4,
      title: "What’s your\nopinion of\nHugh Grant?",
      imageUrl: 'morgan_05.jpg',
      questions: [
        { value:0, text: "Great bloke, a bit posh like me" },
        { value:1, text: "A tedious little man" }
      ],
    },
    {
      id:5,
      title: "Who has been your arch-enemy since 2003?",
      imageUrl: 'morgan_06.jpg',
      questions: [
        { value:0, text: "My father-in-law" },
        { value:1, text: "Jeremy Clarkson" }
      ],
    },
    {
      id:6,
      title: "Are you a fan of a Twitter spat?",
      imageUrl: 'morgan_07.jpg',
      questions: [
        { value:1, text: "Yes, how bad can it get in just 140 little characters?" },
        { value:0, text: "No, I keep tweets professional" }
      ],
    },
    {
      id:7,
      title: "Do you have\na failed TV show\nunder your belt?",
      imageUrl: 'morgan_08.jpg',
      questions: [
        { value:0, text: "No, I never fail" },
        { value:1, text: "Yep, bit #awks" }
      ],
    },
    {
      id:8,
      title: "Have you ever worked on Streatham and Tooting News?",
      imageUrl: 'morgan_09.jpg',
      questions: [
        { value:1, text: "Look, it was the start of a wonderful career..." },
        { value:0, text: "No" }
      ],
    },
    {
      id:9,
      title: "Do you know what golden handcuffs are?",
      imageUrl: 'morgan_10.jpg',
      questions: [
        { value:1, text: "Yep" },
        { value:0, text: "No, urm, people use them in the bedroom?" }
      ],
    }
  ], 
 
  results: [
    { score:0, text: "You're about as Piers Morgan as Jeremy Clarkson", resultClass:"result0" },
    { score:1, text: "A tiny weeny bit Piersy, old boy", resultClass:"result10" },
    { score:2, text: "Let's hope this 20% is just a shared love of sporting heroes", resultClass:"result20" },
    { score:3, text: "You may consider emigrating at some point in your life", resultClass:"result30" },
    { score:4, text: "If you were actually 40 % Piers Morgan, you'd probably be a bit minted", resultClass:"result40" },
    { score:5, text: "You are half Piers. Have a think about that", resultClass:"result50" },
    { score:6, text: "You've made a few enemies in your life, haven't you?", resultClass:"result60" },
    { score:7, text: "This will be a great conversation starter. Not", resultClass:"result70" },
    { score:8, text: "Bet you were mean about Nicola Sturgeon", resultClass:"result80" },
    { score:9, text: "Toxic levels", resultClass:"result90" },
    { score:10, text: "Pack your bag, and get across the pond you're Piers!", resultClass:"result100" }
  ]
}

export default data;