const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./server/users");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = 3000;

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    users.push({
        name,
        email,
        password
    });

    res.json({
        message: "Signup successful"
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    res.json({
        message: "Login successful",
        user
    });
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});