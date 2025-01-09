import '../Components/OtpPage.css'
import otpImg from '../assets/Logos/otp.png'
import { Link } from 'react-router-dom';
function OtpPage() {
    // var input = document.querySelector(input);
    // var verify = document.getElementById('verify-btn')
    // var resend = document.getElementById('resend-btn')
    // input.addEventListener('input', () => {
    //     if (input.value.trim()) {
    //         verify.classList.add('active');
    //         resend.classList.remove('inactive');
    //     } else {
    //         verify.classList.add('inactive');
    //         resend.classList.remove('active');
    //     }
    // });
    return (
        <>
            <div id='otp-page'>
                <div id='otp-image'>
                    <img src={otpImg} width='100px' height='95px' alt="otp image" />
                </div>
                <div id='otp-verification'>
                    <h1>OTP Verfication</h1>
                    <p>We have sent an OTP on your email
                        <span>radhika09@gmail.com</span>
                    </p>
                </div>

                <div id='otp-input'>
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                    <input type="text" maxlength="1" />
                </div>
                <div id='otp-page-button'>
                    <Link to={'/verificationSuccessful'}>
                        <button id='verify-btn'>Verify</button>
                    </Link>
                    <button id='resend-btn'>resend OTP</button>
                </div>

            </div>
        </>
    );
};
export default OtpPage;