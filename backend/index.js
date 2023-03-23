const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database.config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3030;

app.get('/', (req, res) => {
    res.send("Bienvenue dans la concession !");
});

const baseRoute = '/api/v1';

// const userRoute = require('./routes/user.route');
// app.use(`${baseRoute}/users`, userRoute);

app.listen(port, async () => {
    try {
        console.log(`Serveur connecté au port ${port}.`);
        await sequelize.authenticate("");
        console.log("BDD connectée.");
    } catch (error) {
        console.log(error);
    }
});