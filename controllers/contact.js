
export const renderContact = (req, res) => {
    res.render("contact.ejs", {path:"Contact"});
}

const contact = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

export default { renderContact, contact }
