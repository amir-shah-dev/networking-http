const express = require('express');
const serverless = require('serverless-http');

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

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use('/', router)
module.exports.handler = serverless(app);