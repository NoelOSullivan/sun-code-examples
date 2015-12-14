var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Is your great-grandmother kind of a big deal?",
      imageUrl: 'baby_01.jpg',
      questions: [
        { value:1, text: "Pretty much" },
        { value:0, text: "Not really" }
      ],
    },
    {
      id:1,
      title: "It’s your first birthday. What do you want to do?",
      imageUrl: 'baby_02.jpg',
      questions: [
        { value:0, text: "Head to the local soft play centre" },
        { value:1, text: "Embark on a 3 week tour of Australia to meet my subjects" }
      ],
    },
    {
      id:2,
      title: "Pick an outfit.",
      imageUrl: 'baby_03.jpg',
      questions: [
        { value:0, text: "Cute romper" },
        { value:1, text: "Edwardian chic" }
      ],
    },
    {
      id:3,
      title: "Did a feisty\nredhead take a\nspecial interest\nin your birth?",
      imageUrl: 'baby_04.jpg',
      questions: [
        { value:1, text: "YES!" },
        { value:0, text: "I don’t know what you’re talking about" }
      ],
    },
    {
      id:4,
      title: "Is your grandad always writing to ministers?",
      imageUrl: 'baby_05.jpg',
      questions: [
        { value:1, text: "He’s pretty political" },
        { value:0, text: "Not really" }
      ],
    },
    {
      id:5,
      title: "Did your parents\nmeet at university?",
      imageUrl: 'baby_06.jpg',
      questions: [
        { value:1, text: "Yes, it was young love" },
        { value:0, text: "Nope" }
      ],
    },
    {
      id:6,
      title: "Who was there\nwhen you were born?",
      imageUrl: 'baby_07.jpg',
      questions: [
        { value:0, text: "Dad and a couple of grandparents" },
        { value:1, text: "The world’s media assembled" }
      ],
    },
    {
      id:7,
      title: "Is your mum hot stuff?",
      imageUrl: 'baby_08.jpg',
      questions: [
        { value:1, text: "She’s one foxy mama" },
        { value:0, text: "Oh please" }
      ],
    },
    {
      id:8,
      title: "Would every politician love to be photographed with you?",
      imageUrl: 'baby_09.jpg',
      questions: [
        { value:0, text: "They couldn’t care less" },
        { value:1, text: "Damn straight, I’m a vote winner" }
      ],
    },
    {
      id:9,
      title: "What’s your favourite toy?",
      imageUrl: 'baby_10.jpg',
      questions: [
        { value:0, text: "My teddy bear" },
        { value:1, text: "Just some stuff sent in by heads of state" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "We’ll give you a royal pardon this time", resultClass:"result0" },
    { score:1, text: "We’ll give you a royal pardon this time", resultClass:"result10" },
    { score:2, text: "You’re more Royle than royal", resultClass:"result20" },
    { score:3, text: "You’re more Royle than royal", resultClass:"result30" },
    { score:4, text: "There’s no blue in your blood", resultClass:"result40" },
    { score:5, text: "There’s no blue in your blood", resultClass:"result50" },
    { score:6, text: "By George, you’ve almost got it", resultClass:"result60" },
    { score:7, text: "A score fit for a prince or princess", resultClass:"result70" },
    { score:8, text: "A score fit for a prince or princess", resultClass:"result80" },
    { score:9, text: "You’re v regal – do you live in a palace?", resultClass:"result90" },
    { score:10, text: "Welcome to the world, your royal highness", resultClass:"result100" }
  ]
}

export default data;