import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    googleId: String,
    githubId: String,
    password: String,
    avatar: String,
    bio: String,
    location: String,
    website: String,
    twitter: String,
    github: String,
    linkedin: String,
    verifyToken: String,
    verifyTokenExpiry: Date,
    isVerified: { type: Boolean, default: false },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);