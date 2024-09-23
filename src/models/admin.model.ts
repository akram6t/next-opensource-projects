import mongoose from 'mongoose';

export interface IAdmin {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
}

const adminSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password:String,
    profilePicture: String,

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,

});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export default Admin;