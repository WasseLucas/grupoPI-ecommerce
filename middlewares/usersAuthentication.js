
const userAuthenticated = (req, res, next) => {

    if(req.session.user == undefined){

        return res.redirect('/login')
    }

    //se usuario tiver logado continua execução
    next();
}

module. exports =  userAuthenticated;