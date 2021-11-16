const express = require('express');

const app = express();
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('./'));

app.get('/', (rq, res) => {
    res.sendFile(__dirname + '\\dict.html');
});
app.post('/search', (req, res) => {
    let searchKey = req.body.key;

    var keyDefinitions = require("./word.js");
    keyDefinitions.search(searchKey, res);

});

let port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port} `));