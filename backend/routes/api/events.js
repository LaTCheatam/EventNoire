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
    const eventInd = await Event.findAll({
        include: [eventTitle, content, eventStart]
    });

    res.render('events', {
        title: 'Events',
        events
    })
    })
)

router.post ('/',
    asyncHandler(async (req, res) => {
        const { eventTitle, userId, content, numTickets, eventDate, eventStart, eventEnd } = req.body;
        // console.log(req.body,'the things')
        // const event = await Event.create({ eventTitle, userId, content, numTickets, eventDate: new Date(), eventStart, eventEnd });

        // return res.json({
        //     event,
        // });
    }),
);


module.exports = router;