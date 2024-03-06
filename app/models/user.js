import mongoose, { Schema } from "mongoose";

const UserSachema = new  Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
});