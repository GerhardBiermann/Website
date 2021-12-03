import emailjs from "emailjs-com"
import React, { useRef } from 'react';

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_newvy0l', 'template_85kl6u8', form.current, 'user_idElJg9jSY04TFhQ1pnHj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return ( 
        <>
        <form ref={form} id="form-container" onSubmit={sendEmail}>
            <input type="text" id="email-input" placeholder="Email" name="Email"/>
            <input type="text" id="name-input" placeholder="Name" name="Name"/>
            <textarea id="additional-info-input" placeholder="Additional info" name="Additional info"></textarea>
            <button id="submit-form" type="submit">Submit</button>
        </form>
         <div id="form-info">
            <p>Feel free to contact me anytime and i will get back to you as soon as possible.</p>
        </div>
        </>
     );
}
 
export default Contact;