// complete the yargs command to ensure it meets the criteria outlined in the instructions
// - needs a location command
// - needs to include help support
const yargs = require('yargs');
const app = require('./app.js');

yargs.usage('$0: Usage <cmd> [options]').command({
        command: 'locations',
        desc: 'Gets the information from Weather.gov API',
        handler: argv => {
            app.locations(argv);
        }
    })
    .help("help").argv;