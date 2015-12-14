import questions from './questions';

var quiz = window.quiz = {
  name: 'miliband',
  subject: 'Ed Miliband',
  title: 'How Ed Miliband are you?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/how-ed-miliband-are-you/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-miliband/index-miliband.html',
  playNextUrl: "http://www.sunnation.co.uk/watch-red-eds-surprise-pool-trick-shot/",
  playNextCaption: "Now watch Red Ed's surprise pool trick shot",
  preloadIntro: [
    "data/miliband/rosette-labour.png",
    "data/miliband/logo-labour.png",
    "data/miliband/milliband-labour.png",
    "data/miliband/button-hover.png",
    "data/miliband/headline-panel.png",
    "data/miliband/button.png"
  ],
  preloadRest: [
    "data/miliband/result-panel.png",
    "data/miliband/butty-bread-top.png",
    "data/miliband/butty-bread-bottom.png",
    "data/miliband/butty-sauce.png",
    "data/miliband/butty-bacon-rasher.png",
    "data/miliband/butty-bacon-2.png",
    "data/miliband/butty-bacon-3.png",
    "data/miliband/butty-bacon-4.png",
    "data/miliband/butty-bacon-5.png",
    "data/miliband/butty-bacon-6.png",
    "data/miliband/butty-bacon-7.png",
    "data/miliband/butty-bacon-8.png",
    "data/miliband/butty-bacon-9.png",
    "data/miliband/butty-bacon-10.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Ed Miliband are you?' quiz. Take it here: `
};

export default quiz;
