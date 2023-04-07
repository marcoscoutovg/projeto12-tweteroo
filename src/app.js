import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const users = []
const tweetFormat = []
const tweetList = [];

app.get("/tweets", (req, res) => {
    console.log(req.params)
    res.send(tweetList);
})

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    const user = {username, avatar}
    users.push(user)
    res.send("OK")
})

app.listen(PORT, () => console.log("funcionou"));
