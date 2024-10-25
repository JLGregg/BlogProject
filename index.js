import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // To generate blog is

const app = express();
const port = 3000;

let blogTitles = [];

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended:true }));

// Get home page
app.get("/", (req, res) => {
    res.render("index.ejs", { blogTitles: blogTitles});
})

// Get contact page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

// Get about page
app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/viewPost", (req, res) => {
    // TODO: add correct code
    res.send("view");
})

// Get page to fill out form
app.get("/submit", (req, res) => {
    res.render("entry.ejs");
})

// Post form to /submit
app.post("/submit", (req, res) => {
    // Store id, title, and content
    const blogPost = {
        id: uuidv4(),
        title: req.body.blogTitle,
        content: req.body.blogPost
    };

    // Push blogTitle to blogTitles list
    blogTitles.push(blogTitle);

    // Redirect back to home page
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