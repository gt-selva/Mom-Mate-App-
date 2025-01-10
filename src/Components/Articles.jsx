import '../Components/Articles.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import homeImg from '../assets/Logos/Home.png'
import calenderImg from '../assets/Logos/Calender.png'
import notificationImg from '../assets/Logos/notification.png'
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
import aurthorone from '../assets/Logos/aurthorone.png'
import backButton from '../assets/Logos/back button.png'
import feedingone from '../assets/Logos/feedingone.png'
import feedingtwo from '../assets/Logos/feedingtwo.png'
import feedingthree from '../assets/Logos/feedingthree.png'
import { Link } from 'react-router-dom'
function Articles() {
    return (
        <>
            <div id='articles'>
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
                <Link to={'/breastfeeding'}>
                    <div id='articles-bck-btn'>
                        <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                        <img src={aurthorone} width='56px' alt="" />
                        <h3>Dr Veena Bhat</h3>
                    </div></Link>
                <h4>Embracing Breast Feeding</h4>
                <div id='feeding-one'>
                    <img src={feedingone} width='104px' height='93px' alt="" />
                    <p>Breastfeeding stands as a cornerstone of maternal and infant health, offering a wealth of benefits that extend well beyond mere nutrition. From my perspective as a gynecologist deeply committed to women's health</p>
                </div>
                <div id='feeding-one-p'>
                    <p>I staunchly advocate for breastfeeding as an invaluable practice for both mothers and babies</p>
                </div>
                <h4>Nourishing Bonds</h4>
                <div id='feeding-one'>
                    <p>Breast milk, a marvel of nature's design, is uniquely tailored to meet the evolving nutritional needs of newborns, offering a rich array of antibodies, enzymes, and essential nutrients. Through breastfeeding, mothers </p>
                    <img src={feedingtwo} width='104px' height='93px' alt="" />
                </div>
                <div id='feeding-one-p'>
                    <p>provide their infants with a powerful shield against infections and diseases while fostering optimal growth and development during those crucial early months</p>
                    <p>Beyond its physiological benefits, breastfeeding fosters a profound emotional bond between mother and child, nurturing a connection that transcends mere nourishment. This intimate act of nurturing promotes feelings of security, comfort, and closeness, laying the foundation for a lifelong bond grounded in love and care.</p>
                </div>
                <h4>Embracing the Journey</h4>
                <div id='feeding-one'>
                    <img src={feedingthree} width='104px' height='93px' alt="" />
                    <p>As a gynecologist, I recognize that breastfeeding is not without its challenges. Many mothers may encounter hurdles along their breastfeeding journey, from latch difficulties to concerns about milk supply.</p>
                </div>
                <div id='feeding-one-p'>
                    <p>I staunchly advocate for breastfeeding as an invaluable practice for both mothers and babies</p>
                </div>





                <div id='navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>
            </div >
            {/* menue section */}
            < div id='menue-section' >
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

            </div >

        </>
    );
};
export default Articles;