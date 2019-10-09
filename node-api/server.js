const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const logs = [{
        id: 1,
        user: 'Alberto',
        checkin: '11:00'
    },
    {
        id: 2,
        user: 'Astolfo',
        checkin: '10:45'
    },
    {
        id: 3,
        user: 'Francisco',
        checkin: '10:20'
    },
]

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.route('/api/logs').get((req, res) => {
    res.send(logs)
});

app.route('/api/logs/:id').get((req, res) => {
    result = logs.find(function (el) {
        return el.id == req.params['id']
    });
    res.send(result ? result : 'Log not found');
});

app.route('/api/logs/new').post((req, res) => {
    if (req.body) {
        logs.push(req.body);
        res.send(201, req.body)
    } else {
        res.send(202, 'Invalid log format')
    }
})

app.route('/api/logs/:id/update').put((req, res) => {
    if (req.body) {
        var index = logs.findIndex(function (el) {
            return el.id == req.params['id'];
        });
        logs[index] = req.body
        res.send(200, req.body)
    } else {
        res.send(202, 'Invalid format or log not found');
    }
})

app.route('/api/logs/:id/delete').delete((req, res) => {
    var index = logs.findIndex(function (el) {
        return el.id == req.params['id'];
    });
    logs.splice(index);
    res.sendStatus(204)
})

app.listen(3001);