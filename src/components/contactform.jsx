import './contactform.css';
import { useState } from 'react';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        content: "",
    });

    const handleSubmit = (e) => {
        
    };

    const updateFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='contact' id='contact-form'>
            <h1 className='lato'>Let's Get in Touch</h1>
            <form className='lato-regular contact-form' onSubmit={handleSubmit}>
                <div className='name-email'>
                    <div className='form-input'>
                        <label htmlFor='full-name'>Name</label>
                        <input id='full-name' name='name' value={formData.name} onChange={updateFormData} required/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email' >E-mail</label>
                        <input id='email' name='email' value={formData.email} onChange={updateFormData} required type='email'/>
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor='contact-content'>What Can I Help With?</label>
                    <textarea id='contact-content' name='content' value={formData.content} onChange={updateFormData} required/>
                </div>
                <div className='form-input'>
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
