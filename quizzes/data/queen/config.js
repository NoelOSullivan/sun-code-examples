import questions from './questions';

var quiz = window.quiz = {
  name: 'queen',
  subject: 'Queen Elizabeth II',
  title: 'How Queen Elizabeth II are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-queen-elizabeth-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-queen/index-queen.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-charles/index-charles.html",
  playNextCaption: "Play 'How Prince Charles are you?'",
  questions: questions,
  preloadIntro: [
    "data/queen/rosette-queen.png",
    "data/queen/logo-queen.png",
    "data/queen/queen-torso.png",
    "data/queen/button-hover.png",
    "data/queen/button.png",
    "data/queen/frame-back.png",
    "data/queen/headline-panel.png"
  ],
  preloadRest: [
    "data/queen/result-panel.png",
    "data/queen/queen-end-1.png",
    "data/queen/queen-end-2.png",
    "data/queen/queen-end-3.png",
    "data/queen/queen-end-4.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Queen Elizabeth II are you?' quiz. Take it here: `
};

export default quiz;
