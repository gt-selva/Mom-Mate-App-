import '../Components/Calender.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import backButton from '../assets/Logos/back button.png'
import babyImg from '../assets/Logos/baby growth.png'
import homeImg from '../assets/Logos/Home.png'
import calenderImg from '../assets/Logos/Calender.png'
import notificationImg from '../assets/Logos/notification.png'
import healthImg from '../assets/Logos/health.png'
import verificationImg from '../assets/Logos/shield.png'
import activityImg from '../assets/Logos/clock.png'
import starImg from '../assets/Logos/star.png'
import privacyImg from '../assets/Logos/privacy.png'
import customerCareImg from '../assets/Logos/customer-care.png'
import settingImg from '../assets/Logos/setting.png'
import leftarrowpink from '../assets/Logos/leftarrow.png'
import leftarrowblack from '../assets/Logos/leftarrowblack.png'
import logoutImg from '../assets/Logos/logout.png'
import { Link } from 'react-router-dom'
function Calender() {
    return (
        <>
            <div id='calender'>
                <div id='excersice-nav-bar'>
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
                <Link to={'/home'}>
                    <div id='calender-bck-btn' style={{ display: 'flex' }}>
                        <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                        <h3 style={{ color: 'black' }}>Track your baby</h3>
                    </div></Link>
                <div id='calender-track-baby'>
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
                <div>
                    <p style={{ fontSize: '12px', marginTop: '15px' }}>It's in the <span style={{ fontWeight: '800' }}>Third trimester</span>, rapidly growing and developing it’s organs, senses, and brain in preparation for birth.</p>
                </div>
                <div>
                    <div>
                        <h4 style={{ color: '#E6195E', marginTop: '10px' }}>Due Date Countdown</h4>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                        <p style={{ fontWeight: '400' }}>9 weeks and 5 days</p>
                        <p style={{ fontSize: '9px' }}>Final trimester</p>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ width: '100%', backgroundColor: '#FF00001A', height: '4px', borderRadius: '3px' }}></div>
                        <div style={{ width: '80%', backgroundColor: '#E6195E', height: '4px', position: 'relative', top: '-4px', borderRadius: '3px' }}></div>
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', color: '#7C7C7C' }}>Date of Labor  6-May-2024</p>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: '#E6195E', marginTop: '20px' }}>Growth & Delevopment</h4>
                    <p style={{ fontSize: '12px', textAlign: 'justify', marginTop: '7px' }}> At this stage, the baby i fully formed, with well-defined facial features,tiny fingers and toes,and a growing layer of fat beneath the skin. </p>
                </div>

                <div>
                    <h4 style={{ color: '#E6195E', marginTop: '15px' }}>Kick Counters</h4>
                    <div id='kickcounters'>
                        <div style={{ fontSize: '10px', color: '#7C7C7C', display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
                            <p>Last Record</p>
                            <p>21 Feb 2024</p>
                        </div>
                        <div style={{ fontSize: '10px', width: '75%', display: 'flex', justifyContent: 'space-between', padding: '0px 10px' }}>
                            <p>Time</p>
                            <p>Duration</p>
                            <p>Kicks</p>
                        </div>
                        <div style={{ fontSize: '10px', width: '71%', display: 'flex', justifyContent: 'space-between', padding: '5px 10px', color: '#E6195E' }}>
                            <p>4:16pm</p>
                            <p>20s</p>
                            <p>10</p>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: '#E6195E', marginTop: '10px' }}>Sensory Development</h4>
                    </div>
                    <div id='sensory-deployment' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#EF6795' }}></div>
                            <p style={{ fontSize: '8px' }}>Touch Sensation</p>
                        </div>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#EF6795' }}></div>
                            <p style={{ fontSize: '8px' }}>Hearing</p>
                        </div>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#EF6795' }}></div>
                            <p style={{ fontSize: '8px' }}>Vision</p>
                        </div>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#EF6795' }}></div>
                            <p style={{ fontSize: '8px' }}>Taste and smell</p>
                        </div>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#EF6795' }}></div>
                            <p style={{ fontSize: '8px' }}>Response to stimuli</p>
                        </div>
                        <div>
                            <div style={{ width: '50px', height: '30px', borderRadius: '10px', backgroundColor: '#F5E9ED' }}></div>
                            <p style={{ fontSize: '8px' }}>Brain</p>
                        </div>
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

                    <div id='menue-settings'><Link to={'/vaccination'}>
                        <div id='menue-content'>
                            <img src={healthImg} width='24px' height='25px' alt="" />
                            <p style={{ color: '#E6195E' }}>Vaccination</p>
                            <img src={leftarrowpink} width='25px' alt="" />
                        </div></Link>
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
            <div style={{ width: '100%' }} id='excersice-navigation-buttons'>
                <img src={homeImg} width='34px' height='34px' alt="" />
                <img src={calenderImg} width='34px' height='34px' alt="" />
                <img src={notificationImg} width='28px' height='32px' alt="" />
            </div>
        </>
    );
};
export default Calender;