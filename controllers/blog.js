
import { Post } from '../models/post.js';

export const renderBlog = (req, res) => {
    Post.find((err, posts) => {
        res.render("blog.ejs", {path: "Blog", posts: posts });
    })
}

export const post = (req, res) => {
    const postRecibido = new Post({ title: req.body.title, body: req.body.body });
    postRecibido.save((err) => {
        res.redirect('/');
    })
}

export default { renderBlog, post };