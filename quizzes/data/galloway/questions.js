var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "You lose a general\nelection by an\n11,000 majority\n– do you?",
      imageUrl: 'gall_01.jpg',
      questions: [
        { value:1, text: "Start legal proceedings" },
        { value:0, text: "Bow out gracefully" }
      ],
    },
    {
      id:1,
      title: "Would you ever publicly praise Saddam Hussain?",
      imageUrl: 'gall_02.jpg',
      questions: [
        { value:0, text: "Are you kidding, have you seen his track record?" },
        { value:1, text: "Yes, I salute him for his courage" }
      ],
    },
    {
      id:2,
      title: "Have you ever been expelled from the Labour Party?",
      imageUrl: 'gall_03.jpg',
      questions: [
        { value:1, text: "It was one of my finest moments" },
        { value:0, text: "Breaking the rules isn’t my thing" }
      ],
    },
    {
      id:3,
      title: "Ever been banned from entering a country?",
      imageUrl: 'gall_04.jpg',
      questions: [
        { value:0, text: "Can’t say I’m a national security risk" },
        { value:1, text: "Who hasn’t?" }
      ],
    },
    {
      id:4,
      title: "Have you ever declared Bradford an Israel-free zone?",
      imageUrl: 'gall_05.jpg',
      questions: [
        { value:1, text: "I’ve been interviewed by the police over it" },
        { value:0, text: "Erm, no" }
      ],
    },
    {
      id:5,
      title: "Would you ever pretend to be a cat on television?",
      imageUrl: 'gall_06.jpg',
      questions: [
        { value:0, text: "No, I have respect for myself" },
        { value:1, text: "Yes, and I purred away" }
      ],
    },
    {
      id:6,
      title: "Was the collapse of the Soviet Union a tragedy?",
      imageUrl: 'gall_07.jpg',
      questions: [
        { value:1, text: "Absolutely, it was a huge loss" },
        { value:0, text: "In a word, no" }
      ],
    },
    {
      id:7,
      title: "Have you tweeted\nan exit poll\nbefore voting\nhad finished?",
      imageUrl: 'gall_08.jpg',
      questions: [
        { value:0, text: "No, I’m not an idiot" },
        { value:1, text: "Yes, I’m Mystic Meg" }
      ],
    },
    {
      id:8,
      title: "Ever been attacked with a rubber stress ball?",
      imageUrl: 'gall_09.jpg',
      questions: [
        { value:1, text: "I often take a pelting" },
        { value:0, text: "No, people just don’t hate me that much" }
      ],
    },
    {
      id:9,
      title: "Do you have ambitions to stand as Mayor of London?",
      imageUrl: 'gall_10.jpg',
      questions: [
        { value:1, text: "Yes, I lost my last election" },
        { value:0, text: "No, I’m not that deluded" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You have respect, you’re not George Galloway", resultClass:"result0" },
    { score:1, text: "You have respect, you’re not George Galloway", resultClass:"result10" },
    { score:2, text: "You have respect, you’re not George Galloway", resultClass:"result20" },
    { score:3, text: "You’re more George than you’d like to admit", resultClass:"result30" },
    { score:4, text: "You’re more George than you’d like to admit", resultClass:"result40" },
    { score:5, text: "You’re on a slippery slope to Galloway", resultClass:"result50" },
    { score:6, text: "You’re on a slippery slope to Galloway", resultClass:"result60" },
    { score:7, text: "You’re on a slippery slope to Galloway", resultClass:"result70" },
    { score:8, text: "You’re on a slippery slope to Galloway", resultClass:"result80" },
    { score:9, text: "Are you the man himself?", resultClass:"result90" },
    { score:10, text: "Are you the man himself?", resultClass:"result100" }
  ]
}

export default data;