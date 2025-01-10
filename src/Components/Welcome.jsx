import { Link } from 'react-router-dom';
import '../Components/Welcome.css'
import logo from '../assets/Logos/Logo.png'
import backButton from '../assets/Logos/back button.png'
import preganency from '../assets/Logos/welcome preganency.png'
function Welcome() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadingAnimation = document.getElementById('onboarding');
            loadingAnimation.style.display = 'none';
            const content = document.getElementById('welcome');
            content.style.display = 'block';
        }, 2000);
    });

    return (
        <>
            <Link to={'/'}>
                <div>
                    <div id='onboarding'>
                        <div id='logo'>
                            <img src={logo} width='100px' alt="" />
                            <h1>Mom Mate</h1>
                        </div>
                    </div>
                </div>

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
            </Link>
        </>
    );
}
export default Welcome;