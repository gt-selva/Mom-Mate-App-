import { Link } from 'react-router-dom';
import '../Components/Welcome.css'
import backButton from '../assets/Logos/back button.png'
import preganency from '../assets/Logos/welcome preganency.png'
function Welcome() {
    return (
        <>
            <div id="welcome">
                <div id='welcome-firstSection'>
                    <Link to={'/'}><img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='25px' alt="" /></Link>
                    <h1>MomMate</h1>
                </div>

                <div id='preganency-img'>
                    <img src={preganency} width='330px' height='339px' alt="" />
                </div>

                <div id='welcom'>
                    <h2>Welcome</h2>
                </div>
                <div id='welcome-paragh'>
                    <p>
                        <span style={{ marginLeft: '5px' }}>Welcome to MomMate, Where</span>
                        <br />
                        mothers find comfort and support,
                        <br />
                        <span style={{ marginLeft: '45px' }}> every step of the way.</span>
                    </p>
                </div>

                <div id='welcome-btn'>
                    <Link to={'/signup'}><button>Next </button></Link>

                </div>
            </div>
        </>
    );
}
export default Welcome;