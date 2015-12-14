var data = {
  questions: [
    {
      id:0,
      title: "What do you think of cyclists?",
      imageUrl: 'green_01.jpg',
      questions: [
        { value:1, text: "I am one" },
        { value:0, text: "Don't care for them" }
      ],
    },
    {
      id:1,
      title: "How is 'quinoa' pronounced?",
      imageUrl: 'green_02.jpg',
      questions: [
        { value:0, text: "Kwin-oh-ah" },
        { value:1, text: "Keen-wah" }
      ],
    },
    {
      id:2,
      title: "The railways should be re-nationalised",
      imageUrl: 'green_03.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:3,
      title: "Wind farms are _____",
      imageUrl: 'green_04.jpg',
      questions: [
        { value:1, text: "Awesome" },
        { value:0, text: "Awful" }
      ],
    },
    {
      id:4,
      title: "There should be massive tax hikes for the rich",
      imageUrl: 'green_05.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:5,
      title: "Our nuclear weapons should be scrapped",
      imageUrl: 'green_06.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    },
    {
      id:6,
      title: "The license fee for the BBC should be abolished",
      imageUrl: 'green_07.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:7,
      title: "Have you ever been to Brighton?",
      imageUrl: 'green_08.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:8,
      title: "We should vastly reduce the prison population",
      imageUrl: 'green_09.jpg',
      questions: [
        { value:0, text: "No, we're too soft on crime" },
        { value:1, text: "Yes, we lock up far too many people" }
      ],
    },
    {
      id:9,
      title: "Cannabis should be decriminalised",
      imageUrl: 'green_10.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    }
  ],

  results: [
    { score:0, text: "You hate polar bears", imageUrl: "green_result_01.jpg", resultClass: "result0" },
    { score:1, text: "You're basically Clarkson", imageUrl: "green_result_01.jpg", resultClass: "result10" },
    { score:2, text: "You must hate An Inconvenient Truth", imageUrl: "green_result_02.jpg", resultClass: "result20" },
    { score:3, text: "You think the environment can look after itself", imageUrl: "green_result_03.jpg", resultClass: "result30" },
    { score:4, text: "You're not very  good at recycling", imageUrl: "green_result_03.jpg", resultClass: "result40" },
    { score:5, text: "You like the outdoors – but not that much", imageUrl: "green_result_04.jpg", resultClass: "result50" },
    { score:6, text: "You're a secret Natalie Bennett fan", imageUrl: "green_result_04.jpg", resultClass: "result60" },
    { score:7, text: "You definitely compost", imageUrl: "green_result_05.jpg", resultClass: "result70" },
    { score:8, text: "You probably generate your own electricity", imageUrl: "green_result_05.jpg", resultClass: "result80" },
    { score:9, text: "Greener than the Jolly Green Giant", imageUrl: "green_result_06.jpg", resultClass: "result90" },
    { score:10, text: "A certifiable eco-warrior", imageUrl: "green_result_07.jpg", resultClass: "result100" },
  ]
};

export default data;