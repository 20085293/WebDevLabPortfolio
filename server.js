// use javascript in strict mode
'use strict';

// import all required modules
import exphbs from "express-handlebars";
import logger from "./utils/logger.js";

import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

// initialise project
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static files output to public folder
app.use(express.static("public"));

// use handlebars as view engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

// import routes file and use this for routing
import routes from "./routes.js";
app.use("/", routes);


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  logger.info("Your app is listening on port " + listener.address().port);
});

