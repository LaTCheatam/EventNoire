// routes/api/events.js

const express = require('express')
const asyncHandler = require('express-async-handler');

const { Event } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Get all events
router.get ('/', 
    asyncHandler(async (req, res) => {
    const eventInd = await Event.findAll({
        where: [eventTitle, content, eventDate]
    });

    res.render('events', {
        title: 'Events',
        events
    })
    })
)

// Get single event
router.get('/events/${id}'),
    asyncHandler(async (req, res) => {
      const eventId = parseInt(req.params.id);
      const event = await Event.findByPk(eventId, {
        include: [ User.username ]
      })

      res.render('events', {
        title: 'Your Event',
        events 
      })
    })


// Post create event
const validateCreateEvent = [
  check('eventTitle')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a title.'),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a description of your event.'),
  check('numTickets')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid number of tickets for your event.'),
  check('eventEnd')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid start date and time.'),
  handleValidationErrors,
];

router.post ('/',
    validateCreateEvent,
    asyncHandler(async (req, res) => {
        const { eventTitle, userId, content, eventImageUrl, numTickets, eventDate,  eventEnd } = req.body;
    console.log('the things', req.body)

        const event = await Event.create({ eventTitle, userId, content, eventImageUrl, numTickets, eventDate: new Date(), eventEnd });

        return res.json({
            event,
        });
    }),
);



module.exports = router;