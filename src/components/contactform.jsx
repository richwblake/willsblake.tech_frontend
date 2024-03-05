import './contactform.css';

export default function ContactForm() {
    return (
        <div className='contact' id='contact-form'>
            <h1 className='lato'>Let's Get in Touch</h1>
            <form className='lato-regular contact-form'>
                <div className='name-email'>
                    <div className='form-input'>
                        <label htmlFor='full-name'>Name</label>
                        <input id='full-name' required/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email' >E-mail</label>
                        <input id='email' required type='email'/>
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor='contact-content'>What Can I Help With?</label>
                    <textarea id='contact-content' required/>
                </div>
                <div className='form-input'>
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
