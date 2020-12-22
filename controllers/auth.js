import { User } from '../models/user.js';

export const renderRegister = (req, res) => {
    res.render("registration.ejs", { path: "Registration" });
}

export const renderLogin = (req, res) => {
    res.render("registration.ejs", { path: "Registration" });
}

export const register = (req, res) => {
    //res.render("register.ejs", {path: "registration.ejs", errorMessage:{message: "Correo Inválido"}});
    const {fullname, email, password} = req.body;
    const [firstName, lastName] = fullname.split(' ');

    const newUser = new User({firstName, lastName, email, password});
    newUser.save().then((user) => {
        console.log(user);
        res.end();
    })
    .catch(err => {
        console.log(err);
        res.status(402).json({message: "Correo Inválido"});
    })

    res.end();
}

export const login = (req, res) => {

}

// Exportando los módulos.
export default { renderRegister, renderLogin, register, login };