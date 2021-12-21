const express = require('express')
const cors = require('cors')
const userRouter = require('./src/routes/userRouter')
const path = require('path');

const app = express()



app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    return res.send("Hello WOrld")
})
app.use('/users', userRouter)

const Port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, "..", "..", "bootcamperproject", "build");
console.log("publicPath", publicPath);

if (process.env.NODE_ENV == "production") {
    app.use(express.static(publicPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(publicPath, 'index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(Port, () => console.log(`Server listening on port ${Port}!`))