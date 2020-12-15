export const parseBody = (req, res, next) => {
    let datos = '' ;
    req.on('data', pedazoDeDatos => {
        datos += pedazoDeDatos
    })
    req.on('end', () => {
        req.body = datos
        next()
    })
}