// frontend/src/components/SignupFormPage/index.js
import './SplashPage.css';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from '../../store/eventIndex';

function EventList () {
    const events = useSelector(state => state.events);
    console.log('events', events)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

//     const renderEvents = () =>{
//         return Object.value(events).map(event => {
//             return (
//                 <li>
//                     {event.eventTitle},
//                     {event.content},
//                     {event.eventDate},
//                     {event.eventEnd},
//                     Number of Tickets = ${event.numTickets} 
//                 </li>
//                   );

//         })}
    
    return (
        <div className='event-details-container'>
            <h1 className='event-detail-title'>Events</h1>
            <ul className='event-details-list'>
               
                 {/* <li>
//               <b>Title</b> {events.no}
//             </li>
//             <li>
//               <b>Description</b> {events.content}
//             </li>
//             <li>
//               <b>Event Date</b> {events.eventDate}
//             </li>
//             <li>
//               <b>Event End</b> {events.eventEnd}
//             </li> */}
             </ul>
         </div>
     )

}

export default EventList