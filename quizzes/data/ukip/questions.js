var data = {
  questions: [
    {
      id:0,
      title: "Where would you rather holiday?",
      imageUrl: 'ukip_01.jpg',
      questions: [
        { value:1, text: "Cornwall" },
        { value:0, text: "Greece" }
      ],
    },
    {
      id:1,
      title: "The death penalty?",
      imageUrl: 'ukip_02.jpg',
      questions: [
        { value:1, text: "Bring it back" },
        { value:0, text: "It should stay in the past" }
      ],
    },
    {
      id:2,
      title: "Wind farms",
      imageUrl: 'ukip_03.jpg',
      questions: [
        { value:0, text: "Quite nice actually" },
        { value:1, text: "A blot on the landscape" }
      ],
    },
    {
      id:3,
      title: "Pick a beer?",
      imageUrl: 'ukip_04.jpg',
      questions: [
        { value:1, text: "Bombardier" },
        { value:0, text: "Kronenbourg" }
      ],
    },
    {
      id:4,
      title: "Spending on the Armed Forces",
      imageUrl: 'ukip_05.jpg',
      questions: [
        { value:1, text: "It should be protected" },
        { value:0, text: "It could be cut" }
      ],
    },
    {
      id:5,
      title: "Higher taxes on bankers",
      imageUrl: 'ukip_06.jpg',
      questions: [
        { value:1, text: "Bad idea" },
        { value:0, text: "Good idea" }
      ],
    },
    {
      id:6,
      title: "Favourite figure from history:",
      imageUrl: 'ukip_07.jpg',
      questions: [
        { value:0, text: "William Wilberforce" },
        { value:1, text: "Henry V" }
      ],
    },
    {
      id:7,
      title: "Same sex marriage",
      imageUrl: 'ukip_08.jpg',
      questions: [
        { value:1, text: "Don't like it" },
        { value:0, text: "All for it" }
      ],
    },
    {
      id:8,
      title: "European immigration has been a good thing?",
      imageUrl: 'ukip_09.jpg',
      questions: [
        { value:0, text: "Yes, Britain's multiculturalism is great" },
        { value:1, text: "No, shut the borders" }
      ],
    },
    {
      id:9,
      title: "Should we spend more on the NHS?",
      imageUrl: 'ukip_10.jpg',
      questions: [
        { value:1, text: "No, it is not a sacred cow" },
        { value:0, text: "Yes, it should be protected from privatisation" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You're not Ukip at all. Not one bit.", imageUrl: "ukip_result_01.jpg", resultClass:"result0" },
    { score:1, text: "You're barely Ukip at all, are you?", imageUrl: "ukip_result_01.jpg", resultClass:"result10" },
    { score:2, text: "You and Nige would NOT get on.", imageUrl: "ukip_result_01.jpg", resultClass:"result20" },
    { score:3, text: "You're a bit Ukip – but it'll probably come out in the wash", imageUrl: "ukip_result_02.jpg", resultClass:"result30" },
    { score:4, text: "There's a little 'kipper in you waiting to come out", imageUrl: "ukip_result_03.jpg", resultClass:"result40" },
    { score:5, text: "Half Ukip, half not... you're really a bit confused.", imageUrl: "ukip_result_04.jpg", resultClass:"result50" },
    { score:6, text: "You're more Ukip than not. Nige wouldn't mind you.", imageUrl: "ukip_result_04.jpg", resultClass:"result60" },
    { score:7, text: "You're pretty Ukip, but you still like holidaying in Spain", imageUrl: "ukip_result_04.jpg", resultClass:"result70" },
    { score:8, text: "You exclusively wear chinos and tweed, don't you?", imageUrl: "ukip_result_05.jpg", resultClass:"result80" },
    { score:9, text: "Cut you and you bleed purple, and ale.", imageUrl: "ukip_result_06.jpg", resultClass:"result90" },
    { score:10, text: "You're more Ukip than Nige. Unhealthily so.", imageUrl: "ukip_result_07.jpg", resultClass:"result100" }
  ]
}

export default data;