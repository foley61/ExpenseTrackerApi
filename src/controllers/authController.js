const Token = require("../models/tokenModel")
const User = require("../models/userModel")
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
    login: async(req,res) => {
        const {email,password} = req.body

        if(email && password){
             const user = await User.findOne({email,password})
             if(user && user.isActive){
                let tokenData = await Token.findOne({userId: user.id})
                if(!tokenData){
                    let tokenKey = passwordEncrypt(user.id,Date.now())

                    tokenData = await Token.create({userId: user.id,token: tokenKey})
                 
                }
                res.status(200).send({
                    error: false,
                    token: tokenData.token,
                    user,
                

                })
             }
             else{
                res.errorStatusCode = 401
                throw new Error('Wrong Username or Password.')
             }
        }else{
            res.errorStatusCode = 401
            throw new Error('Please enter username and password.')
        }
    },
    logout: async(req,res)=> {
        req.user = null
    }
}