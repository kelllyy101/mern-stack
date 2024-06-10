//login user
const loginUser = async (req, res) => {
    res.json({mssg:'login user'})
}
//signup
const signupUser = async (req, res) => {
    res.json({mssg:'sign up user'})
}

module.exports = {loginUser, signupUser}