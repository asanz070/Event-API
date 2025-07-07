const Event = require('./eventModel');

// Create Event
const createEvent = async (eventData) => {
    try {
        const newEvent = await Event.create(eventData);
        return newEvent
    } catch (error) {
        throw error
    }
}

// Get Event By Id
const getEventById = (id) => {
    try {
        const event = Event.findById(id)
        return event
    } catch (error) {
        throw error
    }
}

// Get All Events
const getEvent = async () => {
    try {
        const event = await Event.find()
        return event
    } catch (error) {
        throw error
    }
}

module.exports = {
    createEvent,
    getEvent,
    getEventById
}