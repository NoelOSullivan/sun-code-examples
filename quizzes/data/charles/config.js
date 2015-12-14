import questions from './questions';

var quiz = window.quiz = {
  name: 'charles',
  subject: 'Prince Charles',
  title: 'How Prince Charles are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-prince-charles-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-charles/index-charles.html',
  playNextUrl: "http://www.sunnation.co.uk/games/release/quiz-royalbaby/index-royalbaby.html",
  playNextCaption: "Now play our 'How Royal Baby are you?' quiz",
  questions: questions,
  preloadIntro: [
    "data/charles/rosette-charles.png",
    "data/charles/logo-charles.png",
    "data/charles/charles-torso.png",
    "data/charles/button-hover.png",
    "data/charles/button.png",
    "data/charles/frame-back.png",
    "data/charles/headline-panel.png"
  ],
  preloadRest: [
    "data/charles/result-panel.png",
    "data/charles/charles-end.png",
    "data/charles/party.png",
    "data/charles/cap.png",
    "data/charles/bowler.png",
    "data/charles/crown.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Prince Charles are you?' quiz. Take it here: `
};

export default quiz;
