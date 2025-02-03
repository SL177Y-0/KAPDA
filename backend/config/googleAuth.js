const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const { findOrCreateUser } = require('../models/user'); // Custom function for user logic

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Use profile info (from Google) to find or create a user
        const user = await findOrCreateUser(profile);
        return done(null, user); // Pass the user object to the session
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user); // Store user info in session
});

passport.deserializeUser((user, done) => {
  done(null, user); // Deserialize user when needed
});

module.exports = passport;
