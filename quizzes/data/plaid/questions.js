var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Should the Welsh Assembly have more powers?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    },
    {
      id:1,
      title: "Leeks",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:1, text: "Best vegetable around" },
        { value:0, text: "No thanks" }
      ],
    },
    {
      id:2,
      title: "Should plastic bags be free?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:0, text: "Yes" },
        { value:1, text: "No" }
      ],
    },
    {
      id:3,
      title: "The bedroom tax...",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:0, text: "Keep it" },
        { value:1, text: "Scrap it" }
      ],
    },
    {
      id:4,
      title: "Ydych chi'n deall hwn?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:5,
      title: "Does the Welsh NHS need more doctors?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:1, text: "Yes, of course it does" },
        { value:0, text: "No, there are enough" }
      ],
    },
    {
      id:6,
      title: "Do you wish Leanne Wood was your mum?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    },
    {
      id:7,
      title: "Should there be a living wage for all employees?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "Yes" }
      ],
    },
    {
      id:8,
      title: "The karaoke classic Delilah...",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:0, text: "It needs banning" },
        { value:1, text: "It needs singing more" }
      ], 
    },
    {
      id:9,
      title: "Should students have to pay tuition fees?",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:1, text: "No, higher education should be free" },
        { value:0, text: "Yes, they should contribute to the costs" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "Do you even know where Wales is?", imageUrl: "snp_result_01.jpg", resultClass:"result0" },
    { score:1, text: "Do you even know where Wales is?", imageUrl: "snp_result_01.jpg", resultClass:"result10" },
    { score:2, text: "Do you even know where Wales is?", imageUrl: "snp_result_01.jpg", resultClass:"result20" },
    { score:3, text: "You're obviously not a fan of paying for plastic bags", imageUrl: "snp_result_02.jpg", resultClass:"result30" },
    { score:4, text: "You're obviously not a fan of paying for plastic bags", imageUrl: "snp_result_03.jpg", resultClass:"result40" },
    { score:5, text: "You need to eat a few more leeks", imageUrl: "snp_result_04.jpg", resultClass:"result50" },
    { score:6, text: "You need to eat a few more leeks", imageUrl: "snp_result_04.jpg", resultClass:"result60" },
    { score:7, text: "You're clearly all for more devolved powers", imageUrl: "snp_result_04.jpg", resultClass:"result70" },
    { score:8, text: "You're clearly all for more devolved powers", imageUrl: "snp_result_05.jpg", resultClass:"result80" },
    { score:9, text: "You must be from the Valleys", imageUrl: "snp_result_06.jpg", resultClass:"result90" },
    { score:10, text: "You're more Welsh than Saint David", imageUrl: "snp_result_07.jpg", resultClass:"result100" }
  ]
}

export default data;