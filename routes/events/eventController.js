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
// query request.query - what we pass into our getEvents fucntion
const getEvent = async (filterQueries) => {
    try {
        // keep track of filters
        const queryObject = {};

        // keep track of sorts and sort order
        const sortObject = {};

        // if we have a category query
        if (filterQueries.category) {
            // add the property to our object with query as the value
            queryObject.category = filterQueries.category
            /*
                queryObject = {
                    catergory: filterQueries.category
                }
            */

        }

        if (filterQueries.minPrice && filterQueries.maxPrice) {
            // queryObject.minPrice = Number(filterQueries.minPrice)
            // queryObject.maxPrice = Number(filterQueries.maxPrice)

            // greater than or equal to min
            // AND less than or equal to max
            // $gte and $lte are used in mongoose for filtering by ranges
            queryObject.price = {
                $gte: Number(filterQueries.minPrice),
                $lte: Number(filterQueries.maxPrice)
            };
        }

        if (filterQueries.sortBy) {
            if (filterQueries.sortOrder === 'desc') {
                sortObject[filterQueries.sortBy] = -1;
            } else {
                // sortBy = 1
                // will evaluate to price
                sortObject[filterQueries.sortBy] = 1; // 1 for ascending
            }
        }

        // filterQueries.category
        // filterQueries.minPrice
        // .find() keys - what you are trying to filter by
        // const event = await Event.find({ category: filterQueries.category })
        // .sort(key: 1) = ascending sort
        // .sort(key: -1) = descending sort
        const event = await Event.find(queryObject).sort(sortObject);
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