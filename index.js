import express from 'express';

const app = express();
const port = 3000;

let blogTitles = [];

app.use(express.static("public"));

app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { blogTitles: blogTitles});
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

app.get("/entry", (req, res) => {
    res.render("entry.ejs");
})

app.post("/create", (req, res) => {
    const blogTitle = req.body.blogTitle;

    blogTitles.push(blogTitle);

    res.redirect("/");
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