import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    cartData: { type: Object, default: {} },
    googleId: { type: String, unique: true, sparse: true },
    createdAt: { type: Date, default: Date.now }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

// Find or create a user using Google ID
export const findOrCreateUser = async (profile) => {
  // Try to find a user with the given Google ID
  let user = await userModel.findOne({ googleId: profile.id });
  
  if (!user) {
    // If user doesn't exist, create a new one with Google profile details
    user = new userModel({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value, // Use the first email from the profile
    });

    // Save the new user to the database
    await user.save();
  }

  // Return the found or newly created user
  return user;
};

export default userModel;
