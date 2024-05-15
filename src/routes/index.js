"use strict"
const router = require("express").Router()

router.use("/expense",require("./expenseRouter"))

router.use("/income", require("./incomeRouter"))

router.use("/user", require("./userRouter"))
router.use("/auth",require("./authRouter"))
module.exports = router