export const renderContact = (req, res) => {
    res.render("contact.ejs", {path:"Contact"});
}

export default { renderContact }