import '../Components/ExcerciseWellness.css'
import menue from '../assets/Logos/Menue.png'
import momMateLogo from '../assets/Logos/mom mate logo.png'
import profileLogo from '../assets/Logos/profile.png'
import backButton from '../assets/Logos/back button.png'
import walkingone from '../assets/Logos/walking.png'
import walkingtwo from '../assets/Logos/walkingtwo.png'
import yogaone from '../assets/Logos/yogaone.png'
import yogatwo from '../assets/Logos/yogatwo.png'
import breathing from '../assets/Logos/breathing.png'
import homeImg from '../assets/Logos/Home.png'
import calenderImg from '../assets/Logos/Calender.png'
import notificationImg from '../assets/Logos/notification.png'
function ExcerciseWellness() {
    return (
        <>
            <div id='excersice-wellness'>
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
                <div id='excersice-bck-btn'>
                    <img src={backButton} width='15px' style={{ marginLeft: '20px' }} height='20px' alt="" />
                    <h3>Excersice Wellness</h3>
                </div>

                <div id='d-m-y'>
                    <h3>22 Feb 2024</h3>
                </div>

                <div id='excersice-weekdays'>
                    <div id="days"><p id='da'>M</p><p id='dat'>20</p></div>
                    <div id="days"><p id='da'>T</p><p id='dat'>21</p></div>
                    <div id="days"><p id='da'>W</p><p id='dat'>22</p></div>
                    <span id='home-span'><div id="days"><p id='da'>T</p><p id='dat'>23</p></div></span>
                    <div id="days"><p id='da'>F</p><p id='dat'>24</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>25</p></div>
                    <div id="days"><p id='da'>S</p><p id='dat'>26</p></div>
                </div>
                <div id='excersice-min'>
                    <h4>Cardiovascular Exercises</h4>
                    <p>40 min</p>
                </div>
                <div id='excercise-details'>
                    <div id='walking'>
                        <div> <img src={walkingone} width='64px' height='70px' alt="" /></div>
                        <div>
                            <h4>Walking</h4>
                            <p>15 min</p>
                        </div>
                    </div>
                    <div id='walking'>
                        <div> <img src={walkingtwo} width='64px' height='70px' alt="" /></div>
                        <div>
                            <h4>Low-impact aerobics</h4>
                            <p>5 min</p>
                        </div>
                    </div>


                    <div id='excersice-min'>
                        <h4>Flexibility and Stretching Exercises</h4>
                    </div>

                    <div id='walking'>
                        <div> <img src={yogaone} width='64px' height='70px' alt="" /></div>
                        <div>
                            <h4>Prenatal Yoga</h4>
                            <p>5 min</p>
                        </div>
                    </div>
                    <div id='walking'>
                        <div> <img src={yogatwo} width='64px' height='70px' alt="" /></div>
                        <div>
                            <h4>Butterfly Stretch</h4>
                            <p>5 min</p>
                        </div>
                    </div>

                    <div id='excersice-min'>
                        <h4>Breathing Exercise</h4>
                    </div>

                    <div id='walking'>
                        <div> <img src={breathing} width='64px' height='70px' alt="" /></div>
                        <div>
                            <h4>Diaphragmatic Breathing</h4>
                            <p>5 min</p>
                        </div>
                    </div>
                </div>

                <div id='excersice-navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>

            </div >
        </>
    );
};
export default ExcerciseWellness;