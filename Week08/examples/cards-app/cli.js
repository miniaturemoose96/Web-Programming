const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage <cmd> [options]')
    // add the 'play' command
    .command({
        command: 'play',
        desc: 'play a game of 5 card draw',
        handler: argv => {
            app.play();
        }
    })
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;

