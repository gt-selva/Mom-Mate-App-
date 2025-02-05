import { Link } from 'react-router-dom'
import '../Components/DueDate.css'
import { useState } from 'react'
import backButton from '../assets/Logos/back button.png'
import nextBtn from '../assets/Logos/Vector.png'
import prevBtn from '../assets/Logos/previous.png'
import Calender from 'react-calendar'
function DueDate() {
    var prebtn = document.getElementsByClassName('react-calendar__navigation__arrow ')
    prebtn.id = 'prebtn'
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <>
            <div>
                <div id='back-section'>
                    <Link to={'/currentstage'}>
                        <div>
                            <img src={backButton} width='15px' alt="" />
                        </div>
                    </Link>
                    <div><h4>What's Your Due Date</h4></div>
                </div>


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
                <Link to={'/otpVerification'}>
                    <div id='next-btn'>
                        <button>Next</button>
                    </div>
                </Link>
            </div>
        </>
    );
}
export default DueDate;