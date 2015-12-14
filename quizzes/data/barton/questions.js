var data = {
  showHeadlines:true,
  questions: [
    {
      id:0,
      title: "What do you\nthink of Ukip?",
      imageUrl: 'quiz01.jpg',
      questions: [
        { value:1, text: "They’re the best of four ugly girls" },
        { value:0, text: "Foreigner-bashing fruitcakes" }
      ],
    },
    {
      id:1,
      title: "You have a bust-up with a colleague at the work's Xmas party. Do you:",
      imageUrl: 'quiz02.jpg',
      questions: [
        { value:0, text: "Speak to your manager in the morning" },
        { value:1, text: "Stub a cigar in his eye" }
      ],
    },
    {
      id:2,
      title: "Thoughts on Morrissey?",
      imageUrl: 'quiz03.jpg',
      questions: [
        { value:1, text: "Love him" },
        { value:0, text: "What a miserable k**b" }
      ],
    },
    {
      id:3,
      title: "Europa League\nmatch on TV.\nDo you:",
      imageUrl: 'quiz04.jpg',
      questions: [
        { value:0, text: "Watch it to spot possible signings" },
        { value:1, text: "Tweet annoying Nietzsche quotes you grabbed off Google" }
      ],
    },
    {
      id:4,
      title: "Gary Lineker?",
      imageUrl: 'quiz05.jpg',
      questions: [
        { value:1, text: "An odious little toad" },
        { value:0, text: "England football legend" }
      ],
    },
    {
      id:5,
      title: "You have squatters in your house. Do you:",
      imageUrl: 'quiz06.jpg',
      questions: [
        { value:1, text: "Plot Home Alone-style vengeance" },
        { value:0, text: "Call the council" }
      ],
    },
    {
      id:6,
      title: "Do you like Towie?",
      imageUrl: 'quiz07.jpg',
      questions: [
        { value:1, text: "It’s full of fame-hungry ball bags" },
        { value:0, text: "OMG! It’s totally reem" }
      ],
    },
    {
      id:7,
      title: "What do you think of the FA?",
      imageUrl: 'quiz08.jpg',
      questions: [
        { value:1, text: "Massively out of touch with reality" },
        { value:0, text: "Someone's got to handle the bureaucratic side of the game" }
      ],
    },
    {
      id:8,
      title: "How’s your\ncriminal record?",
      imageUrl: 'quiz09.jpg',
      questions: [
        { value:0, text: "Clean as a whistle" },
        { value:1, text: "Umm…" }
      ], 
    },
    {
      id:9,
      title: "Thoughts on\nEd Miliband?",
      imageUrl: 'quiz10.jpg',
      questions: [
        { value:0, text: "Uninspiring Labour leader" },
        { value:1, text: "The leader of our country can't have a speech impediment" }
      ],
    }
  ],
 
  results: [
    { score:0, text: "You're stuck in the reserves", resultClass:"result0" },
    { score:1, text: "You're stuck in the reserves", resultClass:"result10" },
    { score:2, text: "You're smarter than Barton", resultClass:"result20" },
    { score:3, text: "You're smarter than Barton", resultClass:"result30" },
    { score:4, text: "You're part-Barton, part-Gazza", resultClass:"result40" },
    { score:5, text: "You're part-Barton, part-Gazza", resultClass:"result50" },
    { score:6, text: "It might be time to get off Twitter", resultClass:"result60" },
    { score:7, text: "Do you like Nietzsche too?", resultClass:"result70" },
    { score:8, text: "Do you like Nietzsche too?", resultClass:"result80" },
    { score:9, text: "Do you want some big man? You're going Joey", resultClass:"result90" },
    { score:10, text: "You could be the head-butting philosopher himself", resultClass:"result100" }
  ]
}

export default data;