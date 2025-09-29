const express = require("express")
const {addition, soustraction, multiplication, division} = require("./calc")
const router = express.Router();


router.get("/add", (req, res) => {
    const {a, b} = req.query
    res.json({result: addition(Number(a), Number(b))})
})

router.get("/soustraction", (req, res) => {
    const {a, b} = req.query
    res.json({result: soustraction(Number(a), Number(b))})
})

router.get("/multplication", (req, res) => {
    const {a, b} = req.query
    res.json({result: multiplication(Number(a), Number(b))})
})


router.get("/division", (req, res) => {
    const {a, b} = req.query
    try {
        res.json({result: division(Number(a), Number(b))})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})
module.exports = router;