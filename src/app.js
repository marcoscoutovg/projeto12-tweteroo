import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const users = [];
const tweetList = [];
let imgProfile = "";

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    const user = { username, avatar };
    imgProfile = avatar;
    users.push(user);
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    res.send(tweetList.slice(-10).reverse());
});

app.post("/tweets", (req, res) => {

    const { username, tweet } = req.body;
    const infoTweet = { username, avatar: imgProfile, tweet };

    if (!username || !users.find(u => u.username === username)) {
        return res.send("UNAUTHORIZED");
    }

    tweetList.push(infoTweet);

    res.status(200).send("OK");
});


app.listen(PORT, () => console.log("funcionou"));
