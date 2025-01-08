import { Link } from 'react-router-dom'
import '../Components/SignUp .css'
import logo from '../assets/Logos/Logo.png'
import googleLogo from '../assets/Logos/google.png'
import passshow from '../assets/Logos/show.png'
import passhide from '../assets/Logos/hide.png'
function SignUp() {
    // var passtoggle = document.getElementById('passhide')
    // passtoggle.addEventListener('click', () => {
    //     if (passtoggle.src = "/src/assets/Logos/hide.png") {
    //         passtoggle.src = "/src/assets/Logos/show.png"
    //     }

    // })
    return (
        <>
            <div id='signup'>
                <div id='signup-logo'>
                    <img src={logo} alt="" />
                </div>
                <div id='signup-h2'>
                    <h2>MomMate</h2>
                </div>
                <div id='signup-signup-inputs'>
                    <input type="text" placeholder='Your Name' required />
                    <input type="text" placeholder='Email' required />
                    <input type="text" placeholder='Password' required />
                    <img id='passhide' src={passhide} width='15px' alt="" />
                </div>

                <div id='signup-signup-btn'>
                    <Link to={'/login'}>
                        <button>Sign Up</button>
                    </Link>
                </div>

                <div id='signup-login'>
                    <p>Already have account? <span style={{ color: '#E6195E' }}> Login </span></p>
                    <p>OR</p>
                </div>


                <div id='signup-signup-google-btn'>
                    <button> <img src={googleLogo} width='20px' alt="" />Sign Up With Google</button>
                </div>
            </div>
        </>
    );
}
export default SignUp;