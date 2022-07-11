
const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "build")));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build' , 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    })
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})
