import questions from './questions';

var quiz = window.quiz = {
  name: 'labour',
  subject: 'Labour',
  title: 'How Labour are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-labour-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-labour/index-labour.html',
  playNextUrl: "http://www.sunnation.co.uk/how-lib-dem-are-you",
  playNextCaption: "Now play 'how Lib Dem are you?'",
  preloadIntro: [
    "data/labour/rosette-labour.png",
    "data/labour/logo-labour.png",
    "data/labour/milliband-labour.png",
    "data/labour/button-hover.png",
    "data/labour/button.png"
  ],
  preloadRest: [
    "data/labour/result-panel.png",
    "data/labour/butty-bread-top.png",
    "data/labour/butty-bread-bottom.png",
    "data/labour/butty-sauce.png",
    "data/labour/butty-bacon-rasher.png",
    "data/labour/butty-bacon-2.png",
    "data/labour/butty-bacon-3.png",
    "data/labour/butty-bacon-4.png",
    "data/labour/butty-bacon-5.png",
    "data/labour/butty-bacon-6.png",
    "data/labour/butty-bacon-7.png",
    "data/labour/butty-bacon-8.png",
    "data/labour/butty-bacon-9.png",
    "data/labour/butty-bacon-10.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Labour are you?' quiz. Take it here: `
};

export default quiz;
