import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createEvent, getEventTypes } from '../../store/events';

const EventCreateForm = ({ hideForm }) => {
    const eventTypes = useSelector(state => state.event.types)
    const dispatch = useDispatch();
    const history = useHistory();
    const

}
export default EventCreateForm;