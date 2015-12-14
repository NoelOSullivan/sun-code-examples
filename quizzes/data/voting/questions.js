var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Are you going to vote?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:10, text: "Yes!"},
        { value:0, text: "No!"}
      ],
    },
  ],
 
  results: [
    { score:0, text: "in the 'Are you going to vote' quiz", resultClass:"result100" },
    { score:10, text: "in the 'Are you going to vote' quiz", resultClass:"result0" }
  ]
}

export default data;