import questions from './questions';

var quiz = window.quiz = {
  name: 'sugar',
  subject: 'Alan Sugar',
  title: 'How Alan Sugar are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-alan-sugar-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-sugar/index-sugar.html',
  playNextUrl: "http://www.sunnation.co.uk/lord-sugar-resigns-from-the-labour-party/",
  playNextCaption: "Now read 'Here's why Lord Sugar quit Labour'",
  preloadIntro: [
    "data/sugar/rosette-sugar.png",
    "data/sugar/logo-sugar.png",
    "data/sugar/sugar-torso.png",
    "data/sugar/button-hover.png",
    "data/sugar/headline-panel.png",
    "data/sugar/button.png"
  ],
  preloadRest: [
    "data/sugar/result-panel.png",
    "data/sugar/sugar-end-2.png",
    "data/sugar/coin.png",
    "data/sugar/coin-shadow.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Alan Sugar are you?' quiz. Take it here: `
};
export default quiz;
