const { mongoose } = require("../configs/dbConnection")
const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (email) => email.includes("@") && email.includes(".")

    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, {
    collection: "user",
    timestamps: true
})

module.exports = mongoose.model("User",UserSchema)