const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage <cmd> [options]')
    // add the 'draw' command
    .command({
        command: 'draw',
        desc: 'draw cards from a deck',
        builder: yargs => {
            // add options (shuffle and count) to the draw command these options
            return yargs
                .options('s', {
                    alias: 'shuffle',
                    describe: 'shuffles the deck before drawing',
                    boolean: true
                })
                .options('c', {
                    alias: 'count',
                    describe: 'number of cards to draw'
                });
        },
        handler: argv => {
            app.draw(argv.shuffle, argv.count)
        }
    })
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;

