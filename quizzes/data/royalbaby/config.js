import questions from './questions';

var quiz = window.quiz = {
  name: 'royalbaby',
  subject: 'Royal Baby',
  title: 'How royal baby are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-royal-baby-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-royalbaby/index-royalbaby.html',
  playNextUrl: "http://www.sunnation.co.uk/different-parties-uk-families-general-election-2015/",
  playNextCaption: "Read 'What are the parties offering UK families?'",
  questions: questions,
  preloadIntro: [
    "data/royalbaby/rosette-baby.png",
    "data/royalbaby/logo-baby.png",
    "data/royalbaby/parents-torso.png",
    "data/royalbaby/button-hover.png",
    "data/royalbaby/button.png"
  ],
  preloadRest: [
    "data/royalbaby/result-panel.png",
    "data/royalbaby/milk-fill.png",
    "data/royalbaby/milk-empty-bubbles.png",
    "data/royalbaby/milk-hole.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How royal baby are you?' quiz. Take it here: `
};

export default quiz;
