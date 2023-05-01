const express = require("express");

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const placeRouter = require("./routes/place");
const roomRouter = require("./routes/room");
const siteRouter = require("./routes/site");
const blogRouter = require("./routes/blog")

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
const publicPath = path.join(__dirname, "./public");
app.use("/public", express.static(publicPath));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/place", placeRouter);
app.use("/api/room", roomRouter);
app.use("/api/site", siteRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URL;

mongoose.set('strictQuery', false);
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    })
}).catch(err=> {
    console.log('Error: ', err)
});

