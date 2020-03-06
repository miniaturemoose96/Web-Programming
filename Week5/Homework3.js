// WEEK 5: Homework 3
// By: Alejandro Bernal

// Problem 1: Using callbacks syntax write a set of functions that checks and makes a list of websites running(20pt)
const websites = [{
        site: 'yahoo.com',
        responseTime: 50,
        unit: 'ms'
    },
    {
        site: 'google.com',
        responseTime: 10,
        unit: 'ms'
    },
    {
        site: 'reddit.com',
        responseTime: null,
        unit: 'ms'
    },
    {
        site: 'slack.com',
        responseTime: 80,
        unit: 'ms'
    },
    {
        site: 'github.com',
        responseTime: 30,
        unit: 'ms'
    }
];

const checkResponseTime = (website, callback) => {
    const { site, responseTime = 0 } = website;
    setTimeout(function() {
        const error = !responseTime ? ` ${site} cannot be reached` : null;
        const result = { site: `${site}`, response: responseTime };
        callback(error, result);
    }, responseTime);
};

const websitesResponseTimes = websites => {
    let Response = [];
    let NoResponse = [];
    websites.forEach(url => {
        checkResponseTime(url, (err, result) => {
            if (!err) {
                Response.push(result);
            } else {
                NoResponse.push(err);
            }

            if (Response.length + NoResponse.length === websites.length) {
                console.log('Response: ', Response);
                console.log('No Response: ', NoResponse);
            }
        });
    });
};


websitesResponseTimes(websites);


// Problem 2: Using Promises syntax write a set of functions that performs operations the given db. (20)
const database = [{
        id: 1,
        entry: 'Space X',
        twitter: '@spacex'
    },
    {
        id: 2,
        entry: 'NASA',
        twitter: null
    },
    {
        id: 3,
        entry: 'Apple',
        twitter: '@apple'
    },
    {
        id: 4,
        entry: 'Microsoft',
        twitter: '@microsoft'
    },
    {
        id: 5,
        entry: 'Reddit',
        twitter: null
    }
];

const bucketTwitters = (account) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const error = !account.twitter ? account : null;
            if (error) {
                reject(error);
            } else {
                resolve(account);
            }
        }, 10);
    });
}

const loopAccountsPromises = (database) => {
    let found = []
    let missing = []
    let obj = {}
    database.forEach(account => {
        bucketTwitters(account)
            .then(result => {
                found.push(result);
            })
            .catch(error => {
                missing.push(error);
            }).then(() => {

                if (found.length + missing.length === database.length) {
                    obj['Found'] = found;
                    obj['Missing'] = missing;
                    console.log(obj);
                }
            })
    });
}

loopAccountsPromises(database);


// Problem 3: Using async/await syntax and bucketTwitters() function from Problem #2 that performs operations the given db. (10)
const loopAccountAsync = (database) => {
    const obj = {};
    let found = [];
    let missing = [];
    database.forEach(async account => {
        try {
            const bucket = await bucketTwitters(account);
            if (bucket) {
                found.push(account);
            }
        } catch (error) {
            missing.push(error);
        }

        if (found.length + missing.length === database.length) {
            obj['Found'] = found;
            obj['Missing'] = missing;
            console.log(obj);
        }
    });
}

loopAccountAsync(database);