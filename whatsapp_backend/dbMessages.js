import mongoose from "mongoose";
// const mongoose = require('mongoose');

const whatsappSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

export default mongoose.model('messagecontent', whatsappSchema);