# EventHub API Project

## Project Overview

You will design and build the backend for **EventHub**, a basic event management system.1
You will:

- Design MongoDB models for key entities
- Build a RESTful API using Node.js, Express, and Mongoose
- Implement filtering and sorting on event listings
- Handle relationships between collections using Mongoose references
- Develop clean and modular code with proper error handling

---

## Key Features

### Events

- CRUD operations
- Suggested fields:
  - `title` *(string)*
  - `description` *(string)*
  - `date` *(date)*
  - `location` *(string)*
  - `category` *(string)* *(e.g., concert, conference, workshop)*
  - `price` *(number)*
  - `availableTickets` *(number)*
- Events should support **filtering and sorting** through query parameters:
  - Filter by category, date range, and price range
  - Sort by date or price (ascending or descending)

#### Example Query:

```
GET /events?category=conference&minPrice=10&maxPrice=100&startDate=2025-01-01&sort=-date
```

---

### Users

- CRUD operations
- Suggested fields:
  - `name` *(string)*
  - `email` *(string)*
  - `phone` *(string)*

---

### Bookings

- Users can book tickets for events
- Suggested fields:
  - `user` *(reference to User)*
  - `event` *(reference to Event)*
  - `quantity` *(number)*
  - `totalPrice` *(calculated from event price and quantity)*
  - `status` *("confirmed", "cancelled")*
- Endpoints should allow:
  - Creating a booking
  - Updating or cancelling a booking
  - Viewing all bookings for a user
- Decrease available tickets when a booking is made

---

## Project Guidelines

- Structure your project using **Models**, **Routes**, and **Controllers**
- Use Mongoose references to relate bookings to users and events
- Use `.populate()` where appropriate to return related data

---
