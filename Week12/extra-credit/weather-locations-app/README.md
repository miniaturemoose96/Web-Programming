## Extra Credit (Optional) DUE Sunday 04/19 - 11:59PM  (10pts)
## Extra Credit Grade will be ADDED to the Grade on Lab 2 (Week 06)

---

#### Using the weather-locations-app template fill in all the logic needed to make the application functional.

---
### App Requirements.
Using the weather.gov API.  Get a list of of locations, allow the user to select a location and fetch data by id.  Organize the data fetched by id into two catagories (fire and forecast).  Print to the console only the details that were organized into the two categories. For full credit please see the grading criteria.

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, description, dependencies, etc)
  - Create and fill in package.json

**config.json** <br/>
 - Should contain the base URL for the API.
 - Fill in config.json

**cli.js** <br/>
  - The CLI app should display a help menu by typing: `node cli.js help`
  - The CLI should include a locations command `node cli.js locations`
  - Fill in the cli.js to meet the above criteria.

 **app.js** <br/>
  - Fill in the all functions outlined in app.js. Do not remove any of the outlined functions.
  - Follow the instructions outlined in app.js per function.
  - the final result printout MUST be formatted like the below
    - capitalize the category name
    - each location product type should have the same casing as returned from the API

Sample Printout:
```
    FIRE
    -- Fire Danger Indices
    -- Routine Fire Wx Fcst (With/Without 6-10 Day Outlook)
    -- Miscellaneous Fire Weather Product
    -- Fire Weather Notification
    -- Fire Weather Observation
    -- Fire Weather Point Forecast Matrices
    FORECAST
    -- Area Forecast Discussion
    -- Suppression Forecast
    -- Point Forecast Matrices
    -- Fire Weather Point Forecast Matrices
    -- Tabular State Forecast
    -- Spot Forecast Request
    -- Terminal Aerodrome Forecast
    -- Terminal Aerodrome Forecast (TAF) Verification
    -- Zone Forecast Product
```
---

### WHAT TO UPLOAD TO CSNS

- ZIP File with 1 folders inside
  - FOLDER for the weather-locations-app which includes - ONLY cli.js app.js, package.json, config.json
  (Do not include node modules)

---

### GRADING

  - Code covers/includes exactly what is detailed in the requirements above and inside app.js
  - Code uses proper ES6 syntax including using let/const properly. Do not use var. All variable should be declared. (Point loss -5)
  - Code is clean and formatted. Variables names make sense and are logical. (Point loss -5)
  - Nothing is hard coded. (Point loss -5)
  - There should be no use of setTimeout() or setInterval() (Point loss -10)

---



