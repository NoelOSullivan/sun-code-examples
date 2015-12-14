var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Were you the victim of a “grubby” plot by colleagues to push you out of your job?",
      imageUrl: 'bercow_01.jpg',
      questions: [
        { value:0, text: "No, that sounds unpleasant though" },
        { value:1, text: "Yes, and they didn’t succeed" }
      ],
    },
    {
      id:1,
      title: "Have you helped\nto introduce a\nnursery at your\nplace of work?",
      imageUrl: 'bercow_02.jpg',
      questions: [
        { value:1, text: "Yes, it was one of my pet projects" },
        { value:0, text: "No" }
      ],
    },
    {
      id:2,
      title: "Do you live\nrent and\nmortgage free?",
      imageUrl: 'bercow_03.jpg',
      questions: [
        { value:0, text: "I wish" },
        { value:1, text: "It is called grace and favour, my friend" }
      ],
    },
    {
      id:3,
      title: "Has your wife\nhad an affair\nwith your cousin?",
      imageUrl: 'bercow_04.jpg',
      questions: [
        { value:1, text: "This is both raw and awkward" },
        { value:0, text: "No" }
      ],
    },
    {
      id:4,
      title: "Do people take the mickey out of your height?",
      imageUrl: 'bercow_05.jpg',
      questions: [
        { value:0, text: "No, never" },
        { value:1, text: "Yes, and I think it is on a par to racism" }
      ],
    },
    {
      id:5,
      title: "Was your dad\na taxi driver?",
      imageUrl: 'bercow_06.jpg',
      questions: [
        { value:1, text: "He was, and look how far I’ve come" },
        { value:0, text: "Papa? A taxi driver? Good grief, no" }
      ],
    },
    {
      id:6,
      title: "Do you have your own coat of arms?",
      imageUrl: 'bercow_07.jpg',
      questions: [
        { value:0, text: "No, that's mental" },
        { value:1, text: "I do, and they are beautiful" }
      ],
    },
    {
      id:7,
      title: "When you moved into your current property did it get a free refurb?",
      imageUrl: 'bercow_08.jpg',
      questions: [
        { value:1, text: "Well, look, the TV wasn’t big enough…" },
        { value:0, text: "What, do you live in la-la land?" }
      ],
    },
    {
      id:8,
      title: "Have you ever been accused of a cover-up?",
      imageUrl: 'bercow_09.jpg',
      questions: [
        { value:0, text: "Not at all, my life isn’t a political thriller" },
        { value:1, text: "Are you bringing up those dastardly expenses?" }
      ],
    },
    {
      id:9,
      title: "Are you like Marmite?",
      imageUrl: 'bercow_10.jpg',
      questions: [
        { value:0, text: "You hate me?" },
        { value:1, text: "You love me?" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You are probably tall, quiet and have stable home life", resultClass:"result0" },
    { score:1, text: "You are probably tall, quiet and have stable home life", resultClass:"result10" },
    { score:2, text: "You have a bit of Bercow in there", resultClass:"result20" },
    { score:3, text: "You have a bit of Bercow in there", resultClass:"result30" },
    { score:4, text: "You are veering into Bercow territory", resultClass:"result40" },
    { score:5, text: "You are veering into Bercow territory", resultClass:"result50" },
    { score:6, text: "Order, Order! There he is!", resultClass:"result60" },
    { score:7, text: "Order, Order! There he is!", resultClass:"result70" },
    { score:8, text: "Order, Order! Bercow’s got a double", resultClass:"result80" },
    { score:9, text: "Are you small and living somewhere for free?", resultClass:"result90" },
    { score:10, text: "Hope things are going OK at home, buddy", resultClass:"result100" }
  ]
}

export default data;