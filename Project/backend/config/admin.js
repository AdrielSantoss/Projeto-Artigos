module.exports = middleware => {
    return (req, res,next) => {
        if(req.user.admin){
            middleware(req, res,next)
        } else {
            res.status(401).send('O usuário não possui permissões de administrador')
        }
    }
}