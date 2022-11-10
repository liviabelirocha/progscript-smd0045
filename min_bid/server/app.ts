import path from "path";

import express from "express";
import bodyParser from "body-parser";

import { router } from "./router";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
