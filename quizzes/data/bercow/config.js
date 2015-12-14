import questions from './questions';

var quiz = window.quiz = {
  name: 'bercow',
  subject: 'John Bercow',
  title: 'How John Bercow are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-john-bercow-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-bercow/index-bercow.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-morgan/index-morgan.html",
  playNextCaption: "Play 'How Piers Morgan are you?'",
  questions: questions,
  preloadIntro: [
    "data/bercow/rosette-bercow.png",
    "data/bercow/logo-bercow.png",
    "data/bercow/bercow-torso.png",
    "data/bercow/button-hover.png",
    "data/bercow/button.png",
    "data/bercow/frame-back.png",
    "data/bercow/headline-panel.png"
  ],
  preloadRest: [
    "data/bercow/result-panel.png",
    "data/bercow/bercow-end-1.png",
    "data/bercow/bercow-end-2.png",
    "data/bercow/bercow-end-3.png",
    "data/bercow/bercow-end-4.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How John Bercow are you?' quiz. Take it here: `
};

export default quiz;
