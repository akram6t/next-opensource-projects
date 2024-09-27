import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
  name: { type: String, required: true, unique: true },
  technologyType: [{ type: Schema.Types.ObjectId, ref: 'TechnologyType' }],
  platforms: [{ type: Schema.Types.ObjectId, ref: 'Platform' }],
  icon: String
});

export default mongoose.models.Technology || mongoose.model('Technology', TechnologySchema);