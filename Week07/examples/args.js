const args = process.argv;
// console.log(args)

// The first element will be the Node.js executable path.
// The second element will be the path to the.js file being executed.
// The remaining elements will be any additional command line arguments.

// Syntax
// node args.js --help

args.splice(0, 2);
console.log(args);

const command = args.shift();
console.log(command);

if (command === '--help') {
    doHelp();
} else {
    doWork();
}

function doHelp() {
    console.log('explain how to use our app');
}

function doWork() {
    console.log('execute a command');
    console.log(args);
}
