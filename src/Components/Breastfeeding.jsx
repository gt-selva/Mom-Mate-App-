import '../Components/Breastfeeding.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import logoutImg from '../assets/Logos/logout.png'
import healthImg from '../assets/Logos/health.png'
import verificationImg from '../assets/Logos/shield.png'
import activityImg from '../assets/Logos/clock.png'
import starImg from '../assets/Logos/star.png'
import privacyImg from '../assets/Logos/privacy.png'
import customerCareImg from '../assets/Logos/customer-care.png'
import settingImg from '../assets/Logos/setting.png'
import leftarrowpink from '../assets/Logos/leftarrow.png'
import leftarrowblack from '../assets/Logos/leftarrowblack.png'
import backButton from '../assets/Logos/back button.png'
import plusicon from '../assets/Logos/plusicon.png'
import editicon from '../assets/Logos/editicon.png'
import aurthorone from '../assets/Logos/aurthorone.png'
import aurthortwo from '../assets/Logos/aurthortwo.png'
import aurthorthree from '../assets/Logos/aurthorthree.png'
import aurthorfour from '../assets/Logos/aurthorfour.png'
import homeImg from '../assets/Logos/homenonactive.png'
import calenderImg from '../assets/Logos/Calender.png'
import notificationImg from '../assets/Logos/notification.png'
import { Link } from 'react-router-dom'

function Breastfeeding() {
    return (
        <>
            <div id='breastfeeding'>


                <div id='breastfeeding-home-nav-bar'>

                    <div>

                        <img onClick={() => {
                            var menue = document.getElementById('menue-section')
                            if (menue && menue.style.display == 'none') {
                                menue.style.display = 'grid'
                            } else {
                                menue.style.display = 'grid'
                                menue.style.transition = '1s'
                            }
                        }}
                            src={menue} width='32px' height='32px' alt="menue" />
                    </div>

                    <div>
                        <img src={momMateLogo} width='154px' height='41px' alt="" />
                    </div>
                    <div>
                        <img src={profileLogo} width='34px' height='34px' alt="" />
                    </div>
                </div>

                <div id='vaccination-back-section'>
                    <Link to={'/home'}>
                        <div>
                            <img src={backButton} width='12px' alt="" />
                        </div>
                    </Link>
                    <div><h4>Breastfeeding Suppourt</h4></div>
                </div>
                {/* body  */}

                <div id='breastfeeding-d-m-y'>
                    <h3>22 Feb 2024</h3>
                </div>

                <div id='breastfeeding-weekdays'>
                    <div id="days"><p id='da'>M</p><p id='dat'>20</p></div>
                    <div id="days"><p id='da'>T</p><p id='dat'>21</p></div>
                    <div id="days"><p id='da'>W</p><p id='dat'>22</p></div>
                    <span id='home-span'><div id="days"><p id='da'>T</p><p id='dat'>23</p></div></span>
                    <div id="days"><p id='da'>F</p><p id='dat'>24</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>25</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>26</p></div>

                </div>
                <div id='plusicon'>
                    <img src={plusicon} width='28px' alt="" />
                </div>

                <div id='breastfeeding-time'>
                    <p>1:30 AM</p>
                    <hr />
                    <p>7:00 AM</p>
                    <hr />
                    <p>10:00 AM</p>
                    <hr />
                    <p>1:30 AM</p>
                    <hr />
                </div>
                <div id='edit'>
                    <h3>Articles by Gynae's</h3>
                    <img src={editicon} width='24px' alt="" />
                </div>

                <div id='aurthors'>
                    <div>
                        <img src={aurthorone} width='80px' height='77px' alt="" />
                        <p>Dr Veena Bhat</p>
                    </div>
                    <div>
                        <img src={aurthortwo} width='80px' height='77px' alt="" />
                        <p>Dr Malvika Sabharwal</p>
                    </div>
                    <div>
                        <img src={aurthorthree} width='80px' height='77px' alt="" />
                        <p>Dr Laila Davel</p>
                    </div>
                    <div>
                        <img src={aurthorfour} width='80px' height='77px' alt="" />
                        <p>Dr Rama Joshi</p>
                    </div>
                </div>

                <div id='breastfeeding-navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>
                {/* menue */}

                <div id='menue-section'>
                    <div id='menue-back'>
                        <img onClick={() => {
                            var menue = document.getElementById('menue-section')
                            if (menue && menue.style.display === 'grid') {
                                menue.style.display = 'none'
                            }
                        }}
                            src={logoutImg} width='30px' height='30px' alt="" />
                    </div>

                    <div id='menue-settings'>
                        <Link to={'/vaccination'}>
                            <div id='menue-content'>
                                <img src={healthImg} width='24px' height='25px' alt="" />
                                <p style={{ color: '#E6195E' }}>Vaccination</p>
                                <img src={leftarrowpink} width='25px' alt="" />
                            </div>
                        </Link>
                        <div id='menue-content'>
                            <img src={verificationImg} width='25px' height='26px' alt="" />
                            <p>Childbirth Preparations</p>
                            <img src={leftarrowblack} width="25px" alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={activityImg} width='24px' height='25px' alt="" />
                            <p>Activity</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={verificationImg} width='25px' height='26px' alt="" />
                            <p> Two Factor Authentication</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={starImg} width='23px' height='24px' alt="" />
                            <p>Feedbacks</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={privacyImg} width='23px' height='24px' alt="" />
                            <p>Privacy & Policy</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={customerCareImg} width='20px' height='21px' alt="" />
                            <p>Help Center</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                        <div id='menue-content'>
                            <img src={settingImg} width='21px' height='22px' alt="" />
                            <p>Setting</p>
                            <img src={leftarrowblack} width='25px' alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};
export default Breastfeeding;