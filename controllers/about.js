export const renderAbout = (req, res) => {
    res.render("about.ejs", {path:"About"});
}

export default { renderAbout };