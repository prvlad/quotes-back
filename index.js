const app = require("express")();
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

app.use("/", routes);

app.listen(process.env.port || 3000);
