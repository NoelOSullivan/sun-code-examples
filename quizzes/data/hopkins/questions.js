var data = {
  showHeadlines:true,

  questions: [
    {
      id:0,
      title: "Are fat people just lazy?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:1, text: "Yes, anyone can lose weight if they want to" },
        { value:0, text: "No, it’s a medical issue" }
      ],
    },
    {
      id:1,
      title: "Do you like sex outdoors?",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:0, text: "Ooh no, keep it in the bedroom" },
        { value:1, text: "Yes, I like doing it in fields" }
      ],
    },
    {
      id:2,
      title: "What are your\nviews on\nginger babies?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:0, text: "Super cute" },
        { value:1, text: "Much harder to love" }
      ],
    },
    {
      id:3,
      title: "What do you think of breastfeeding in public?",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:1, text: "Unacceptable and inconsiderate" },
        { value:0, text: "Perfectly normal" }
      ],
    },
    {
      id:4,
      title: "Is it better to be loved or despised?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:1, text: "Despised, it’s much more fun" },
        { value:0, text: "Loved, obviously" }
      ],
    },
    {
      id:5,
      title: "Do you like the names Tyler, Chardonnay or Chantelle?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:0, text: "They sound nice" },
        { value:1, text: "Eugh no, they’re horrible" }
      ],
    },
    {
      id:6,
      title: "Should we pay for treatment for alcoholics?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:1, text: "No, let them keep drinking" },
        { value:0, text: "Yes, they need our help" }
      ],
    },
    {
      id:7,
      title: "Should fat people pay more for plane fares?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:0, text: "No, it should be one ticket for one seat" },
        { value:1, text: "Yes, it’s only fair on thin people" }
      ],
    },
    {
      id:8,
      title: "Kelly Osbourne",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:1, text: "A purple-headed dwarf" },
        { value:0, text: "She seems nice" }
      ], 
    },
    {
      id:9,
      title: "People on benefits are just work-shy scroungers",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:0, text: "No, that’s not fair" },
        { value:1, text: "I agree" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You and Katie are nothing alike!", imageUrl: "snp_result_01.jpg", resultClass:"result0" },
    { score:1, text: "You and Katie have little in common", imageUrl: "snp_result_01.jpg", resultClass:"result10" },
    { score:2, text: "You and Katie have little in common", imageUrl: "snp_result_01.jpg", resultClass:"result20" },
    { score:3, text: "You're a little bit Hopkins", imageUrl: "snp_result_02.jpg", resultClass:"result30" },
    { score:4, text: "You're a little bit Hopkins", imageUrl: "snp_result_03.jpg", resultClass:"result40" },
    { score:5, text: "Uh-oh, you're quite a bit Hopkins!", imageUrl: "snp_result_04.jpg", resultClass:"result50" },
    { score:6, text: "Uh-oh, you're quite a bit Hopkins!", imageUrl: "snp_result_04.jpg", resultClass:"result60" },
    { score:7, text: "You and Katie are kindred spirits", imageUrl: "snp_result_04.jpg", resultClass:"result70" },
    { score:8, text: "You and Katie are kindred spirits", imageUrl: "snp_result_05.jpg", resultClass:"result80" },
    { score:9, text: "You basically wish you were Katie", imageUrl: "snp_result_06.jpg", resultClass:"result90" },
    { score:10, text: "You're more Hopkins than Katie herself", imageUrl: "snp_result_07.jpg", resultClass:"result100" }
  ]
}

export default data;