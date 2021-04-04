import './EventCreateForm.css';

import * as sessionActions from '../../store/session';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createEvent } from '../../store/eventIndex';


const EventCreateForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    // const [host, setHost] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [content, setContent] = useState('')
    // const [type, setType] = useState(eventTypes[0]);
    const [eventImageUrl, setEventImageUrl] = useState('')
    const [numTickets, setNumTickets] = useState(1);
    const [eventDate, setEventDate] = useState(null);
    
    const [eventEnd, setEventEnd] = useState('');
    const [errors, setErrors] = useState([]);
    // console.log({title})
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            userId: sessionUser.id, 
            eventTitle,
            content,
            eventImageUrl,
            numTickets,
            eventDate,
            eventEnd,
        };
console.log('this is payload', payload )
        await dispatch(createEvent (payload)).then(() => {
            history.push('/events')
        }).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    };

    

    return (
        <div className='event-form-container'>
            <h2 className='event-form-title'>Create An Event</h2>
            <form onSubmit={handleSubmit} className='event-form-inputs'>
                <ul className='the-errors'>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            <div className='event-form-contents'>
                <label id='the-labels'>Title</label>
                <input type='text' placeholder='Title' value={eventTitle} onChange={(event) => setEventTitle(event.target.value)} /> 
                <label id='the-labels'>Image</label>
                <input type='url' placeholder='Image' value={eventImageUrl} onChange={(event) => setEventImageUrl(event.target.value)} /> 
                <label id='the-labels'>Description</label>
                <input type='textarea' placeholder='Description' value={content} onChange={(event) => setContent(event.target.value)} />
                <label id='the-labels'>Number of Tickets</label> 
                <input type='integer' placeholder='Number of Tickets' value={numTickets} onChange={(event) => setNumTickets(event.target.value)} />  
                <label id='the-labels'>Start Date & Time</label>
                <input type='datetime-local' placeholder='Set a start' value={eventDate} onChange={(event) => setEventDate(event.target.value)} />
                <label id='the-labels'>End Date & Time</label>
                <input type='datetime-local' placeholder='Set an end' value={eventEnd} onChange={(event) => setEventEnd(event.target.value)} /> 
    
                <p>You're almost to the end. Nicely done!</p>
                <button className='event-create-btn' type='submit'>Create Your Event</button>
            </div> 
            </form>           
        </div>
    )

}
export default EventCreateForm;