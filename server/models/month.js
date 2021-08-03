import mongoose from "mongoose";

const monthSchema = mongoose.Schema({
    _id: { type: String },   
    month: { type: String, required:  true },
    year: { type: String, required: true },
    monthBudget: String,
    details: { 
        type: [String], 
        default: [],
        expenses: { type: [String], default: [] }
    },

});

export default mongoose.model("Month", monthSchema);