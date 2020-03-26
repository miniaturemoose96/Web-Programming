# Studio Ghibli API module
## By: Alejandro Bernal

### Base url for films: *https://ghibliapi.herokuapp.com/films*

* Making use of the **films** endpoint, focusing on using:
    * id
    * title
    * description
    * release_date
    * rt_score

## How to Use the Studio Ghibli CLI and Custom Module Dependencies

1. Go into the `Ghibli_cli_app` folder.  Once inside the folder run: `npm install`.  This will install all the dependencies listed in the package.json.

2. Go into the `Ghibli_module` folder.  Once inside the folder run: `npm install`.  This will install all the dependencies listed in the package.json.

3. To view the help directions for the CLI run: `node cli.js --help`.

4. To run, go to the `cli.js` file from `Ghili_cli_app`:

```
    // Run the search command
    node cli.js search
    // Run search with a keyword
    node cli.js search -k castle

```