import questions from './questions';

var quiz = window.quiz = {
  name: 'green',
  subject: 'Green',
  title: 'How Green are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-green-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-green/index-green.html",
  playNextUrl: "http://www.sunnation.co.uk/how-plaid-cymru-are-you",
  playNextCaption: "Now play 'how Plaid Cymru are you?'",
  preloadIntro: [
    "data/green/rosette-green.png",
    "data/green/logo-green.png",
    "data/green/natalie-green.png",
    "data/green/button-hover.png",
    "data/green/button.png"
  ],
  preloadRest: [
    "data/green/result-panel.png",
    "data/green/plant-stalk.png",
    "data/green/plant-ground.png",
    "data/green/plant-leaf-1.png",
    "data/green/plant-leaf-2.png",
    "data/green/plant-leaf-3.png",
    "data/green/plant-leaf-4.png",
    "data/green/plant-leaf-5.png",
    "data/green/plant-leaf-6.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Green are you?' quiz. Take it here: `
};

export default quiz;