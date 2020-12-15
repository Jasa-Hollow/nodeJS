import { posts } from '../models/post.js';

export const renderBlog = (req, res) => {
    res.render("blog.ejs", {path:"Blog", posts: posts });
}

export default { renderBlog };