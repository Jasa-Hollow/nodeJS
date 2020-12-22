import { Post } from '../models/post.js';

export const renderBlog = (req, res) => {
    Post.find((err, posts) => {
        res.render("blog.ejs", {path: "Blog", posts: posts });
    })
}

export const newPost = (req, res) => {
    const postRecibido = new Post({ title: req.body.title, body: req.body.body });
    postRecibido.save((err) => {
        res.redirect('/blog');
    })
}

export const detail = (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        res.render('post-detail.ejs', {path: "Post Detail", post: post});
    })
}

export const renderNewPost = (req, res) => {
    res.render('new-post.ejs', {path: "New Post"});
}

export default { renderBlog, newPost, renderNewPost, detail };