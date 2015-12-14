import questions from './questions';

var quiz = window.quiz = {
  name: 'galloway',
  subject: 'George Galloway',
  title: 'How George Galloway are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-george-galloway-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-galloway/index-galloway.html',
  playNextUrl: "http://www.sunnation.co.uk/what-else-are-you-going-to-contest-george/",
  playNextCaption: "Read 'What else are you going to contest, George?'",
  questions: questions,
  preloadIntro: [
    "data/galloway/rosette-galloway.png",
    "data/galloway/logo-galloway.png",
    "data/galloway/galloway-torso.png",
    "data/galloway/button-hover.png",
    "data/galloway/button.png"
  ],
  preloadRest: [
    "data/galloway/result-panel.png",
    "data/galloway/galloway-end.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How George Galloway are you?' quiz. Take it here: `
};

export default quiz;
