import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const technologyTypeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  icon: String
});

export default mongoose.models.TechnologyType || mongoose.model('TechnologyType', technologyTypeSchema);