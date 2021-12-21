const { admin } = require("../../config/firebaseAdmin")

exports.deleteUserController = async function (req, res) {
    try {
        const { params: { uid } } = req
        console.log("uid", uid)

        const isDeleted = await admin.auth().deleteUser(uid)
        console.log("isDeleted", isDeleted)

        return res.json({ success: true, status: 200 })

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
};