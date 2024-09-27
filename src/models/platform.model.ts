import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const platformSchema = new Schema({
    name: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Platform || mongoose.model('Platform', platformSchema);