import express from "express";
import { v4 as uuidv4 } from "uuid"; // To generate blog is
import methodOverride from "method-override";

const app = express();
const port = 3000;

let blogTitles = [];

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Get home page
app.get("/", (req, res) => {
    res.render("index.ejs", { blogTitles: blogTitles });
});

// Get contact page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Get about page
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Get Viewpost page by id
app.get("/viewPost/:id", (req, res) => {
    const postId = req.params.id;
    const post = blogTitles.find((p) => p.id === postId);

    if (post) {
        res.render("viewPost.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// Get page to fill out form
app.get("/submit", (req, res) => {
    res.render("submit.ejs");
});

// Post form to /submit
app.post("/submit", (req, res) => {
    // Store id, title, and content
    const blogPost = {
        id: uuidv4(),
        title: req.body.blogTitle,
        content: req.body.blogPost,
    };

    // Push blogTitle to blogTitles list
    blogTitles.push(blogPost);

    // Redirect back to home page
    res.redirect("/");
});

// Get edit page
app.get("/edit/:id", async (req, res) => {
    // Storing post id
    const postId = req.params.id;
    const post = blogTitles.find((p) => p.id === postId);

    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// Using Put to edit post
app.put("/update/:id", async (req, res) => {
    const postId = req.params.id;
    const postIndex = blogTitles.findIndex((p) => p.id === postId);

    // If post is in array
    if (postIndex !== -1) {
        blogTitles[postIndex] = {
            // Using spread operator to create new object with all properties of existing post
            ...blogTitles[postIndex],
            title: req.body.blogTitle,
            content: req.body.blogPost,
        };
        res.redirect(`/viewPost/${postId}`);
    } else {
        res.status(404).send("Post not found");
    }
});

// Delete post
app.delete("/viewPost/:id", (req, res) => {
    const postId = req.params.id;
    const postIndex = blogTitles.findIndex((p) => p.id === postId);

    if (postIndex !== -1) {
        // Removing post
        blogTitles.splice(postIndex, 1);
        res.redirect("/");
    } else {
        res.status(404).send("Post not found");
    }
});

app.listen(port, () => {
    console.log(`You are listening to port: ${port}`);
});
