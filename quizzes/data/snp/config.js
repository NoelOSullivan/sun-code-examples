import questions from './questions';

var quiz = window.quiz = {
  name: 'snp',
  subject: 'SNP',
  title: 'How SNP are you?',
  shareUrl: 'http://www.sunnation.co.uk/how-snp-are-you/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-snp/index-snp.html",
  questions: questions,
  playNextUrl: "http://www.sunnation.co.uk/how-labour-are-you",
  playNextCaption: "Now play 'how Labour are you?'",
  preloadIntro: [
    "data/snp/rosette-snp.png",
    "data/snp/logo-snp.png",
    "data/snp/nicola-torso.png",
    "data/snp/button-hover.png",
    "data/snp/button.png",
    "data/snp/headline-panel.png"
  ],
  preloadRest: [
    "data/snp/result-panel.png",
    "data/snp/bru-fill.png",
    "data/snp/bru-cutout.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How SNP are you?' quiz. Take it here: `
};

export default quiz;
