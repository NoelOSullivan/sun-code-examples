var data = {
  questions: [
    {
      id:0,
      title: "Higher taxes on the rich are needed",
      imageUrl: 'labour_01.jpg',
      questions: [
        { value:1, text: "Yes, those at the top should contribute more" },
        { value:0, text: "No, that could damage the economy" }
      ],
    },
    {
      id:1,
      title: "More needs to be done about the housing crisis?",
      imageUrl: 'labour_02.jpg',
      questions: [
        { value:0, text: "No, let the market do its things" },
        { value:1, text: "Yes, rent control needs to be put in place" }
      ],
    },
    {
      id:2,
      title: "Favourite figure from history?",
      imageUrl: 'labour_03.jpg',
      questions: [
        { value:1, text: "JFK" },
        { value:0, text: "Ronald Reagan" }
      ],
    },
    {
      id:3,
      title: "NHS spending should be increased",
      imageUrl: 'labour_04.jpg',
      questions: [
        { value:1, text: "Yes, it should be protected at all costs" },
        { value:0, text: "No, it is not a sacred cow" }
      ],
    },
    {
      id:4,
      title: "Pick a TV show:",
      imageUrl: 'labour_05.jpg',
      questions: [
        { value:1, text: "House of Cards" },
        { value:0, text: "Downton Abbey" }
      ],
    },
    {
      id:5,
      title: "Have the Coalition has made a good fist of it the last five years?",
      imageUrl: 'labour_06.jpg',
      questions: [
        { value:1, text: "No" },
        { value:0, text: "Yes" }
      ],
    },
    {
      id:6,
      title: "We should get rid of the bedroom tax",
      imageUrl: 'labour_07.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:7,
      title: "Should the pension age be raised?",
      imageUrl: 'labour_08.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:8,
      title: "What's your opinion on unions?",
      imageUrl: 'labour_09.jpg',
      questions: [
        { value:0, text: "Outdated and stopping progress" },
        { value:1, text: "An integral part of democracy" }
      ],
    },
    {
      id:9,
      title: "Coldplay or Kasabian?",
      imageUrl: 'labour_10.jpg',
      questions: [
        { value:1, text: "Coldplay" },
        { value:0, text: "Kasabian" }
      ],
    }
  ],

  results: [
    { score:0, text: "Crikey you're a bit right-wing", imageUrl:"libDem_result_01.jpg", resultClass: "result0" },
    { score:1, text: "Is that you David Cameron?", imageUrl:"libDem_result_01.jpg", resultClass: "result10" },
    { score:2, text: "You're clearly more of a Farage fan", imageUrl:"libDem_result_02.jpg", resultClass: "result20" },
    { score:3, text: "You're as lukewarm on Labour as the country in general", imageUrl:"libDem_result_02.jpg", resultClass: "result30" },
    { score:4, text: "You're clearly not too enamoured with the two Eds", imageUrl:"libDem_result_03.jpg", resultClass: "result40" },
    { score:5, text: "You're sitting right in the centre (left)", imageUrl:"libDem_result_03.jpg", resultClass: "result50" },
    { score:6, text: "Leaning to the left slightly – you should get that seen to", imageUrl:"libDem_result_04.jpg", resultClass: "result60" },
    { score:7, text: "More David than Ed but Labour through and through", imageUrl:"libDem_result_05.jpg", resultClass: "result70" },
    { score:8, text: "You're Clearly a card-carrying Labour member", imageUrl:"libDem_result_05.jpg", resultClass: "result80" },
    { score:9, text: "You're all aboard the pink bus", imageUrl:"libDem_result_06.jpg", resultClass: "result90" },
    { score:10, text: "You're more red than Ed and Ed put together", imageUrl:"libDem_result_07.jpg", resultClass: "result100" }
  ]
}

export default data;