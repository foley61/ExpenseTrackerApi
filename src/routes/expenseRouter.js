
const router = require("express").Router()

const expense = require("../controllers/expenseController")
const permissions = require("../middlewares/permissions")
router.route("/")
    .get(permissions.isLogin,expense.list)
    .post(permissions.isLogin,expense.create)

router.route("/:id")
    .get(permissions.isLogin,expense.read)
    .put(permissions.isLogin,expense.update)
    .delete(permissions.isLogin,expense.delete)
module.exports = router