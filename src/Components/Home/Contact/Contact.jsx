import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie-player';
import animationData from '../../../assets/a-2.json'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1crdyv9', 'template_xdjndfk', form.current, 'EPpJd9tqcDCGo1gO7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='about lg:flex mt-20 px-24 justify-between'>
            <div>
                <span className='font-extrabold text-6xl text-orange-500'>Contact</span> <br />
                <span className='font-bold text-5xl text-green-500'>Me</span>
                <Lottie
              animationData={animationData}
              play
              loop
              style={{ width: 400, height: 400 }}
              >

                </Lottie>
            </div>
            <form ref={form} onSubmit={sendEmail} className='space-y-5'>
                <input type="text" placeholder=' Name' name="user_name" id=""  className="input input-bordered input-accent w-full max-w-xs" />
                <br /><input type="email" placeholder='Email' name="user_email" id=""  className="input input-bordered input-accent w-full max-w-xs" />
                <textarea name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
               <br /> <input type="submit" value="Sent" className="btn btn-outline btn-success" />
            </form>
        </div>
    );
};

export default Contact;