import logo from '../assets/Logos/Logo.png'
import googleLogo from '../assets/Logos/google.png'
import passhide from '../assets/Logos/hide.png'
import '../Components/Login.css'
function Login() {
    return (
        <>
            <div id='Login'>
                <div id='signup-logo'>
                    <img src={logo} alt="" />
                </div>
                <div id='signup-h2'>
                    <h2>MomMate</h2>
                </div>
                <div id='signup-signup-inputs'>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <img id='passhide' src={passhide} width='15px' alt="" />
                    <p id='forgot'>Forgot Password?</p>
                </div>

                <div id='signup-signup-btn'>
                    <button>Log In </button>
                </div>

                <div id='signup-login'>
                    <p>Don't have an account<span style={{ color: '#E6195E' }}> Sign up </span></p>
                    <p>OR</p>
                </div>


                <div id='signup-signup-google-btn'>
                    <button> <img src={googleLogo} width='20px' alt="" />Sign Up With Google</button>
                </div>
            </div>
        </>
    );
}
export default Login;