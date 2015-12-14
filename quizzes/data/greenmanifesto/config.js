import questions from './questions';

var quiz = window.quiz = {
  name: 'greenmanifesto',
  subject: 'Green manifesto',
  title: 'Do you agree with the Green manifesto?',
  questions: questions,
  shareUrl: 'http://www.sunnation.co.uk/do-you-agree-with-the-green-manifesto/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-greenmanifesto/index-greenmanifesto.html",
  playNextUrl: "http://www.sunnation.co.uk/hopkins",
  playNextCaption: "Now play 'how Katie Hopkins are you?'",
  preloadIntro: [
    "data/greenmanifesto/rosette-green.png",
    "data/greenmanifesto/logo-green.png",
    "data/greenmanifesto/natalie-green.png",
    "data/greenmanifesto/button-hover.png",
    "data/greenmanifesto/headline-panel.png",
    "data/greenmanifesto/button.png"
  ],
  preloadRest: [
    "data/greenmanifesto/result-panel.png",
    "data/greenmanifesto/plant-stalk.png",
    "data/greenmanifesto/plant-ground.png",
    "data/greenmanifesto/plant-leaf-1.png",
    "data/greenmanifesto/plant-leaf-2.png",
    "data/greenmanifesto/plant-leaf-3.png",
    "data/greenmanifesto/plant-leaf-4.png",
    "data/greenmanifesto/plant-leaf-5.png",
    "data/greenmanifesto/plant-leaf-6.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'Do you agree with the Green manifesto?' quiz. Take it here: `
};

export default quiz;