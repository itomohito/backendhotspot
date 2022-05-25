//mongodb+srv://itomohito:<password>@cluster0.xytus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');

/*const connectDB = require('./server/database/connection');*/

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
 useNewUrlParser: true
}).then(() => {
 console.log("Databse Connected Successfully!!");
}).catch(err => {
 console.log('Could not connect to the database', err);
 process.exit();
});


/*app.get("/", function (req, res){
 res.render("index.ejs")
});*/

app.use(express.static('public'));

app.use("/", require("./routes/root.js"));
app.use("/tops", require("./routes/tops.js"));
app.use("/login", require("./routes/login.js"));
app.use("/userprofile", require("./routes/userprofile.js"));
app.use("/loginadmin", require("./routes/loginadmin.js"));
app.use("/adminprofile", require("./routes/adminprofile.js"))

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

 app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
