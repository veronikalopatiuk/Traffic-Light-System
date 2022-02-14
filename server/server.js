const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (request, response){
    response.status(200).send("Hello");
})

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));