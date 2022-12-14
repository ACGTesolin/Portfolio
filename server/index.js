const express = require('express');
const morgan = require("morgan");
const app = express();



app.use(morgan("tiny"))
app.use(express.json())


app.get("/", (req, res) => {
    res.send('Hello World')
})


.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})


// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));