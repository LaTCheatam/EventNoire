import './EventSinglePage.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/eventIndex';

const EventDetail = () => {
    const { eventId } = useParams();
    const event = useSelector(state => state.events[eventId])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneEvent(eventId));
    }, [dispatch, eventId]);

    if (!event) {
        return null;
    }

    return (
        <div className='event-detail-container'>
            <div className='event-detail-lists'>
                <h2>This Event</h2>
                <ul>
                    <li>
                        <b>Event Title</b> {event.eventTitle}
                    </li>
                    <li>
                        <b>User</b> {event.userID}
                    </li>
                    <li>
                        <b>Content</b> {event.content}
                    </li>
                    <li>
                        <b>Event Date & Time</b> {event.eventDate}
                    </li>
                    <li>
                        <b>Event End Date & Time</b> {event.eventEnd}
                    </li>
                    <li>
                        <b>No. of Tickets Available</b> {event.numTickets}
                    </li>
                </ul>
            </div>
            <div className={`event-detail-image-background`}>
                <div className="event-detail-image" style={{ backgroundImage: `url('${event.eventImageUrl}')` }}></div> 
            </div> 
        </div>
    )

}

export default EventDetail;