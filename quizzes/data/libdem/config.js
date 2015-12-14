import questions from './questions';

var quiz = window.quiz = {
  name: 'libdem',
  subject: 'Lib Dem',
  title: 'How Lib Dem are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-lib-dem-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/libdem-quiz/index-libdem.html',
  playNextUrl: "http://www.sunnation.co.uk/how-green-are-you",
  playNextCaption: "Now play 'how Green are you?'",
  preloadIntro: [
    "data/libdem/rosette-libdem.png",
    "data/libdem/logo-libdem.png",
    "data/libdem/clegg-libdem.png",
    "data/libdem/button-hover.png",
    "data/libdem/button.png"
  ],
  preloadRest: [
    "data/libdem/result-panel.png",
    "data/libdem/fence-cat.png",
    "data/libdem/fence-cat-fall.png",
    "data/libdem/fence-grass.png",
    "data/libdem/fence-shadow.png",
    "data/libdem/fence-cat.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How LibDem are you?' quiz. Take it here: `
};
export default quiz;
