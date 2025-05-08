import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/AboutUs.css';

function AboutUs() {

   
    return (
        <>

            <div className='about-us-container'>
                <h1 className='about-us-title'>About Us</h1>

                <section className='about-us-section-container'>
                    <div className='section-style section-1'>
                        <div className='section-title-1'>
                            <h2>History</h2>
                        </div>
                        <p>The first restaurant opened in Torbay in 1995. It was an instant success with long queues. The second opened in Rothesay Bay in 2006.</p>
                    </div>
                    <div className='section-style section-2'>
                        <div className='section-title-2'>
                            <h2>Experience India</h2>
                        </div>
                        
                        <p>Our restaurants' interior reflects traditional Indian decor from ages past. A distinctive element of Chands broad appeal is the simplicity of our decoration and furniture. This attracts more and more customers every day.
                        </p>
                    </div>
                    <div className='section-style section-3'>
                        <div className='section-title-3'>
                            <h2>Customer Care</h2>
                        </div>
                        
                        <p>It is one of our highest priorities. We place customer satisfaction at the forefront of our day to day operation.</p>
                    </div>
                    <div className='section-style section-4'>
                        <div className='section-title-4'>
                            <h2>Quality Of Food</h2>
                        </div>
                        
                        <p>Chand has established a reputation as a supplier of the highest quality products within the restaurant industry. We use the best fresh ingredients served with every dish being cooked hot and made to order. This factor has helped us to stay ahead of the competition. All dishes can be cooked mild, medium, and hot.</p>
                    </div>
                    <div className='section-style section-5'>
                        <div className='section-title-5'>
                            <h2>Value For Money</h2>
                        </div>
                        
                        <p>Chand has a reputation of providing delicious authentic Indian cuisine at exceptionally reasonable prices.</p>
                    </div>

                    <div className='about-us-endcard'>
                        <h2>We look forward to serving you soon!</h2>
                    </div>
                </section>

                
            </div>

            <Footer />
            

        </>
            
    );
}

export default AboutUs;