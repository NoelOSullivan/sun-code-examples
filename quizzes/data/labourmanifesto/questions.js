var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Should we meet\nthe £8bn funding gap\nfor the NHS?",
      imageUrl: 'labourmanif_01.jpg',
      questions: [
        { value:0, text: "Yes, the NHS is of vital importance" },
        { value:1, text: "No, we can’t afford it" }
      ],
    },
    {
      id:1,
      title: "Do you think we should get rid of free schools?",
      imageUrl: 'labourmanif_02.jpg',
      questions: [
        { value:1, text: "Yes, all schools should be under government control" },
        { value:0, text: "No, they give families more options" }
      ],
    },
    {
      id:2,
      title: "Thoughts on mansion tax?",
      imageUrl: 'labourmanif_03.jpg',
      questions: [
        { value:0, text: "It’s a mean tax on grannies" },
        { value:1, text: "People with £2m houses should pay more" }
      ],
    },
    {
      id:3,
      title: "Do you want an EU referendum?",
      imageUrl: 'labourmanif_04.jpg',
      questions: [
        { value:0, text: "Yes, we should be able to decide our future" },
        { value:1, text: "No, politicians know best" }
      ],
    },
    {
     id:4,
      title: "Should we abolish ‘non dom’ status?",
      imageUrl: 'labourmanif_05.jpg',
      questions: [
        { value:1, text: "Yes, overseas earnings should be taxed too" },
        { value:0, text: "No, it would force big businesses abroad" }
      ],
    },
    {
      id:5,
      title: "Should we reduce tuition fees from £9,000 to £6,000 a year?",
      imageUrl: 'labourmanif_06.jpg',
      questions: [
        { value:0, text: "No, we have to balance our books" },
        { value:1, text: "Yes, even if we have to borrow more" }
      ],
    },
    {
      id:6,
      title: "Should zero hour contracts be scrapped?",
      imageUrl: 'labourmanif_07.jpg',
      questions: [
        { value:1, text: "Yes, they’re exploitative" },
        { value:0, text: "No, they’ve created more opportunities and work for many" }
      ],
    },
    {
      id:7,
      title: "Should we give 16\nand 17-year-olds\nthe vote?",
      imageUrl: 'labourmanif_08.jpg',
      questions: [
        { value:0, text: "No, over 18s have more life experience" },
        { value:1, text: "Yes, let’s give them a say" }
      ],
    },
    {
      id:8,
      title: "Should 11-year-olds get one-on-one career advice?",
      imageUrl: 'labourmanif_09.jpg',
      questions: [
        { value:1, text: "Yes, it’s never too early" },
        { value:0, text: "No, that’s a waste of money" }
      ],
    },
    {
      id:9,
      title: "Do we need to get our capital deficit down as soon as possible?",
      imageUrl: 'labourmanif_10.jpg',
      questions: [
        { value:0, text: "Yes, it's costing households £5,000 a year" },
        { value:1, text: "No, we can carry on borrowing for now" }
      ],
    }
  ],
  results: [
    { score:0, text: "This manifesto is just not for you", resultClass: "result0" },
    { score:1, text: "This manifesto is just not for you", resultClass: "result10" },
    { score:2, text: "We doubt you’ll be voting Labour", resultClass: "result20" },
    { score:3, text: "We doubt you’ll be voting Labour", resultClass: "result30" },
    { score:4, text: "You’re on the fence", resultClass: "result40" },
    { score:5, text: "You’re on the fence", resultClass: "result50" },
    { score:6, text: "There’s something missing, much like the manifesto itself", resultClass: "result60" },
    { score:7, text: "Have you signed up to the Labour party yet?", resultClass: "result70" },
    { score:8, text: "Have you signed up to the Labour party yet?", resultClass: "result80" },
    { score:9, text: "You’re almost as red as Ed", resultClass: "result90" },
    { score:10, text: "Are you Ed Miliband?", resultClass: "result100" }
  ]
}

export default data;