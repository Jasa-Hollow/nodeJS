export const renderContact = (req, res) => {
    res.render("contact.ejs", {path:"Contact"});
}

const contact = (req, res) => {
    console.log(req.body);
    res.end();
}

export default { renderContact, contact }