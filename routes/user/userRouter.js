const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById } = require('./userController');

router.get('/', async (request, response) => {
    try {
        const users = await getUsers();
        response.json({ message: 'success', payload: users })
    } catch (error) {
        response.json({ message: 'failure', payload: error })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const user = await getUserById(request.params.id)
        response.json({ message: 'success', payload: user })
    } catch (error) {
        response.json({ message: 'failure', payload: error })
    }
})

router.post('/', async (request, response) => {
    try {
        const newUser = await createUser(request.body);
        response.json({ message: 'success', payload: newUser })
    } catch (error) {
        response.json({ message: 'failure', payload: error.message })
    }
})

module.exports = router