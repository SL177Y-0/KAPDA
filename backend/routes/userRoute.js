import express from 'express';
import passport from '../config/passport.js'; // Import your passport config
import { loginUser, registerUser, adminLogin, googleAuthSuccess } from '../controllers/userController.js';

const userRouter = express.Router();

// Regular user registration and login routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// Google Auth Routes
// Route to start Google OAuth login (redirects to Google)
userRouter.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'], // Define what data to request from Google
  })
);

// Route to handle the Google OAuth callback (after successful login)
userRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }), // Redirect to /login if authentication fails
  googleAuthSuccess // Handle what happens after successful authentication
);

export default userRouter;
