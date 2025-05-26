import '../css/Home.css'
import { Link } from "react-router-dom";
import LocationDropdown from '../components/LocationDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import PersonDropdown from '../components/PersonDropDown';
import TimeDropDown from '../components/TimeDropDown';
import DateDropDown from '../components/DateDropDown';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';



function Home() {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
            // Delay to ensure the DOM is ready
            setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        }
    }, [location.state]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add the class to trigger the animation
                        entry.target.classList.add('show-image');
                        observer.unobserve(entry.target); // Stop observing once it has entered the viewport
                    }
                });
            },
            { threshold: 0.25 } // Trigger when 20% of the image is in the viewport
        );

        // Target images to observe
        const images = document.querySelectorAll('.section-1-img, .section-4-img, .section-5-img');
        images.forEach(image => observer.observe(image));

        // Cleanup observer on component unmount
        return () => {
            images.forEach(image => observer.unobserve(image));
        };
    }, []);


    return (
        <>

            <div className='main-bg-container'>

                <div className="banner">

                    <div className="banner-container">
                    
                        <video className="banner-video" autoPlay loop muted>
                                <source src="videos/BannerVideo.mp4" type="video/mp4" />
                        </video>
                        

                        <div className='banner-text-container'>
                            <h2 className='banner-text-welcome'>WELCOME TO</h2>
                            <h1 className='banner-text-name'>THE CHAND INDIAN RESTAURANT</h1>
                        </div>

                    </div>
                    


                </div>

                <div className='opening-hours-container'>
                        <div className='opening-hours-light-left'></div>
                        <div className='opening-hours-light-right'></div>
                        <p className='opening-hours-text'>Our restaurant is open for dinner daily from 5 pm. We can open for lunch on special request for groups of 15 or more people. Closing times may differ subject to how busy the restaurant is. Gift vouchers for both of our restaurants are available at the counter.</p>
                </div>

                <div className="menu-container">
                    <div className='menu-bg-container'>

                    </div>

                    <div className="menu-items-container">

                        <div>
                            <Link to="../pages/Starters"><div className="menu-item-type menu-item-starters"></div>
                            <div className='menu-item-type-text'>STARTERS</div></Link>
                        </div>
                        
                        <div>
                            <Link to="../pages/Mains"><div className="menu-item-type menu-item-mains"></div>
                            <div className='menu-item-type-text'>MAINS</div></Link>
                        </div>
                        
                        <div>
                            <Link to="../pages/Desserts"><div className="menu-item-type menu-item-desserts"></div>
                            <div className='menu-item-type-text'>DESSERTS</div></Link>
                        </div>

                        <div>
                            <Link to="../pages/Drinks"><div className="menu-item-type menu-item-drinks"></div>
                            <div className='menu-item-type-text'>DRINKS</div></Link>
                        </div>
                        
                    </div>

                </div>

            </div>
            

            <div className="highlights-container">
                <div className="highlights-section highlights-section-1">
                    <img className='section-1-img' src='images/MainImg1.png' alt='Serving Food'></img>
                </div>

                <div className="highlights-section highlights-section-2">
                    <div>
                        <h2>The Indian Touch!</h2>
                        <p>Indian Cuisine is as varied as its terrain. From the rich meat dishes to the simple vegetarian cuisine, the art of eating Indian food is to sample several dishes sharing the different tastes with your guests. Our chefs use traditional Indian herbs and spices, which makes our food tastier. Our customers do not have to make any special plans to visit but we are always there when they feel hungry.</p>
                    </div>
                    
                </div>

                <div className="highlights-section highlights-section-3">
                    <div>
                        <h2>Clean And Fresh!</h2>
                        <p>We provide a clean environment and do not permit smoking anywhere in the premises. Both of our restaurants hold an <strong>'A'</strong> grade certificate from North Shore City Council Dining. Our restaurants are fully licensed, plus BYO wine only.</p>
                    </div>
                </div>

                <div className="highlights-section highlights-section-4">
                    <img className='section-4-img' src='images/MainImg2.png' alt='Fresh Vegetables'></img>
                </div>

                <div className="highlights-section highlights-section-5">
                    <img className='section-5-img' src='images/MainImg3.png' alt='Food Delivery'></img>
                </div>

                <div className="highlights-section highlights-section-6">
                    <div>
                        <h2>Craving?<br></br>We’re On the Way!</h2>
                        <p>Food delivery is available for Browns Bay, Campbells Bay, Castor Bay, Fairview Heights, Forrest Hill, Long Bay, Mairangi Bay, Murrays Bay, Northcross, Oteha, Pinehill, Rosedale, Rothesay Bay, Torbay, Unsworth Heights and Waiake in North Shore Auckland.</p>
                        <button>Order Online<FontAwesomeIcon className='arrow-right-icon' icon={faCircleArrowRight} /></button>
                    </div>
                </div>
            </div>

            <div className='dine-in-container' id='dine-in'>
                <div className='dine-in-section dine-in-text'>
                    <h1>Dine In</h1>
                </div>

                <div className='dine-in-section dine-in-location-container'>
                    <div className='dine-in-location-1'>
                        <h2>Chand Torbay</h2>
                        <div className='dine-in-time-section'>
                            <p className='dine-in-time'>Lunch: 11:30am - 2:30pm<br/>Dinner: 4:30pm - 10:00pm</p>
                            <p className='dine-in-address'><strong>Address:</strong><br/>1028 Beach Road, Torbay<br/>(09) 473 6259</p>
                            <button className='dine-in-button'>View Menu</button>
                        </div>
                       
                    </div>

                    <div className='separating-bar'></div>

                    <div className='dine-in-location-2'>
                        <h2>Chand Rothesay Bay</h2>
                        <div className='dine-in-time-section'>
                            <p className='dine-in-time'>Dinner: 4:30pm-10:00pm<br/></p>
                            <p className='dine-in-address'><strong>Address:</strong><br/>603 Beach Road, Rothesay Bay<br/>(09) 478 1400</p>
                            <button className='dine-in-button'>View Menu</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='reserve-table-container' id='reserve-table'>
                
                <div className='reserve-table-text'>
                    <h1>Reserve Your Table</h1>
                </div>
                <div className='reserve-table-form'>
                    <div className='reserve-table-form-text'>
                        <p><strong>NOTE:</strong> Please don't book online after 5pm, just ring us on (09) 478 1400 Rothesay Bay and (09) 473 6259 Torbay to book a table.</p>
                    </div>

                    <div className="reserve-table-form-location">
                        <LocationDropdown />
                    </div> 

                    <div className='reserve-table-form-date'>
                        <DateDropDown />
                    </div>

                    <div className='reserve-table-form-time'>
                        <TimeDropDown />
                    </div>

                    <div className='reserve-table-form-person'>
                        <PersonDropdown />
                    </div>

                    <button className='reserve-table-form-button'>Next</button>

                </div>

            </div>

            <Footer />
        </>
        
    );
}

export default Home;