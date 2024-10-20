import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // TODO: add res.render for ejs
    res.send("home");
})

app.get("/view", (req, res) => {
    // TODO: add correct code
    res.send("view");
})

app.post("/create", (req, res) => {
    // TODO: add correct code
    res.send("create");
})

app.patch("/edit", (req, res) => {
    // TODO: add correct code
    res.send("edit");
})

app.delete("/delete", (req, res) => {
    // TODO: add correct code
    res.send("delete");
})

app.listen(port, () => {
    console.log(`You are listening to port: ${port}`);
})