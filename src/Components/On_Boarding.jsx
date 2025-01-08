import { Link } from 'react-router-dom';
import '../Components/On_Boarding.css'
import logo from '../assets/Logos/Logo.png'

function On_boarding() {
    return (

        <Link to={'/welcome'}>
            <div id='onboarding'>
                <div id='logo'>
                    <img src={logo} width='100px' alt="" />
                    <h1>Mom Mate</h1>
                </div>
            </div>
        </Link>
    );
}
export default On_boarding;