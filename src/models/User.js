import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    }
},
{
    versionKey: false,
    timestamps: true,
    strict: false
});

const user = models.user || model("user", UserSchema)

export default user;