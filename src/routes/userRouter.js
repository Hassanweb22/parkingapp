const router = require("express").Router()

const { deleteUserController } = require("../controllers/user/deleteUser.controller")


router.post("/delete/:uid", deleteUserController)

module.exports = router