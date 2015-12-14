var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "Do a million more people deserve the right to buy their own home?",
      imageUrl: 'torymanifesto_01.jpg',
      questions: [
        { value:0, text: "No, we need to keep social housing in public hands" },
        { value:1, text: "Yes, this scheme would be great" }
      ],
    },
    {
      id:1,
      title: "Do you want an in/out referendum on membership of the EU?",
      imageUrl: 'torymanifesto_02.jpg',
      questions: [
        { value:1, text: "Yes" },
        { value:0, text: "No" }
      ],
    },
    {
      id:2,
      title: "Do you believe in having a\n365-day-a-year nuclear deterrent?",
      imageUrl: 'torymanifesto_03.jpg',
      questions: [
        { value:1, text: "Yes, it’s an insurance policy for the nation"},
        { value:0, text: "No, it’s too expensive" }
      ],
    },
    {
      id:3,
      title: "Do you think the Government should aim to run a budget surplus?",
      imageUrl: 'torymanifesto_04.jpg',
      questions: [
        { value:0, text: "No, there’s nothing wrong with having a deficit"},
        { value:1, text: "Yes, that’s fiscally responsible"}
      ],
    },
    {
      id:4,
      title: "Should you be able to earn up to £12,000 before starting to pay income tax?",
      imageUrl: 'torymanifesto_05.jpg',
      questions: [
        { value:0, text: "No, everyone should contribute"},
        { value:1, text: "Yes, it’s not fair to make low earners pay tax"}
      ],
    },
    {
      id:5,
      title: "Should rail fares\nbe frozen\nfor five years?",
      imageUrl: 'torymanifesto_06.jpg',
      questions: [
        { value:1, text: "Yes, passengers pay too much"},
        { value:0, text: "No, the rail companies will stop investing"}
      ],
    },
    {
      id:6,
      title: "Do you think\nparents need\n30 hours free\nchild care a week?",
      imageUrl: 'torymanifesto_07.jpg',
      questions: [
        { value:0, text: "No, working parents should have to pay themselves"},
        { value:1, text: "Yes, it will encourage work"}
      ],
    },
    {
      id:7,
      title: "Should we build 200,000 new starter homes for first-time buyers?",
      imageUrl: 'torymanifesto_08.jpg',
      questions: [
        { value:0, text: "No, we need to build more larger family homes"},
        { value:1, text: "Yes, first time buyers need more help"}
      ],
    },
    {
      id:8,
      title: "Should unions need a 50% turnout for a strike ballot to be valid?",
      imageUrl: 'torymanifesto_09.jpg',
      questions: [
        { value:1, text: "Yes, we can’t be held to ransom by a minority"},
        { value:0, text: "No, union rights should not be eroded"}
      ],
    },
    {
      id:9,
      title: "Do you agree\nthe NHS needs\nan additional\n£8 billion by 2020?",
      imageUrl: 'torymanifesto_10.jpg',
      questions: [
        { value:0, text: "No, we spend too much on healthcare"},
        { value:1, text: "Yes, the funding is desperately required"}
      ],
    }
  ],

  results: [
    { score:0, text: "You and Dave would not get on", resultClass: "result0" },
    { score:1, text: "You’re clearly hoping for an Ed Miliband victory", resultClass: "result10" },
    { score:2, text: "You’re clearly hoping for an Ed Miliband victory", resultClass: "result20" },
    { score:3, text: "You’re not on the same page as the Tories", resultClass: "result30" },
    { score:4, text: "You’re not on the same page as the Tories", resultClass: "result40" },
    { score:5, text: "You’d like to see the Tories in coalition again", resultClass: "result50" },
    { score:6, text: "You’d like to see the Tories in coalition again", resultClass: "result60" },
    { score:7, text: "You strongly agree, guessing you’ll be voting Tory then", resultClass: "result70" },
    { score:8, text: "You strongly agree, guessing you’ll be voting Tory then", resultClass: "result80"},
    { score:9, text: "You like virtually everything Cameron said", resultClass: "result90" },
    { score:10, text: "You’re more in favour of Tory policy than the Tories!", resultClass: "result100" }
  ]
}

export default data;