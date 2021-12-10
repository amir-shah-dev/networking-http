const express = require('express');
const bodyparser = require('body-parser');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// router.get('/:operation/:num1/:num2', (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.send(req.params);
//     // res.end("Welcome");
// });

router.get('/:operation/:num1(\\d+)/:num2(\\d+)', function (req, res) {
    if (req.params.operation === "add") {
        res.set("Content-Type", "text/plain")
        solution = Number(req.params.num1) + Number(req.params.num2)
        res.send(String(solution))
    } else if (req.params.operation === "subtract") {
        res.set("Content-Type", "text/plain")
        solution = Number(req.params.num1) - Number(req.params.num2)
        res.send(String(solution))
    } else if (req.params.operation === "multiply") {
        res.set("Content-Type", "text/plain")
        solution = Number(req.params.num1) * Number(req.params.num2)
        res.send(String(solution))
    } else if (req.params.operation === "divide") {
        res.set("Content-Type", "text/plain")
        if (Number(req.params.num2) == 0) {
            res.send("undefined")
        }
        solution = Number(req.params.num1) / Number(req.params.num2)
        res.status(200).send(String(solution)).end();
    } else {
        res.send(404);
    }
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

router.post('/', function (req, res) {
    // var operation = req.body.operation;
    // var arguments = req.body.arguments;

    if (req.body.operation === "add") {
        res.set("Content-Type", "application/json")
        solution = Number(req.body.arguments[0]) + Number(req.body.arguments[1])
        res.json({"result": solution})
    } else if (req.bodyoperation === "subtract") {
        res.set("Content-Type", "application/json")
        solution = Number(req.body.arguments[0]) - Number(req.body.arguments[1])
        res.json({"result": solution})
    } 
    // else if (operation === "multiply") {
    //     res.set("Content-Type", "application/json")
    //     solution = Number(arguments[0]) * Number(arguments[1])
    //     res.json({"result": solution})
    // } else if (operation === "divide") {
    //     res.set("Content-Type", "application/json")
    //     if (Number(arguments[1]) == 0) {
    //         res.json({"result": null})
    //     }
    //     solution = Number(arguments[0]) / Number(arguments[1])
    //     res.json({"result": solution})
    // } else {
    //     res.send(404);
    // }
});

app.use('/', router);
module.exports.handler = serverless(app);