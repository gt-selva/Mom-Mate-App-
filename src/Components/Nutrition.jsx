import '../Components/Nutrition.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import dropdown from '../assets/Logos/Drop down.png'
import backButton from '../assets/Logos/back button.png'
import breakfastone from '../assets/Logos/breaksfastone.png'
import egg from '../assets/Logos/Two white eggs.png'
import drinks from '../assets/Logos/cup with orange drink.png'
import icecream from '../assets/Logos/ice cream.png'
import curryrice from '../assets/Logos/Curry Rice.png'
import snack from '../assets/Logos/snaks.png'
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
function Nutrition() {
    return (
        <>
            <div id='nutritionguide'>
                <div id='nutritionguide-nav-bar'>
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
                <div id='nutritionguide-back-section'><Link to={'/home'}>
                    <div id='excersice-bck-btn'>
                        <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                        <h3 style={{ color: 'black' }}>Excersice Wellness</h3>
                    </div></Link>
                    <div id='today-dropbtn'>
                        <h4>Today</h4>
                        <img src={dropdown} width='9px' height='6px' style={{ marginLeft: '20px' }} alt="" />
                    </div>
                </div>

                <div id='nutritionguide-heading'>
                    <h3>Foods For You at Third Trimester</h3>
                </div>
                <div id='nutritionguide-breakfast'>

                    <h4>Breakfast</h4>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={breakfastone} width='39px' height='40px' alt="" />
                        </div>
                        <div>
                            <h4>Whole wheat Toast</h4>
                        </div>
                    </div>
                </div>
                <div id='nutritionguide-breakfast'>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={egg} width='59px' height='35px' alt="" />
                        </div>
                        <div>
                            <h4>Two  Boiled Eggs</h4>
                        </div>
                    </div>
                </div>
                <div id='nutritionguide-breakfast'>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={drinks} width='44px' height='36px' alt="" />
                        </div>
                        <div>
                            <h4>Mango Milkshake</h4>
                        </div>
                    </div>
                </div>

                <div id='nutritionguide-breakfast'>
                    <h4>Lunch</h4>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={curryrice} width='45px' height='45px' alt="" />
                        </div>
                        <div>
                            <h4>Spinach Curry with Roti</h4>
                        </div>
                    </div>
                </div>
                <div id='nutritionguide-breakfast'>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={icecream} width='41px' height='38px' alt="" />
                        </div>
                        <div>
                            <h4>Strawberry Yogurt</h4>
                        </div>
                    </div>
                </div>
                <div id='nutritionguide-breakfast' style={{ marginBottom: '20px' }}>
                    <h4>Snack</h4>
                    <div id='breakfast-section'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id='nutritionguide-breakfast-info'>
                            <img src={snack} width='45px' height='38px' alt="" />
                        </div>
                        <div>
                            <h4>Mixed Fruit Salad </h4>
                            <p style={{ color: '#818181', marginLeft: '10px' }}>1 handful of nuts</p>
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
                    <div id='menue-settings'>
                        <div id='menue-content'>
                            <img src={healthImg} width='24px' height='25px' alt="" />
                            <p style={{ color: '#E6195E' }}>Vaccination</p>
                            <img src={leftarrowpink} width='25px' alt="" />
                        </div>
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

                <div id='excersice-navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>


            </div>
        </>
    );
};
export default Nutrition;