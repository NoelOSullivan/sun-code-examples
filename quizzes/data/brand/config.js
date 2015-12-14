import questions from './questions';

var quiz = window.quiz = {
  name: 'brand',
  subject: 'Russell Brand',
  title: 'How Russell Brand are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-russell-brand-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-brand/index-brand.html",
  playNextUrl: "http://www.sunnation.co.uk/how-katie-hopkins-are-you",
  playNextCaption: "Now play 'how Katie Hopkins are you?'",
  questions: questions,
  preloadIntro: [
    "data/brand/rosette.png",
    "data/brand/logo.png",
    "data/brand/leader-torso.png",
    "data/brand/button-hover.png",
    "data/brand/button.png",
    "data/brand/frame-back.png",
    "data/brand/headline-panel.png"
  ],
  preloadRest: [
    "data/brand/result-panel.png",
    "data/brand/brand-arm-left.png",
    "data/brand/brand-arm-right.png",
    "data/brand/brand-body.png",
    "data/brand/brand-halo.png",
    "data/brand/brand-head.png",
    "data/brand/brand-shaft.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Russell Brand are you?' quiz. Take it here: `
};

export default quiz;
