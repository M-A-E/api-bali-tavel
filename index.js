const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./src/router");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/v1", route);

const port = process.env.APP_PORT;

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
        return;
    }
    console.log(`Running on http://localhost:${port}`);
});
