import '../Components/DueDatetwo.css'
import backButton from '../assets/Logos/back button.png'
import Calender from 'react-calendar'
import nextBtn from '../assets/Logos/Vector.png'
import prevBtn from '../assets/Logos/previous.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function DueDatetwo() {
    var prebtn = document.getElementsByClassName('react-calendar__navigation__arrow ')
    prebtn.id = 'prebtn'
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };
    return (
        <>
            <div id='duedatetwo'><Link to={'/home'}>
                <div id='duedatetwo-bck-btn'>
                    <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                    <h3>Preganency Calender</h3>
                </div></Link>

                <div id='day'>
                    <h3> {date.toLocaleString("default", { weekday: "long" })}</h3>
                </div>
                <div id='month-year'>
                    <h5> {date.getFullYear()},</h5>
                    <h5>{date.toLocaleString("default", { month: "long" })}</h5>
                </div>
                <div>
                    <Calender
                        onChange={handleDateChange}
                        value={date}
                        nextLabel={<img src={nextBtn} />}
                        prevLabel={<img src={prevBtn} />}
                    />
                </div>
            </div>
            <div id='duedatetwo-buttons'>
                <div id='appointment-sheduler'>
                    <button>Appointment Sheduler</button>
                </div>
                <div id='symptom-tracker'>
                    <button>Symptom Tracker</button>
                </div>
            </div>
        </>
    );
};
export default DueDatetwo;