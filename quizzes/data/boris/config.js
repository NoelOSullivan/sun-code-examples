import questions from './questions';

var quiz = window.quiz = {
  name: 'boris',
  subject: 'Boris Johnson',
  title: 'How Boris Johnson are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-boris-johnson-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-boris/index-boris.html",
  playNextUrl: "http://www.sunnation.co.uk/how-katie-hopkins-are-you",
  playNextCaption: "Now play 'how Katie Hopkins are you?'",
  questions: questions,
  preloadIntro: [
    "data/boris/rosette.png",
    "data/boris/logo.png",
    "data/boris/leader-torso.png",
    "data/boris/button-hover.png",
    "data/boris/button.png",
    "data/boris/frame-back.png",
    "data/boris/headline-panel.png"
  ],
  preloadRest: [
    "data/boris/result-panel.png",
    "data/boris/halo.png",
    "data/boris/boris-head.png",
    "data/boris/boris-hair-1.png",
    "data/boris/boris-hair-2.png",
    "data/boris/boris-hair-3.png",
    "data/boris/boris-hair-4.png",
    "data/boris/boris-hair-5.png",
    "data/boris/boris-hair-6.png",
    "data/boris/boris-hair-7.png",
    "data/boris/boris-hair-8.png",
    "data/boris/boris-hair-9.png",
    "data/boris/boris-hair-10.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Boris Johnson are you?' quiz. Take it here: `
};

export default quiz;
