const express = require("express");
const router = express.Router();

const { createBooking } = require('./bookingController')

router.post('/', async (request, response) => {
    try {
        const booking = await createBooking(request.body);
        response.json({ message: 'success', payload: booking })
    } catch (error) {
        response.json({ message: "failure", payload: error.message });
    }
})

module.exports = router;