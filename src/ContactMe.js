import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kul3ygt', 'template_rtbzsfc', form.current, {
        publicKey: 'HogmNa18YlPlt8SIv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
        <form ref={form} onSubmit={sendEmail}>
            <div className = "contact-me">
                <div className = "name">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="user_name" />
                </div>

                <div className = "email">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="user_email" />
                </div>

                <div className = "message">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" />
                </div>

                <div className = "submit">
                 <input type="submit" value="Send Message" />
                </div>
            </div>
       
        </form>
   
  );
};