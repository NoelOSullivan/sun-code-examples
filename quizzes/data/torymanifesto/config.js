import questions from './questions';

var quiz = window.quiz = {
  name: 'torymanifesto',
  subject: 'Tory manifesto',
  title: 'Do you agree with the Tory manifesto?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/do-you-agree-with-the-tory-manifesto/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-torymanifesto/index-torymanifesto.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-boris/index-boris.html",
  playNextCaption: "Now play 'how Boris Johnson are you?'",
  preloadIntro: [
    "data/torymanifesto/rosette-tory.png",
    "data/torymanifesto/logo-tory.png",
    "data/torymanifesto/cameron-tory.png",
    "data/torymanifesto/button-hover.png",
    "data/torymanifesto/headline-panel.png",
    "data/torymanifesto/button.png"
  ],
  preloadRest: [
    "data/torymanifesto/result-panel.png",
    "data/torymanifesto/coin.png",
    "data/torymanifesto/coin-shadow.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'Do you agree with the Tory manifesto?' quiz. Take it here: `
};
export default quiz;
