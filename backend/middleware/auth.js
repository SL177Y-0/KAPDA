import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";
import passport from "../config/googleAuth.js";

const authUser = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Please log in again.' });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(token_decode.id);
        if (!user) {
            return res.json({ success: false, message: 'User not found.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Invalid or expired token. Please log in again.' });
    }
};

const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

const googleAuthCallback = passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
});

const googleAuthSuccess = async (req, res) => {
    try {
        const { id, displayName, emails } = req.user;
        let user = await userModel.findOne({ email: emails[0].value });
        if (!user) {
            user = new userModel({
                name: displayName,
                email: emails[0].value,
                googleId: id,
            });
            await user.save();
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Google authentication failed.' });
    }
};

export { authUser, googleAuth, googleAuthCallback, googleAuthSuccess };
