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
    console.log({title})
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
                <input type='text' placeholder='Make it short, sweet and succinct' value={title} onChange={(event) => setTitle(event.target.value)} /> 
                
                {/* </div><label id='start-event'>
                Start
                <input type='datetime-local' min={currentDate} placeholder='Select Start Date' value={this.state.start_date} onChange={this.update('start_date')} /> 
                </label>
                <span className='form-input-error'>
    {this.checkError('Start cannot be blank')}</span> */}
               
                
            </div>  
                <p>You're almost to the end. Nicely done!</p>
                <button type='submit'>Save</button>
            </form>
        </div>
    )

}
export default EventCreateForm;