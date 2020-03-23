const yargs = require('yargs');
const ghibli_app = require('./ghibli_app.js');

yargs
    .usage('$0: Usage node ghibli_cli.js <cmd> [option]')
    .command({
        command: 'search',
        desc: 'Search Studio Ghibli API categories.',
        builder: yargs => {
            return yargs
                .options('c', {
                    alias: 'category',
                    describe: 'use these categories: films, people, locations, species and vehicles.'
                });
        },
        handler: argv => {
            ghibli_app.search(argv.category);
        }
    })
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;