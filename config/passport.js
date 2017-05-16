var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./model_user');

// TESTING USER CREATION
User.findOne({ 'email': "test email" }, function(err, user) {
    if (err) {
        console.log("error");
    }
    if (user) {
        console.log("test user already exists");
    } else {
        // create test user
        var testUser = new User();
        testUser.name = "test user";
        testUser.password = testUser.generateHash("test password");
        testUser.email = "test email";
        testUser.save(function(err) {
            if (err) throw err;
            console.log("saved test user");
        });
    }
});

// for sessions: serialize user data
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// for sessions: deserialize
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// registration handler
passport.use('local-register', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        process.nextTick(function() {
            // find user in database
            User.findOne({ 'email': email }, function(err, user) {
                console.log("FIND CALLED", user);

                // error
                if (err)
                    return done(err);

                // check if user exists - if not, create
                if (user) {
                    return done(null, false);
                } else {
                    // create new user
                    var newUser = new User();
                    newUser.name = req.body.name;
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);

                    // save user to db
                    newUser.save(function(err) {
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }
));

// login handler
passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        User.findOne({ 'email': email }, function(err, user) {
            // error
            if (err)
                return done(err);

            // user not found
            if (!user)
                return done(null, false);

            // user password wrong
            if (!user.validPassword(password))
                return done(null, false);

            // user logged in!
            return done(null, user);
        });
    }
));

module.exports = passport;
