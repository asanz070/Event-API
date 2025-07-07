const User = require('./userModel');

// Get Users
const getUsers = async () => {
    try {
        const users = await User.find();
        return users
    } catch (error) {
        throw error
    }
}

// Get User by Id
const getUserById = (id) => {
    try {
        const user = User.findById(id)
        return user;
    } catch (error) {
        throw error;
    }

}

// Create User
// everything you pass into a function becomes the parameter of that function
// the parameter takes the place of the argument you call the function with
// ALWAYS TRUE!!! for ALL FUNCTIONS!

const createUser = async (userData) => {
    try {
        // add new user to database!
        const newUser = await User.create(userData);
        return newUser
    } catch (error) {
        throw error
    }
}



module.exports = {
    createUser,
    getUsers,
    getUserById
}