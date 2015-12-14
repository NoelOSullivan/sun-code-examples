import questions from './questions';

var quiz = window.quiz = {
  name: 'farage',
  subject: 'Nigel Farage',
  title: 'How Nigel Farage are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-nigel-farage-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-farage/index-farage.html',
  playNextUrl: "http://www.sunnation.co.uk/this-man-is-allergic-to-nigel-farage/",
  playNextCaption: "Now read 'This man is allergic to Nigel Farage'",
  questions: questions,
  preloadIntro: [
    "data/farage/rosette-ukip.png",
    "data/farage/logo-ukip.png",
    "data/farage/farage-torso.png",
    "data/farage/button-hover.png",
    "data/farage/button.png"
  ],
  preloadRest: [
    "data/farage/result-panel.png",
    "data/farage/beer-fill.png",
    "data/farage/rosette-beer-bubbles.png",
    "data/farage/rosette-beer-cutout.png",
    "data/farage/rosette-beer-empty.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Nigel Farage are you?' quiz. Take it here: `
};

export default quiz;
