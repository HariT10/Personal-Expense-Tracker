
//loads in the stuff from .env file 
require("dotenv").config();

//creates and manages the backend server part, express is a node.js framework
const express = require("express");
const cors = require("cors");

//path to different files
const path = require("path");


//connects the database aka db.js file
const connectDB = require("./config/db");

//authentacation endpoints, this is for /login, /register, /getUser, /uploadImage. the auth page
const authRoutes = require("./routes/authRoutes");

//this is for the income page. this is for /add income, /get income, /downloadExcel file of income, /deleteIncome by using the ID
const incomeRoutes = require("./routes/incomeRoutes");

//add expense, get expenses, downlaod, delete expense
const expenseRoutes = require("./routes/expenseRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

//this is to create the server
const app = express();

app.get("/ping", (req, res) => {
    console.log("PING RECEIVED");
    res.send("pong");
});



app.use(

    cors({origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]

    })

)
//app.use(express.urlencoded({ extended: true }));

app.use(express.json());

connectDB();



app.use("/api/v1/auth", authRoutes)


app.use("/api/v1/income", incomeRoutes);

app.use("/api/v1/expense", expenseRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);


//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

