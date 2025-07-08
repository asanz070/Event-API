const express = require('express');
const router = express.Router();

const { createEvent, getEvent, getEventById } = require('./eventController');

router.get('/', async (request, response) => {
    try {
        // events?catergory=fun&minPrice=5
        // request.query.category = fun
        // request.query.minPrice = 5
        const events = await getEvent(request.query);
        response.json({ message: 'success', payload: events })
    } catch (error) {
        response.json({ message: 'failure', payload: error })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const event = await getEventById(request.params.id)
        response.json({ message: 'success', payload: event })
    } catch (error) {
        response.json({ message: 'failure', payload: error })

    }
})

router.post('/', async (request, response) => {
    try {
        const newEvent = await createEvent(request.body);
        response.json({ message: "Event has been successfully created", payload: newEvent });
    } catch (error) {
        response.json({ message: "failure", payload: error.message });
    }
});

module.exports = router;