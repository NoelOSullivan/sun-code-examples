import questions from './questions';

var quiz = window.quiz = {
  name: 'cameron',
  subject: 'David Cameron',
  title: 'How David Cameron are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-david-cameron-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-cameron/index-cameron.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-boris/index-boris.html",
  playNextCaption: "Now play 'how Boris Johnson are you?'",
  preloadIntro: [
    "data/cameron/rosette-tory.png",
    "data/cameron/logo-tory.png",
    "data/cameron/cameron-tory.png",
    "data/cameron/button-hover.png",
    "data/cameron/headline-panel.png",
    "data/cameron/button.png"
  ],
  preloadRest: [
    "data/cameron/result-panel.png",
    "data/cameron/coin.png",
    "data/cameron/coin-shadow.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How David Cameron are you?' quiz. Take it here: `
};
export default quiz;
