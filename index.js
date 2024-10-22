import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
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