const Booking = require('./bookingModel');

// Create Book
const createBooking = async (bookingData) => {
    try {
        const newBooking = await Booking.create(bookingData);
        return newBooking
    } catch (error) {
        throw error
    }
}

module.exports = {
    createBooking
}