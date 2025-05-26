/**
 * Forces the user to be signed in to be able to access certain routes
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} cb Callback function
 * @returns The return value of the callback function, if any
 */
const requiresLogin = (req, res, cb) => {
    if (!req.session.account) {
        return res.redirect('/');
    }

    return cb();
};

/**
 * User must not be signed in to access certain routes
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} cb Callback function
 * @returns The return value of the callback function, if any
 */
const requiresLogout = (req, res, cb) => {
    if (req.session.account) {
        return res.redirect('/bingo');
    }

    return cb();
};

/**
 * Requires requests made to certain routes to be https
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} cb Callback function
 * @returns The return value of the callback function, if any
 */
const requiresSecure = (req, res, cb) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }

    return cb();
};

/**
 * Ignores https requirements
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} cb Callback function
 */
const bypassSecure = (req, res, cb) => {
    cb();
};

module.exports.requiresLogin = requiresLogin;
module.exports.requiresLogout = requiresLogout;


if (process.env.PROD) {
    module.exports.requiresSecure = requiresSecure;
}
else {
    module.exports.requiresSecure = bypassSecure;
}
