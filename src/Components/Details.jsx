import { Link } from 'react-router-dom';
import '../Components/Details.css'
import preganencyImg from '../assets/Logos/preganency.png'
import backBtn from '../assets/Logos/back button.png'
function Details() {
    return (
        <>
            <div id='details'>
                <div id='Preganency-image'>
                    <img src={preganencyImg} width='750px' height='800px' alt="" />
                </div>
                <div id='back-btn'>
                    <Link to={'/login'}>
                        <img src={backBtn} width='15px' alt="" />
                    </Link>
                </div>

                <div id='details-paragh'>
                    <p>Before starting, could you answer <br />
                        <span style={{ marginLeft: '25px' }}> a few questions  for a more </span> <br />
                        <span style={{ margin: '13px' }}> personalized app experience. </span>

                    </p>
                </div>

                <div>
                    <Link to={'/currentstage'}>
                        <button id='detail-next-btn'>Next </button>
                    </Link>
                </div>

            </div>
        </>

    );
};
export default Details;