var data = {
  questions: [
    {
      id:0,
      title: "What's your view on Nick Clegg?",
      imageUrl: 'libDem_01.jpg',
      questions: [
        { value:0.5, text: "He's great" },
        { value:0, text: "He's useless" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:1,
      title: "A win at all costs mentality is ruining football clubs",
      imageUrl: 'libDem_02.jpg',
      questions: [
        { value:0, text: "No, winning is the whole point" },
        { value:0.5, text: "Clubs should be focused on fans and community" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:2,
      title: "We should spend way more money on cycling",
      imageUrl: 'libDem_03.jpg',
      questions: [
        { value:0.5, text: "Yes" },
        { value:0, text: "No" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:3,
      title: "Should drugs be decriminalised",
      imageUrl: 'libDem_04.jpg',
      questions: [
        { value:0, text: "No" },
        { value:0.5, text: "Yes" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:4,
      title: "Do you get annoyed when others take credit for 'your' work",
      imageUrl: 'libDem_05.jpg',
      questions: [
        { value:0.5, text: "Yes, it's very annoying" },
        { value:0, text: "No, I'm not that bothered" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:5,
      title: "Mansion tax",
      imageUrl: 'libDem_06.jpg',
      questions: [
        { value:0.5, text: "Great idea" },
        { value:0, text: "Terrible idea" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:6,
      title: "Pick a TV show:",
      imageUrl: 'libDem_07.jpg',
      questions: [
        { value:0.5, text: "Only Connect" },
        { value:0, text: "Pointless" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:7,
      title: "You should have to pay 5p for plastic bags",
      imageUrl: 'libDem_08.jpg',
      questions: [
        { value:0, text: "No" },
        { value:0.5, text: "Yes" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:8,
      title: "Tax the rich and give tax breaks to low earners",
      imageUrl: 'libDem_09.jpg',
      questions: [
        { value:0, text: "Not a good idea" },
        { value:0.5, text: "Yes, the better off should pay more" },
        { value:1, text: "I'm on the fence" }
      ],
    },
    {
      id:9,
      title: "Do you like coalitions?",
      imageUrl: 'libDem_10.jpg',
      questions: [
        { value:0, text: "No" },
        { value:0.5, text: "Yes" },
        { value:1, text: "I'm on the fence" }
      ],
    }
  ],

  results: [
    { score:0, text: "Wow, you really do not like the Lib Dems", imageUrl:"libDem_result_01.jpg", resultClass: "result0" },
    { score:1, text: "Not a big fan of the Cleggster then?", imageUrl:"libDem_result_01.jpg", resultClass: "result10"  },
    { score:2, text: "You're a little bit Lib Dem but it should come out in the wash", imageUrl:"libDem_result_02.jpg", resultClass: "result20"  },
    { score:3, text: "Still, that's more enthused than the country overall", imageUrl:"libDem_result_02.jpg", resultClass: "result30"  },
    { score:4, text: "Don't tell anyone but you're secretly a bit Lib Dem", imageUrl:"libDem_result_03.jpg", resultClass: "result40"  },
    { score:5, text: "You're somewhere in the middle", imageUrl:"libDem_result_03.jpg", resultClass: "result50"  },
    { score:6, text: "You think Clegg doesn't get the credit he deserves", imageUrl:"libDem_result_04.jpg", resultClass: "result60"  },
    { score:7, text: "Bordering on passionate – are you sure you're a Lib Dem", imageUrl:"libDem_result_04.jpg", resultClass: "result70"  },
    { score:8, text: "You would pick Nick Clegg down as your 'weird crush'", imageUrl:"libDem_result_05.jpg", resultClass: "result80"  },
    { score:9, text: "No Lib Dem has ever cared this much about anything…", imageUrl:"libDem_result_06.jpg", resultClass: "result90"  },
    { score:10, text: "Wow, you sit on the fence about everything – pure Lib Dem", imageUrl:"libDem_result_07.jpg", resultClass: "result100" }
  ]
}
export default data;