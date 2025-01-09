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
function Home() {
    return (
        <>
            <div id='home'>
                <div id='home-nav-bar'>
                    <div>
                        <img src={menue} width='32px' height='32px' alt="menue" />
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
                        <div id='content-2'>
                            <p>Excersice Wellness</p>
                            <img src={excerciseImg} width='160px' height='120px' alt="" />
                        </div>
                    </div>
                    <div id="content">
                        <div id='content-3'>
                            <p>Community Support </p>
                            <img src={communityImg} width='93px' height='90px' alt="" />
                        </div>
                        <div id='content-4'>
                            <p>Breastfeeding Support </p>
                            <img src={breasfeedImg} width='104px' height='100px' alt="" />
                        </div>
                    </div>
                </div>
                <div id='navigation-buttons'>
                    <img src={homeImg} width='34px' height='34px' alt="" />
                    <img src={calenderImg} width='34px' height='34px' alt="" />
                    <img src={notificationImg} width='28px' height='32px' alt="" />
                </div>
            </div>
        </>
    );
};
export default Home;