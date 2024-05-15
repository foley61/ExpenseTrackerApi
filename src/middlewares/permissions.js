
module.exports = {
    isLogin: (req,res,next) => {
        if(req.user && req.user.isActive){
            next()
        }else{
            res.errorStatusCode = 403
            throw new Error("you must login")
        }
    }
}