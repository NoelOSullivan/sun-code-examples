import questions from './questions';

var quiz = window.quiz = {
  name: 'clarkson',
  subject: 'Jeremy Clarkson',
  title: 'How Jeremy Clarkson are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-jeremy-clarkson-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-clarkson/index-clarkson.html",
  playNextUrl: "http://www.sunnation.co.uk/is-boris-the-next-top-gear-host",
  playNextCaption: "Now read: Could Boris be the next Top Gear host?",
  questions: questions,
  preloadIntro: [
    "data/clarkson/rosette.png",
    "data/clarkson/logo.png",
    "data/clarkson/leader-torso.png",
    "data/clarkson/button-hover.png",
    "data/clarkson/button.png",
    "data/clarkson/frame-back.png",
    "data/clarkson/headline-panel.png"
  ],
  preloadRest: [
    "data/clarkson/result-panel.png",
    "data/clarkson/speedo.png",
    "data/clarkson/needle.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Jeremy Clarkson are you?' quiz. Take it here: `
};

export default quiz;
