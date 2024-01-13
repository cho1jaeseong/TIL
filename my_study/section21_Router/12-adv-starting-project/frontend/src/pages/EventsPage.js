import { Link } from "react-router-dom"

const Dummy_EVENTS  =[
    {
        id:"e1",
        title:"some_event1"
    },
    {
        id:"e2",
        title:"Another_event2"
    },
    {
        id:"e3",
        title:"Another_event3"
    },
    {
        id:"e4",
        title:"Another_event4"
    },
    {
        id:"e5",
        title:"Another_event5"
    },
]

export default function EventsPage(){
    return( <>
    
    <h1>EventPage</h1>
    <ul>
        {Dummy_EVENTS.map(event => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
    </ul>
    </>)
}