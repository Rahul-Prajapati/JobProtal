const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
    jobs:{
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,   
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        required: true,
        default: "pending",
    }

});

module.exports = mongoose.model("Application", jobApplicationSchema);