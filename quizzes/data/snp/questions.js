var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Should all NHS prescriptions be free?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:1,
      title: "What's your favourite drink?",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:0, text: "Coca Cola" },
        { value:1, text: "Irn Bru" }
      ],
    },
    {
      id:2,
      title: "What do you prefer for breakfast?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:1, text: "Porridge" },
        { value:0, text: "Pancakes" }
      ],
    },
    {
      id:3,
      title: "Offshore wind farms?",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:1, text: "Great idea" },
        { value:0, text: "Looks awful" }
      ],
    },
    {
      id:4,
      title: "Which of these Scottish celebrities do you prefer?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:0, text: "Sir Alex Ferguson" },
        { value:1, text: "Sean Connery" }
      ],
    },
    {
      id:5,
      title: "Should students have to pay tuition fees?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:0, text: "Yes, they should contribute to the costs" },
        { value:1, text: "No, higher education should be free" }
      ],
    },
    {
      id:6,
      title: "What do you think of the Trident nuclear deterrent?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:1, text: "Scrap it, save the money" },
        { value:0, text: "Keep it, make the world safer" }
      ],
    },
    {
      id:7,
      title: "Do you wish Nicola Sturgeon was your mum?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    },
    {
      id:8,
      title: "Who's your favourite\ncomedian?",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:0, text: "Billy Connolly" },
        { value:1, text: "Frankie Boyle" }
      ], 
    },
    {
      id:9,
      title: "Do you want an independent Scotland?",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:1, text: "Of course!" },
        { value:0, text: "Absolutely not" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "Have you even heard of Alex Salmond?", imageUrl: "snp_result_01.jpg", resultClass:"result0" },
    { score:1, text: "Have you even heard of Alex Salmond?", imageUrl: "snp_result_01.jpg", resultClass:"result10" },
    { score:2, text: "Have you even heard of Alex Salmond?", imageUrl: "snp_result_01.jpg", resultClass:"result20" },
    { score:3, text: "You're no fan of Nicola Sturgeon", imageUrl: "snp_result_02.jpg", resultClass:"result30" },
    { score:4, text: "You're no fan of Nicola Sturgeon", imageUrl: "snp_result_03.jpg", resultClass:"result40" },
    { score:5, text: "You're half Nicola Sturgeon, half Gordon Brown", imageUrl: "snp_result_04.jpg", resultClass:"result50" },
    { score:6, text: "You're half Nicola Sturgeon, half Gordon Brown", imageUrl: "snp_result_04.jpg", resultClass:"result60" },
    { score:7, text: "You're pretty keen for an independent Scotland", imageUrl: "snp_result_04.jpg", resultClass:"result70" },
    { score:8, text: "You're pretty keen for an independent Scotland", imageUrl: "snp_result_05.jpg", resultClass:"result80" },
    { score:9, text: "You're as SNP as Salmond and Sturgeon put together", imageUrl: "snp_result_06.jpg", resultClass:"result90" },
    { score:10, text: "You are literally Nicola Sturgeon", imageUrl: "snp_result_07.jpg", resultClass:"result100" }
  ]
}

export default data;