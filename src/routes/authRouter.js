const router = require("express").Router()

const auth = require("../controllers/authController")
// Login/logout:
router.post('/login', auth.login)
router.all('/logout', auth.logout)

module.exports = router
   