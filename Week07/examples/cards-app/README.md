## How to Use the Card App CLI Dependencies

1. Go into the `card-app` folder.  Once inside the folder run: `npm install`.  This will install all the dependencies listed in the package.json.

2. To view the help directions for the CLI run: `node cli.js --help`.  To view help directions for the draw command run: `node cli.js draw --help`

3. To run the `cards-app` CLI:

```
    // run the draw command without passing any options
    node cli.js draw

    // run the draw command and pass shuffle (true or false)
    node cli.js draw --shuffle true

    // run the draw command and pass count (1-52)
    node cli.js draw --count 5

    // run the draw command and pass shuffle (true or false) and pass count (1-52)
    node cli.js draw --shuffle true --count 5
```