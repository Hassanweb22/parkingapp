
var admin = require("firebase-admin");

var serviceAccount = require("./parkingapp-serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://parkingapp-a3b26-default-rtdb.firebaseio.com"
});

module.exports = { admin };
