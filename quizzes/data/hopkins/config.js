import questions from './questions';

var quiz = window.quiz = {
  name: 'hopkins',
  subject: 'Katie Hopkins',
  title: 'How Katie Hopkins are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-katie-hopkins-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-hopkins/index-hopkins.html",
  playNextUrl: "http://www.sunnation.co.uk/how-ukip-are-you",
  playNextCaption: "Now play 'how UKIP are you?'",
  questions: questions,
  preloadIntro: [
    "data/hopkins/rosette.png",
    "data/hopkins/logo.png",
    "data/hopkins/leader-torso.png",
    "data/hopkins/button-hover.png",
    "data/hopkins/button.png",
    "data/hopkins/frame-back.png",
    "data/hopkins/headline-panel.png"
  ],
  preloadRest: [
    "data/hopkins/result-panel.png",
    "data/hopkins/katie-fire.png",
    "data/hopkins/katie-head.png",
    "data/hopkins/katie-head-red.png",
    "data/hopkins/katie-horn-left.png",
    "data/hopkins/katie-horn-right.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Katie Hopkins are you?' quiz. Take it here: `
};

export default quiz;
