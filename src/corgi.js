// Corgi plugin for hubot.  Animate wasn't doing a good enough job at finding 
// corgi pics and gifs.

import client from './client'

export default function (robot) {
  robot.respond(/corgi gif/, (msg) => {
    msg.send('Corgi gifs coming soon, for now just use the regular command "corgi [me]"');
  });

  robot.respond(/corgi(?: me)?$/, (msg) => {
    client().then((corgis) => {
      msg.send(msg.random(corgis));
    });
  });
};


