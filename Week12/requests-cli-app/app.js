const superagent = require('superagent');
const url = `localhost:8888`;

const get = async () => {
    try {
        const response = await superagent.get(`${url}/json`);
        console.log(response.body);
    } catch (error) {
        return error;
    }
};

const post = async (data) => {
    try {
        console.log(data)
        const response = await superagent.post(`${url}/json`).send({ data });
        console.log(response.body);
    } catch (error) {
        return error;
    }
};

module.exports = {
    get,
    post,
};
