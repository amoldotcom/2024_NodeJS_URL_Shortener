const express = require("express");
const app = express();

const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", express.static(path.join(__dirname, "public")));

const dotenv = require("dotenv");
dotenv.config();

// MongoDB conenction
const connectDB = require("./db/connectDB.js");
const DB_URL = process.env.MONGODB_URI;
connectDB(DB_URL);

// Routes
const indexRouter = require("./routes/indexRouter.js");
app.use(indexRouter);

// Error Handler Middleware
const { errorHandler, error404Handler } = require("./middlewares/errorHandler.js");
app.use(error404Handler);
app.use(errorHandler);

// Listener
const port = process.env.PORT;;

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
