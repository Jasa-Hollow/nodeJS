export const renderHome = (req, res) => {
    res.render("index.ejs", {path:"Home"});
}

export default { renderHome }