var data = {
  showHeadlines:true,

  questions: [
    {
      id:0,
      title: "Do you\ncycle much?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:1, text: "Everywhere!" },
        { value:0, text: "Barely at all, actually" }
      ],
    },
    {
      id:1,
      title: "What are your thoughts on Ed Miliband?",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:0, text: "Smashing bloke" },
        { value:1, text: "Cowardy custard" }
      ],
    },
    {
      id:2,
      title: "Blair to rescue Mili?\nNon tali auxilio nec defensoribus istis",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:1, text: "Exactly!" },
        { value:0, text: "Total nonsense" }
      ],
    },
    {
      id:3,
      title: "Would you like to\nbe PM one day?",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:1, text: "Well, if the ball came loose\nfrom the back of a scrum..." },
        { value:0, text: "No" }
      ],
    },
    {
      id:4,
      title: "What's your view\nof Portsmouth?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:0, text: "Beautiful maritime city" },
        { value:1, text: "Too full of drugs, obesity, underachievement and Labour MPs" }
      ],
    },
    {
      id:5,
      title: "Fat people...?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:1, text: "Face it: it's all your own fat fault" },
        { value:0, text: "You're victims of an affliction" }
      ],
    },
    {
      id:6,
      title: "Speed limits",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:0, text: "Very important indeed" },
        { value:1, text: "No one obeys them except motorised rickshaws" }
      ],
    },
    {
      id:7,
      title: "Game of tennis?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:1, text: "I love tennis\nwith a passion" },
        { value:0, text: "World's most\nmonotonous sport" }
      ],
    },
    {
      id:8,
      title: "What's your take\non the EU?",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:1, text: "Quit the EU if renegotiations don't work" },
        { value:0, text: "Stay in regardless" }
      ], 
    },
    {
      id:9,
      title: "Voting Tory will...",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:0, text: "Never end well" },
        { value:1, text: "Cause your wife to have bigger breasts" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You're not Boris at all", resultClass:"result0" },
    { score:1, text: "You're barely Boris", resultClass:"result10" },
    { score:2, text: "You're barely Boris", resultClass:"result20" },
    { score:3, text: "You're a bit Boris. Just the hair maybe?", resultClass:"result30" },
    { score:4, text: "You're a bit Boris. Just the hair maybe?", resultClass:"result40" },
    { score:5, text: "You're about half Boris", resultClass:"result50" },
    { score:6, text: "You're a fair bit Boris", resultClass:"result60" },
    { score:7, text: "You're a fair bit Boris", resultClass:"result70" },
    { score:8, text: "You're very, very Boris, aren't you? ", resultClass:"result80" },
    { score:9, text: "You're very, very Boris, aren't you? ", resultClass:"result90" },
    { score:10, text: "You are literally Boris", resultClass:"result100" }
  ]
}

export default data;