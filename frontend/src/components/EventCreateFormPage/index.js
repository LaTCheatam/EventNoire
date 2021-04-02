import './EventCreateForm.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createEvent } from '../../store/events';
// import eventDatePicker from './eventDatePicker'

const EventCreateForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    // const [host, setHost] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    // const [type, setType] = useState(eventTypes[0]);
    // const [imageUrl, setImageUrl] = useState('')
    const [numTickets, setNumTickets] = useState(1);
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('');
    // console.log({title})
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id, 
            title,
            content,
            numTickets,
            startDate,
            startTime,
            endTime,
        };

        const event = await dispatch(createEvent (payload));
        if (event) {
            history.push(`/`);
        }
    };

   
        // let currentDate = new Date().toLocaleDateString();
        // currentDate = currentDate.slice(0, 16);
    

    return (
        <div className='event-form-container'>
            <h2>Create An Event</h2>
            <form onSubmit={handleSubmit} className='event-form-inputs'>
            <div className='event-form-contents'>
                <label id='the-labels'>Title</label>
                <input type='text' placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} /> 
                <label id='the-labels'>Description</label>
                <input type='textarea' placeholder='Description' value={content} onChange={(event) => setContent(event.target.value)} />
                <label id='the-labels'>Number of Tickets</label> 
                <input type='integer' placeholder='Number of Tickets' value={numTickets} onChange={(event) => setNumTickets(event.target.value)} />  
                <label id='the-labels'>Start Date & Time</label>
                <input type='datetime-local' placeholder='Set a start' value={startDate} onChange={(event) => setStartDate(event.target.value)} />
                <label id='the-labels'>End Date & Time</label>
                <input type='datetime-local' placeholder='Set an end' value={endTime} onChange={(event) => setEndTime(event.target.value)} /> 
    
                <p>You're almost to the end. Nicely done!</p>
                <button type='submit'>Create Your Event</button>
            </div> 
            </form>           
        </div>
    )

}
export default EventCreateForm;