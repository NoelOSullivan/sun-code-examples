import questions from './questions';

var quiz = window.quiz = {
  name: 'church',
  subject: 'Charlotte Church',
  title: 'How Charlotte Church are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-charlotte-church-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-church/index-church.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-morgan/index-morgan.html",
  playNextCaption: "Play 'How Piers Morgan are you?'",
  questions: questions,
  preloadIntro: [
    "data/church/rosette-church.png",
    "data/church/logo-church.png",
    "data/church/church-torso.png",
    "data/church/button-hover.png",
    "data/church/button.png",
    "data/church/frame-back.png",
    "data/church/headline-panel.png"
  ],
  preloadRest: [
    "data/church/result-panel.png",
    "data/church/church-end-1.png",
    "data/church/church-end-2.png",
    "data/church/church-end-3.png",
    "data/church/church-end-4.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Charlotte Church are you?' quiz. Take it here: `
};

export default quiz;
