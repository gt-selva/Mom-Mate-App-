import '../Components/Vaccination.css'
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
import mapImg from '../assets/Logos/Map.png'
import search from '../assets/Logos/vaccination search.png'
import hospitalone from '../assets/Logos/hospitalone.png'
import hospitaltwo from '../assets/Logos/hospitaltwo.png'
import hospitalthree from '../assets/Logos/hospitalthree.png'
import proadcast from '../assets/Logos/Podcasts.png'
import { Link } from 'react-router-dom'
function Vaccination() {
    return (
        <>
            <div id='vaccination'>


                <div id='home-nav-bar'>
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
                    <div><h4>Vaccination</h4></div>
                </div>
                <div id='vaccination-p'>
                    <p>HTIC Maternal & Child Health <br /> Accelerator Program</p>
                </div>
                <div id='vaccination-map-img'>
                    <img src={mapImg} width='360px' alt="" />
                </div>
                <div id='vaccination-search'>
                    <input type="text" placeholder='Search' />
                    <img src={search} width='25px' alt="" />
                </div>

                <div id='hospital-details'>

                    <div id='hospital-detail'>
                        <img src={hospitalone} width='49px' alt="" />

                        <div>
                            <div>
                                <p id='hospital-name'>Kshem Multispecialty Hospital</p>
                            </div>
                            <div>
                                <p>5 km away</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div id='hospital-detail'>
                        <img src={hospitaltwo} width='49px' alt="" />

                        <div>
                            <div>
                                <p id='hospital-name'>Sai Thunga Healthcare.</p>
                            </div>
                            <div>
                                <p>7 km away</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div id='hospital-detail'>
                        <img src={hospitalthree} width='49px' alt="" />

                        <div>
                            <div >
                                <p id='hospital-name'>Sakthi Hospital</p>
                            </div>
                            <div>
                                <p>8 km away</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div id='proadcast-img'>
                        <img src={proadcast} width='54px' alt="" />
                    </div>

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


            </div>
        </>
    );
};
export default Vaccination;