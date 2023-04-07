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

    if (!username || !avatar) {
        return res.send("UNAUTHORIZED")
    }

    imgProfile = avatar;
    const user = { username, avatar };
    users.push(user);
    res.status(200).send("OK");
})

app.get("/tweets", (req, res) => {
    const { username, tweet } = req.body
    res.send(tweetList);
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const infoTweet = { username, avatar: imgProfile, tweet };
    tweetList.push(infoTweet);
    res.send("OK");
})


app.listen(PORT, () => console.log("funcionou"));
