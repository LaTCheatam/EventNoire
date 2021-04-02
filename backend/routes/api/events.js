// routes/api/events.js

const express = require('express')
const asyncHandler = require('express-async-handler');

const { Event } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Fetch all events
router.get ('/', 
    asyncHandler(async (req, res) => {
    res.send('hello events')
    })
)

router.post ('/',
    asyncHandler(async (req, res) => {
        const { eventTitle, userId, content, numTickets, eventDate, eventStart, eventEnd } = req.body;
        console.log(req.body,'the things')
        // const event = await Event.create({ eventTitle, userId, content, numTickets, eventDate: new Date(), eventStart: '14:30:00' , eventEnd: '22:30:00' });

        // return res.json({
        //     event,
        // });
    }),
);


module.exports = router;