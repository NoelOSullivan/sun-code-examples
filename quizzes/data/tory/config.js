import questions from './questions';

var quiz = window.quiz = {
  subject: 'Tory',
  title: 'How Tory are you?',
  name: 'tory',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-tory-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-tory/index-tory.html',
  playNextUrl: "http://www.sunnation.co.uk/how-ukip-are-you",
  playNextCaption: "Now play 'how Ukip are you?'",
  preloadIntro: [
    "data/tory/rosette-tory.png",
    "data/tory/logo-tory.png",
    "data/tory/cameron-tory.png",
    "data/tory/button-hover.png",
    "data/tory/button.png"
  ],
  preloadRest: [
    "data/tory/result-panel.png",
    "data/tory/coin.png",
    "data/tory/coin-shadow.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Tory are you?' quiz. Take it here: `
};
export default quiz;
