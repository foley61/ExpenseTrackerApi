const mongoose = require("mongoose")


const dbConnection = function(){
    mongoose.connect(process.env.MONGODB)
      .then(() => {console.log("db connected")})
      .catch((err) => {console.log("db not connected",err)})
}

module.exports = {
    mongoose,
    dbConnection
}