import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectCategoryEnum = ['Web', 'Mobile', 'Desktop', 'API', 'Other'];
const technologyCategoryEnum = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Other'];

// Author Schema
const AuthorSchema = new Schema({
  name: { type: String, required: true },
  bio: String,
  email: String,
  profilePicture: String,
  githubProfileUrl: String,
  twitterProfileUrl: String,
  linkedinProfileUrl: String,
  youtubeChannelUrl: String,
  website: String
})

// Technology Schema
const StackSchema = new Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String },
  icon: String
});


// Technology Schema
const TechnologySchema = new Schema({
  name: { type: String, required: true, unique: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'Stack' }],
  icon: String
});

// Project Schema
const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: AuthorSchema,
  platforms: [String],
  technologies: [{ type: Schema.Types.ObjectId, ref: 'Technology' }],
  sourceUrl: { type: String, required: true },
  demoUrl: String,
  thumbnail: String,
  screenShots: [String],
  views: { type: Number, default: 0 },
  tags: [String],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

// Comment Schema
const CommentSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create models
const Technology = mongoose.model('Technology', TechnologySchema);
const Project = mongoose.model('Project', ProjectSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const Stack = mongoose.model('Stack', StackSchema);

module.exports = { Technology, Project, Comment, Stack };