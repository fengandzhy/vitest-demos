const express = require("express");

const app = express();
const port = 4430;

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/posts", (req, res) => {
    res.json([
        {
            userId: 1,
            id: 1,
            title: "first post title",
            body: "first post body",
        },
        {
            userId: 2,
            id: 2,
            title: "second post title",
            body: "second post body",
        },
        {
            userId: 3,
            id: 3,
            title: "third post title",
            body: "third post body",
        },
    ]);
});

app.get("/comments", (req, res) => {
    res.json([
        {
            userId: 1,
            id: 1,
            content: "first content",
        },
        {
            userId: 2,
            id: 2,
            content: "second content",
        },
        {
            userId: 3,
            id: 3,
            content: "third content",
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});