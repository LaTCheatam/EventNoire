// routes/api/events.js

const express = require('express')
const asyncHandler = require('express-async-handler');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Event } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// ROUTE FOR SEARCHING SPECIFC KEYWORDS
router.post('/events', 
  asyncHandler(async (req, res) => {
    const { query } = req.body;
    const events = await Event.findAll({
        where: {
            eventTitle: {
                [Op.iLike]: `%${query}%`   // 'Op' NEEDS TO BE IMPORTED IN ORDER FOR THIS QUERY TO WORK
            }                               // see above at imports
        },
        include: [User, Event]
    });

    res.render('events', {
        title: 'Event',
        events,
    });
}));

// Get all events
router.get ('/', 
    asyncHandler(async (req, res) => {
    const events = await Event.findAll({
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
        event
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