import questions from './questions';

var quiz = window.quiz = {
  name: 'sturgeon',
  subject: 'Nicola Sturgeon',
  title: 'How Nicola Sturgeon are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-nicola-sturgeon-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-sturgeon/index-sturgeon.html",
  playNextUrl: "http://www.sunnation.co.uk/introducing-the-wacky-green-party-leader-for-wales",
  playNextCaption: "Now meet the wacky Wales Green Party Leader",
  questions: questions,
  preloadIntro: [
    "data/sturgeon/rosette.png",
    "data/sturgeon/logo.png",
    "data/sturgeon/leader-torso.png",
    "data/sturgeon/button-hover.png",
    "data/sturgeon/button.png",
    "data/sturgeon/frame-back.png",
    "data/sturgeon/headline-panel.png"
  ],
  preloadRest: [
    "data/sturgeon/result-panel.png",
    "data/sturgeon/boot.png",
    "data/sturgeon/crab.png",
    "data/sturgeon/fish.png",
    "data/sturgeon/hook.png",
    "data/sturgeon/line.png",
    "data/sturgeon/nemo.png",
    "data/sturgeon/piranha.png",
    "data/sturgeon/rod.png"

  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Nicola Sturgeon are you?' quiz. Take it here: `
};

export default quiz;
