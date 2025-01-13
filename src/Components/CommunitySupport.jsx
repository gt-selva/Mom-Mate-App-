import '../Components/CommunitySupport.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import backButton from '../assets/Logos/back button.png'
import search from '../assets/Logos/searchpink.png'
import comment from '../assets/Logos/commentpink.png'
import postprofileone from '../assets/Logos/postporfileone.png'
import postsave from '../assets/Logos/postsave.png'
import postimageone from '../assets/Logos/postimageone.png'
import likesbutton from '../assets/Logos/likebutton.png'
import viewsbutton from '../assets/Logos/Views.png'
import Commentsbutton from '../assets/Logos/Comments button.png'
import postprofiletow from '../assets/Logos/postprofiletwo.png'
import postprofiletwo from '../assets/Logos/postprofiletow.png'
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
function CommunitySupport() {
    return (
        <>
            <div id='communitysupport'>
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

                <div id='bck-btn-today-btn'>
                    <Link to={'/home'}>
                        <div id='community-bck-btn' style={{ display: 'flex' }}>
                            <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                            <h3 style={{ color: 'black' }}>Community</h3>
                        </div></Link>
                    <div id='community-img-btn'>
                        <img src={search} width='25px' height='25px' alt="" />
                        <img src={comment} width='22px' height='22px' alt="" />
                    </div>
                </div>
                <div id='community-nav-btn'>
                    <div id='buttons-for-nav'>
                        <div id='sug'>
                            <p>Suggested</p>
                        </div>
                        <div>
                            <p>Following</p>
                        </div>
                        <div id='new'>
                            <p>New</p>
                        </div>
                    </div>
                </div>

                {/* post content 1*/}

                <div id='posts'>
                    <div>
                        <div id='profile'>
                            <div id='profile-details'>
                                <img src={postprofileone} width='36px' height='36px' alt="" />
                                <div>
                                    <h5>Manisha Garg</h5>
                                    <p>2 hours ago</p>
                                </div>
                            </div>
                            <div>
                                <img src={postsave} width='16px' height='20px' alt="" />
                            </div>
                        </div>
                        <div id='post-hastag'>
                            <h5>#Welcomingthenewborn</h5>
                        </div>
                        <div id='post-img'>
                            <img src={postimageone} width='100%' height='234px' alt="" />
                        </div>

                        <div id='likes-views-comment'>
                            <div>
                                <img src={likesbutton} width='13px' height='12px' alt="" />
                                <p>5.6K</p>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={viewsbutton} width='15px' height='10px' alt="" />
                                <p>7K</p>
                                <img src={Commentsbutton} width='10px' height='10px' alt="" />
                                <p>525</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* post content 2 */}
                <div id='posts'>
                    <div>
                        <div id='profile'>
                            <div id='profile-details'>
                                <img src={postprofiletow} width='36px' height='36px' alt="" />
                                <div>
                                    <h5>Manisha Garg</h5>
                                    <p>2 hours ago</p>
                                </div>
                            </div>
                            <div>
                                <img src={postsave} width='16px' height='20px' alt="" />
                            </div>
                        </div>
                        <div id='post-hastag'>
                            <h5> I'll describe the pros and cons of each breastfeeding tools...</h5>
                        </div>
                        <div id='post-img'>
                            <img src={postprofiletwo} width='100%' height='234px' alt="" />
                        </div>

                        <div id='likes-views-comment'>
                            <div>
                                <img src={likesbutton} width='13px' height='12px' alt="" />
                                <p>2.6K</p>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img src={viewsbutton} width='15px' height='10px' alt="" />
                                <p>1K</p>
                                <img src={Commentsbutton} width='10px' height='10px' alt="" />
                                <p>55</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='excersice-navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
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
        </>
    );
};
export default CommunitySupport;