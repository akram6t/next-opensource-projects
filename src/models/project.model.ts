import mongoose from 'mongoose';
const Schema = mongoose.Schema;

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
  });

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: AuthorSchema,
    platforms: [{ type: Schema.Types.ObjectId, ref: 'Platform' }],
    technologyTypes: [{ type: Schema.Types.ObjectId, ref: 'TechnologyType' }],
    technologies: [{ type: Schema.Types.ObjectId, ref: 'Technology' }],
    sourceUrl: { type: String, required: true },
    demoUrl: String,
    thumbnail: String,
    screenShots: [String],
    views: { type: Number, default: 0 },
    tags: [String],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);