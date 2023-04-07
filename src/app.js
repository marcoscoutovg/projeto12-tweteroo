import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const users = []
const tweetList = [];
const imgProfile = ""

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    imgProfile = avatar;
    const user = { username, avatar };
    users.push(user);
})

app.get("/tweets", (req, res) => {
    const { username, tweet } = req.body
    res.send(tweetList);
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    if (!username) {
        return res.send("UNAUTHORIZED")
    }

    const infoTweet = { username, avatar: imgProfile, tweet };
    tweetList.push(infoTweet);
    res.status(200).send("OK");
})


app.listen(PORT, () => console.log("funcionou"));
