const app = require('./app');
const yargs = require('yargs');

const flags = yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command: 'get',
        desc: 'get some data from our local node server',
        handler: () => {
            app.get();
        },
    })
    .command({
        command: 'post',
        desc: 'post some data to our local node server',
        builder: (yargs) => {
            return yargs.option('d', {
                alias: 'data',
                describe: 'data to send',
            });
        },
        handler: (argv) => {
            app.post(argv.data);
        },
    })
    .help('help').argv;
