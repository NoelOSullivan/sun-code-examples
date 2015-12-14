import questions from './questions';

var quiz = window.quiz = {
  name: 'morgan',
  subject: 'Piers Morgan',
  title: 'How Piers Morgan are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-piers-morgan-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-morgan/index-morgan.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-sugar/index-sugar.html",
  playNextCaption: "Now play 'How Alan Sugar are you?'",
  questions: questions,
  preloadIntro: [
    "data/morgan/rosette-morgan.png",
    "data/morgan/logo-morgan.png",
    "data/morgan/morgan-torso.png",
    "data/morgan/button-hover.png",
    "data/morgan/button.png",
    "data/morgan/frame-back.png",
    "data/morgan/headline-panel.png"
  ],
  preloadRest: [
    "data/morgan/result-panel.png",
    "data/morgan/morgan-1.png",
    "data/morgan/morgan-2.png",
    "data/morgan/morgan-3.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Piers Morgan are you?' quiz. Take it here: `
};

export default quiz;
