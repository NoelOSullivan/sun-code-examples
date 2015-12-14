import questions from './questions';

var quiz = window.quiz = {
  name: 'labourmanifesto',
  subject: 'Labour manifesto',
  title: 'Do you agree with the Labour manifesto?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/do-you-agree-with-the-labour-manifesto/',
  targetUrl: 'http://www.sunnation.co.uk/games/release/quiz-labourmanifesto/index-labourmanifesto.html',
  playNextUrl: "http://www.sunnation.co.uk/hopkins",
  playNextCaption: "Now play 'how Katie Hopkins are you?'",
  preloadIntro: [
    "data/labourmanifesto/rosette-labour.png",
    "data/labourmanifesto/logo-labour.png",
    "data/labourmanifesto/milliband-labour.png",
    "data/labourmanifesto/button-hover.png",
    "data/labourmanifesto/headline-panel.png",
    "data/labourmanifesto/button.png"
  ],
  preloadRest: [
    "data/labourmanifesto/result-panel.png",
    "data/labourmanifesto/butty-bread-top.png",
    "data/labourmanifesto/butty-bread-bottom.png",
    "data/labourmanifesto/butty-sauce.png",
    "data/labourmanifesto/butty-bacon-rasher.png",
    "data/labourmanifesto/butty-bacon-2.png",
    "data/labourmanifesto/butty-bacon-3.png",
    "data/labourmanifesto/butty-bacon-4.png",
    "data/labourmanifesto/butty-bacon-5.png",
    "data/labourmanifesto/butty-bacon-6.png",
    "data/labourmanifesto/butty-bacon-7.png",
    "data/labourmanifesto/butty-bacon-8.png",
    "data/labourmanifesto/butty-bacon-9.png",
    "data/labourmanifesto/butty-bacon-10.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'Do you agree with the Labour manifesto?' quiz. Take it here: `
};

export default quiz;
