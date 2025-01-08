import { Link } from 'react-router-dom';
import '../Components/CurrentStage.css'
import backButton from '../assets/Logos/back button.png'
function CurrentStage() {
    return (
        <>
            <div id='current-stage'>
                <div>
                    <div id='current-stage-bck'>
                        <Link to={'/details'}>
                            <img src={backButton} width='14px' style={{ marginLeft: '20px' }} height='25px' alt="" />
                        </Link>
                        <h4>What's Your Current Stage</h4>
                    </div>

                    <div id='stages'>
                        <div id='stage-1'>
                            <p>I'm preganent.</p>
                        </div>
                        <div id='stage-2'>
                            <p>I'm supporting somone.</p>
                        </div>
                    </div>
                    <div id='stage'>
                        <div id='stage-3'>
                            <p>I'm a healthcare professional</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CurrentStage;
