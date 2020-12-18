export const parseBody = (req, res, next) => {
    let datos = '' ;
    req.on('data', pedazoDeDatos => {
        datos += pedazoDeDatos
    })
    req.on('end', () => {
        const jsonBody = JSON.parse(datos);
        req.body = jsonBody;
        next();
    })
}