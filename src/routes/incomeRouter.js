const router = require("express").Router()

const income = require("../controllers/incomeController")
const permissions = require("../middlewares/permissions")
router.route("/")
    .get(permissions.isLogin,income.list)
    .post(permissions.isLogin,income.create)
router.route("/:id")
    .get(permissions.isLogin,income.read)
    .put(permissions.isLogin,income.update)
    .delete(permissions.isLogin,income.delete)

module.exports = router