'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let Gpio = require('onoff').Gpio;
let app = express();

let led = Gpio(2, 'out');

app.use(bodyParser.json());

app.post('/led', function (req, res) {
    let value = parseInt(req.body.value);
    led.write(value, () => {
        res.send();
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
