import questions from './questions';

var quiz = window.quiz = {
  name: 'barton',
  subject: 'Joey Barton',
  title: 'How Joey Barton are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-joey-barton-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-barton/index-barton.html",
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-clarkson/index-clarkson.html",
  playNextCaption: "Now play 'how Jeremy CLarkson are you?'",
  questions: questions,
  preloadIntro: [
    "data/barton/rosette.png",
    "data/barton/logo.png",
    "data/barton/leader-torso.png",
    "data/barton/button-hover.png",
    "data/barton/button.png",
    "data/barton/frame-back.png",
    "data/barton/headline-panel.png"
  ],
  preloadRest: [
    "data/barton/result-panel.png",
    "data/barton/back-head.png",
    "data/barton/bottom-statue.png",
    "data/barton/forearm.png",
    "data/barton/upper-arm.png",
    "data/barton/red-glow.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Joey Barton are you?' quiz. Take it here: `
};

export default quiz;
