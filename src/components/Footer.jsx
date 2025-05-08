import '../css/Footer.css';

function Footer () {
    return (
        <>
            <footer className='footer-container'>
                <div className='footer-res-location-1 footer-res-location-style'>
                    <h2>Rothesay Bay</h2>
                    <p>603 Beach Road<br/>Rothesay Bay<br/>(09) 478 1400</p>
                </div>
                <div className='footer-res-location-2 footer-res-location-style'>
                    <h2>Torbay</h2>
                    <p>1028 Beach Road<br/>Torbay<br/>(09) 473 6259</p>
                </div>
                <div className='footer-working-hours'>
                    <h2>Opening Hours</h2>
                    <p>Mon - Sun: 4:30pm-10:00pm</p>
                    <h2 className="footer-section-3-text">Torbay Lunch Hours</h2>
                    <p>Mon - Sun: 11:30am-2:30pm</p>
                </div>
                <div className='footer-about-us'>
                    <h2>About Us</h2>
                    <p>The first restaurant opened in Torbay in 1995. It was an instant success with long queues. The second opened in Rothesay Bay in 2006.</p>
                </div>
                <div className='footer-copyright'>
                    <p>copyright © 2008-2018 all rights reserved   |   Website designed by Order Meal</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;