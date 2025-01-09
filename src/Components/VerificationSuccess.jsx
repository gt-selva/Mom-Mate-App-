import '../Components/VerificationSuccess.css'
import verficationImg from '../assets/Logos/verification.png'
function VerificationSuccess() {
    return (
        <>
            <div id='verfication-success'>
                <div id='verification'>
                    <h2>Verification Successful</h2>
                </div>
                <div id='verfication-image'>
                    <img src={verficationImg} width='90px' height='90px' alt="" />
                </div>
                <div id='verification-next-btn'>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};
export default VerificationSuccess;