import '../css/Feedback.css';
import Footer from '../components/Footer';

function Feedback() {
    return (
        <>
            <div className="feedback-container">
                <h2>We would love to hear from you!</h2>

                <div className='feedback-form-container'>
                    <p className='feedback-form-text'>Please fill out the form below.</p>

                    <form className='feedback-form-firstname'>
                        <input type="text" id="fname" name="firstname" placeholder="FirstName"></input>
                    </form>

                    <form className='feedback-form-lastname'>
                        <input type="text" id="lname" name="lastname" placeholder="LastName"></input>
                    </form>

                    <form className='feedback-form-email'>
                        <input type="text" id="email" name="emailid" placeholder="Email"></input>
                    </form>

                    <form className='feedback-form-message'>
                        <textarea type="text" id="message" name="message" placeholder="Enter your message."></textarea>
                    </form>

                    <button className='feedback-form-button'>Submit</button>

                </div>

            </div>

            <Footer />
        </>
        
    );
}

export default Feedback;