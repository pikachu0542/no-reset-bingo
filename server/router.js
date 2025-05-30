const mid = require('./middleware');

const router = (app) => {

    // Home page doesnt need sign in

    /**
     * ROUTES
     *
     * ========== ACCOUNT MANAGEMENT ==========
     * 1. Sign up - Secure, log out
     * 2. Sign in - Secure, log out
     * 3. Sign out - Secure, log in
     * 4. Change password - Secure, log out
     * 5. Grant admin - Secure, sign in, me
     * 6. Revoke admin - Secure, sign in, me
     *
     * ========== NRS BINGO ==========
     *
     * 1. Get all nrs bingo items - secure
     * 2. Get random nrs bingo item - secure
     * 3. Get nrs bingo description by name - secure
     * 4. Generate nrs bingo card - secure
     * 5.
     *
     * ========== 100K BINGO ==========
     *
     * 1. Display view only 100k bingo card - secure
     * 2. Display editable 100k bingo card - secure, sign in, admin
     * 3. Update 100k bingo card - secure, sign in, admin
     * 4. Get all 100k bingo items - secure
     * 5. Get 100k bingo description by item name - secure
     * 6.
     */

    app.get('*', (req, res) => res.redirect('/'));
};

module.exports = router;
