// routes/api/events.js

const express = require('express')
const asyncHandler = require('express-async-handler');

const { Event } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();