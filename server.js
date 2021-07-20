const express = require('express');
const path = require('path');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));

const fetch = require('node-fetch');

/**
 * Executes a node-fetch request.
 * @param {*} numberOfRecords number of jokes that we want from the API.
 */
const executeNodeFetch = (numberOfRecords = 10)=> {
    fetch(`http://api.icndb.com/jokes/random/${numberOfRecords}`).then(res => res.json()).then(json => {
        json?.value?.forEach((item, index) => console.log(index, item.joke));
    });
}

app.listen(port, hostname, () => {
    executeNodeFetch();

    console.log(`Server running at http://${hostname}:${port}/`);
});
