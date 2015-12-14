var data = {

  showHeadlines:true,

  questions: [
    {
      id:0,
      title: "Are you voting\nin the election?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:1, text: "No, it only encourages them" },
        { value:0, text: "Yes, of course, you loon" }
      ],
    },
    {
      id:1,
      title: "Should banks be abolished?",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:0, text: "No, leave them alone" },
        { value:1, text: "Yes, it's the first step to the revolution" }
      ],
    },
    {
      id:2,
      title: "Skinny jeans\non blokes?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:0, text: "Don't they give you twisted testicles?" },
        { value:1, text: "Love 'em" }
      ],
    },
    {
      id:3,
      title: "Did you fall in love with Katy Perry\nin 2009?",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:1, text: "Yes, she became queen of my heart" },
        { value:0, text: "No, annoying then, annoying now" }
      ],
    },
    {
      id:4,
      title: "Are you\nteetotal?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:1, text: "Yep, I haven't touched the stuff in years" },
        { value:0, text: "No, I love a pint" }
      ],
    },
    {
      id:5,
      title: "Do you have a Messiah Complex?",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:1, text: "Probably, I am amazing" },
        { value:0, text: "No mate, that's weird" }
      ],
    },
    {
      id:6,
      title: "Are you an\naward-winning\nshagger?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:0, text: "No" },
        { value:1, text: "I like sex, what can I say?" }
      ],
    },
    {
      id:7,
      title: "The Dalai Lama",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:0, text: "What does he do again?" },
        { value:1, text: "Great bloke" }
      ],
    },
    {
      id:8,
      title: "Yoga?",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:0, text: "Boring" },
        { value:1, text: "Spiritual and physical – what's not to like?" }
      ], 
    },
    {
      id:9,
      title: "Ever left an offensive message\non a grandad's answerphone?",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:1, text: "Yes, whoops" },
        { value:0, text: "No, I'm not a moron" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "Brand\nis dead to you.", resultClass:"result0" },
    { score:1, text: "There's barely a drop of Brand in you.", resultClass:"result10" },
    { score:2, text: "There are streaks of Brand in you, but you're safe.", resultClass:"result20" },
    { score:3, text: "You are getting pretty Brandy over there. ", resultClass:"result30" },
    { score:4, text: "It's looking quite Russelly at your end.", resultClass:"result40" },
    { score:5, text: "Brand or not Brand matey? Time for a rain check?", resultClass:"result50" },
    { score:6, text: "More Brand than not Brand. That's where you're at.", resultClass:"result60" },
    { score:7, text: "There's not much you don't like about the guy.", resultClass:"result70" },
    { score:8, text: "You are Branded and you know it.", resultClass:"result80" },
    { score:9, text: "Vive la revolution - you're almost full Brand.", resultClass:"result90" },
    { score:10, text: "You ARE Russell - maybe you guys should go for a green tea? ", resultClass:"result100" }
  ]
}

export default data;