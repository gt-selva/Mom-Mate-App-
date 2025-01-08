import '../Components/Welcome.css'
import backButton from '../assets/Logos/back button.png'
import preganency from '../assets/Logos/welcome preganency.png'
function Welcome() {
    return (
        <>
            <div id="welcome">
                <div id='welcome-firstSection'>
                    <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='25px' alt="" />
                    <h1>MomMate</h1>
                </div>

                <div id='preganency-img'>
                    <img src={preganency} alt="" />
                </div>

                <div id='welcom'>
                    <h2>Welcome</h2>
                </div>
                <div id='welcome-paragh'>
                    <p>
                        <span style={{ marginLeft: '10px' }}>Welcome to MomMate, Where</span>
                        <br />
                        mothers find comfort and support,
                        <br />
                        <span style={{ marginLeft: '45px' }}> every step of the way.</span>
                    </p>
                </div>

                <div id='welcome-btn'>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
}
export default Welcome;