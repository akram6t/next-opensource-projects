const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    website: String
})

const TechnologySchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['language', 'framework', 'library', 'database', 'tool'], required: true }
});

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['web', 'mobile', 'desktop', 'tool', 'library', 'other'], required: true },
  category: { type: String, required: true },
  technologies: [TechnologySchema],
  features: [String],
  repositoryUrl: { type: String, required: true },
  demoUrl: String,
  thumbnailUrl: String,
  screenshots: [String],
  author: AuthorSchema,
  collaborators: [{
    name: String,
    role: String
  }],
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['in-progress', 'completed', 'archived'], default: 'completed' },
  tags: [String],
  complexity: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ProjectSchema.index({ title: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Project', ProjectSchema);