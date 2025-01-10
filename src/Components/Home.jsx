import '../Components/Home.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import babyImg from '../assets/Logos/baby growth.png'
import vectorone from '../assets/Logos/track your baby vector.png'
import vectortwo from '../assets/Logos/track your baby vector two.png'
import nutritionImg from '../assets/Logos/nutrition.png'
import excerciseImg from '../assets/Logos/excercise.png'
import communityImg from '../assets/Logos/community support.png'
import breasfeedImg from '../assets/Logos/breast feeding.png'
import homeImg from '../assets/Logos/Home.png'
import calenderImg from '../assets/Logos/Calender.png'
import notificationImg from '../assets/Logos/notification.png'
import logoutImg from '../assets/Logos/logout.png'
import healthImg from '../assets/Logos/health.png'
import verificationImg from '../assets/Logos/shield.png'
import activityImg from '../assets/Logos/clock.png'
import starImg from '../assets/Logos/star.png'
import questionImg from '../assets/Logos/question.png'
import privacyImg from '../assets/Logos/privacy.png'
import customerCareImg from '../assets/Logos/customer-care.png'
import settingImg from '../assets/Logos/setting.png'
import leftarrowpink from '../assets/Logos/leftarrow.png'
import leftarrowblack from '../assets/Logos/leftarrowblack.png'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div id='home'>
                <div id='homeonly-nav-bar'>
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

                <div id='d-m-y'>
                    <h3>22 Feb 2024</h3>
                </div>

                <div id='weekdays'>
                    <div id="days"><p id='da'>M</p><p id='dat'>20</p></div>
                    <div id="days"><p id='da'>T</p><p id='dat'>21</p></div>
                    <div id="days"><p id='da'>W</p><p id='dat'>22</p></div>
                    <span id='home-span'><div id="days"><p id='da'>T</p><p id='dat'>23</p></div></span>
                    <div id="days"><p id='da'>F</p><p id='dat'>24</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>25</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>26</p></div>

                </div>

                <div id='home-track-baby'>
                    <div id='baby-growth'>
                        <div>
                            <img src={babyImg} width='94px' height='116px' alt="" />
                        </div>
                        <div>
                            <p>Days Left</p>
                            <h3>68 Days</h3>
                        </div>
                        <div>
                            <p>Baby size</p>
                            <h6>{'<'}1kg 30cm</h6>
                        </div>

                    </div>
                    <div>
                        <p id='days-of-preganent'>You are 28 weeks preganent</p>
                    </div>
                </div>

                <div id='home-track-your-baby'>
                    <p>Track your baby</p>
                    <img src={vectortwo} height='2px' alt="" />
                    <img src={vectorone} width='7px' height='7px' alt="" />
                </div>

                <div id='content-parts'>
                    <div id="content">
                        <div id='content-1'>
                            <p>Nutrition Guide </p>
                            <img src={nutritionImg} width='121px' height='119px' alt="" />
                        </div>

                        <div id='content-2'> <Link to={'/excersicewellness'}>
                            <p>Excersice Wellness</p>
                            <img src={excerciseImg} width='160px' height='120px' alt="" /> </Link>
                        </div>

                    </div>
                    <div id="content">
                        <div id='content-3'>
                            <p>Community Support </p>
                            <img src={communityImg} width='93px' height='90px' alt="" />
                        </div>

                        <div id='content-4'><Link to={'/breastfeeding'}>
                            <p>Breastfeeding Support </p>
                            <img src={breasfeedImg} width='104px' height='100px' alt="" /> </Link>
                        </div>

                    </div>
                </div>
                <div id='navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>
            </div>
            {/* menue section */}
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

        </>
    );
};
export default Home;