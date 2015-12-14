var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Do you think we should cancel all new road building projects?",
      imageUrl: 'green_01.jpg',
      questions: [
        { value:0, text: "No, roads are vital to get around" },
        { value:1, text: "Yes, we should all get public transport" }
      ],
    },
    {
      id:1,
      title: "Does everyone deserve £72 a week regardless of how much they work?",
      imageUrl: 'green_02.jpg',
      questions: [
        { value:0, text: "No, that is a foolish idea" },
        { value:1, text: "Yes, it’s much fairer that way" }
      ],
    },
    {
      id:2,
      title: "Should the top\nrate of tax\nbe hiked up to\na whopping 60%?",
      imageUrl: 'green_03.jpg',
      questions: [
        { value:1, text: "Yes, the rich should contribute more" },
        { value:0, text: "No, that just punishes success" }
      ],
    },
    {
      id:3,
      title: "Do you want\nto ban the\nGrand National?",
      imageUrl: 'green_04.jpg',
      questions: [
        { value:1, text: "Yes, it’s cruel to animals" },
        { value:0, text: "No, it’s a national institution" }
      ],
    },
    {
      id:4,
      title: "Should the Government spend billions more than\nit gets in revenue?",
      imageUrl: 'green_05.jpg',
      questions: [
        { value:1, text: "Yes, it’s the only way to make society fairer" },
        { value:0, text: "No, that’s how we got into this mess in the first place" }
      ],
    },
    {
      id:5,
      title: "Should the government be put back in charge of the railways?",
      imageUrl: 'green_06.jpg',
      questions: [
        { value:0, text: "No, the government made a hash of it last time" },
        { value:1, text: "Yes, it will make train travel better" }
      ],
    },
    {
      id:6,
      title: "Do you think Cornwall should have its own Assembly?",
      imageUrl: 'green_07.jpg',
      questions: [
        { value:0, text: "No, it isn't necessary" },
        { value:1, text: "Yes, they deserve devolved powers" }
      ],
    },
    {
      id:7,
      title: "Do you believe in a \"peaceful political revolution\"?",
      imageUrl: 'green_08.jpg',
      questions: [
        { value:1, text: "Yes, this is how we’ll end austerity" },
        { value:0, text: "No, I don’t know what that means" }
      ],
    },
    {
      id:8,
      title: "Do you think the minimum wage should rise to £10/hr?",
      imageUrl: 'green_09.jpg',
      questions: [
        { value:0, text: "No, the cost to small businesses will be too high" },
        { value:1, text: "Yes, everyone deserves a living wage" }
      ],
    },
    {
      id:9,
      title: "We should get rid\nof Britain’s\nnuclear deterrent",
      imageUrl: 'green_10.jpg',
      questions: [
        { value:0, text: "No, it is Britain’s insurance policy from attack" },
        { value:1, text: "Yes, it costs way too much and isn’t needed" }
      ],
    }
  ],

  results: [
    { score:0, text: "You have nothing in common with the Greens", resultClass: "result0" },
    { score:1, text: "The Greens aren't getting your vote", resultClass: "result10" },
    { score:2, text: "The Greens aren't getting your vote", resultClass: "result20" },
    { score:3, text: "You have some sympathy for their policies", resultClass: "result30" },
    { score:4, text: "You have some sympathy for their policies", resultClass: "result40" },
    { score:5, text: "You like some Green stuff but not enough to vote for them", resultClass: "result50" },
    { score:6, text: "You like some Green stuff but not enough to vote for them",resultClass: "result60" },
    { score:7, text: "You'll be backing the Greens come election day", resultClass: "result70" },
    { score:8, text: "You'll be backing the Greens come election day", resultClass: "result80" },
    { score:9, text: "You want to see Natalie Bennett as PM", resultClass: "result90" },
    { score:10, text: "You're more Green than the Jolly Green Giant", resultClass: "result100" },
  ]
};

export default data;