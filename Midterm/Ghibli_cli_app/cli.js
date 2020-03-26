const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage node ghibli_cli.js <cmd> [option]')
    .command({
        command: 'search',
        desc: 'Search Studio Ghibli API categories.',
        builder: yargs => {
            return yargs
                .options('k', {
                    alias: 'keyword',
                    describe: 'search categories using a keyword, try castle or totoro'
                });
        },
        handler: argv => {
            app.search(argv.keyword);
        }
    })
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;