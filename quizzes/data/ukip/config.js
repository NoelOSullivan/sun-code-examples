import questions from './questions';

var quiz = window.quiz = {
  name: 'ukip',
  subject: 'UKIP',
  title: 'How UKIP are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-ukip-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-ukip/index-ukip.html',
  playNextUrl: "http://www.sunnation.co.uk/how-tory-are-you",
  playNextCaption: "Now play 'how Tory are you?'",
  questions: questions,
  preloadIntro: [
    "data/ukip/rosette-ukip.png",
    "data/ukip/logo-ukip.png",
    "data/ukip/farage-torso.png",
    "data/ukip/button-hover.png",
    "data/ukip/button.png"
  ],
  preloadRest: [
    "data/ukip/result-panel.png",
    "data/ukip/beer-fill.png",
    "data/ukip/rosette-beer-bubbles.png",
    "data/ukip/rosette-beer-cutout.png",
    "data/ukip/rosette-beer-empty.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How UKIP are you?' quiz. Take it here: `
};

export default quiz;
