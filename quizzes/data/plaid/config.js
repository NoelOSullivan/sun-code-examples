import questions from './questions';

var quiz = window.quiz = {
  name: 'plaid',
  subject: 'Plaid Cymru',
  title: 'How Plaid Cymru are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-plaid-cymru-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-plaid/index-plaid.html",
  playNextUrl: "http://www.sunnation.co.uk/how-snp-are-you",
  playNextCaption: "Now play 'how SNP are you?'",
  questions: questions,
  preloadIntro: [
    "data/plaid/rosette.png",
    "data/plaid/logo.png",
    "data/plaid/leader-torso.png",
    "data/plaid/button-hover.png",
    "data/plaid/button.png",
    "data/plaid/headline-panel.png"
  ],
  preloadRest: [
    "data/plaid/result-panel.png",
    "data/plaid/flower-flower.png",
    "data/plaid/flower-leaves.png",
    "data/plaid/flower-petal.png",
    "data/plaid/flower-stalk.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Plaid Cymru are you?' quiz. Take it here: `
};

export default quiz;
