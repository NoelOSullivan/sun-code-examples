import questions from './questions';

var quiz = window.quiz = {
  name: 'voting',
  subject: 'Voting',
  title: 'Are you going to vote?',
  shareUrl: 'http://www.sunnation.co.uk/are-you-going-to-vote/',
  targetUrl: "http://www.sunnation.co.uk/games/release/quiz-voting/index-voting.html",
  playNextUrl: "http://www.sunnation.co.uk/a-z-election-guide/",
  playNextCaption: "Now read our A-Z General Election guide",
  questions: questions,
  preloadIntro: [
    "data/voting/rosette.png",
    "data/voting/logo.png",
    "data/voting/leader-torso.png",
    "data/voting/button-hover.png",
    "data/voting/button.png",
    "data/voting/frame-back.png",
    "data/voting/headline-panel.png"
  ],
  preloadRest: [
    "data/voting/result-panel.png",
    "data/voting/cross.png",
    "data/voting/tick.png"
  ],
  tweetTemplate: (score)=>`I got ${score}% in the 'How Nigel Farage are you?' quiz. Take it here: `,
  resultTemplate: (score,text)=>`You got ${score*10}% ${text}`
};

export default quiz;