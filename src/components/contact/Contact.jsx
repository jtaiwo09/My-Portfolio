import React, { useContext, useRef, useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef =  useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit=(e)=> {
        e.preventDefault();

        emailjs.sendForm('service_gii3hwd', 'template_trc0a8j', formRef.current, 'user_k4aESwB4eZ5t902ZlAVe8')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +2347067729362
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            taiwokelvin@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Olufemi Close, Idimu Lagos Nigeria.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story? </b>Get in touch. Always freelancing if right project comes along
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#222', color: darkMode && '#fff', borderBottom: darkMode && "1px solid grey"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#222', color: darkMode && '#fff', borderBottom: darkMode && "1px solid grey"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#222', color: darkMode && '#fff', borderBottom: darkMode && "1px solid grey"}} type="email" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#222', color: darkMode && '#fff'}} name="Message" rows="5" placeholder='Message...'></textarea>
                        <button>Submit</button>
                        {
                            done && <div className="c-success">Thank You...</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
