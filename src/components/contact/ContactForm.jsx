import { FaPaperPlane } from "react-icons/fa6";
import { slideInVariants } from "../../utils/animation"
import { motion } from "motion/react"

 
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
 

const ContactForm = () => {
// #####################_________________####################


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_1pxlulm';
    const templateId = 'template_s8djo0u';
    const publicKey = 'idz4HxQZcU7Y8h18b';

        const templateParams = {
        from_name: name,
        from_email: email,
        to_name:  'tech.portal',
        message: message,
        };
       emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
       } )
        .catch((error) => {
        console.error('Error sending email:', error);
        } );
} 

    return (
        <form  onSubmit={handleSubmit} className="form contact-form">
            <motion.div className="first-row"
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={slideInVariants("top",0.5, 50, true)}
            
            >
            <input
                type="text"
                placeholder="Name"
                value= {name}
                onChange={(e) => setName(e.target.value)} />
            </motion.div>
            <motion.div className="second-row"
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={slideInVariants("top",0.5, 50, true)}
            >
                <input placeholder="Email" type="email" 
                   value= {email}
               onChange={(e) => setEmail(e.target.value)} />


                {/* <input placeholder="Subject" type="text" /> */}
            </motion.div>
            <motion.div className="third-row"
                                 custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                variants={slideInVariants("top",0.5, 50, true)}
            
            >
              <textarea
              placeholder="Message"
                cols="30"
                rows="10"
                value= {message}
                onChange={(e) => setMessage(e.target.value)}
                >
                    
              </textarea>
       

            </motion.div>
            <motion.button className="contant-btn inner-info-link-btn" 
            type="submit" 
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={slideInVariants("top",0.5, 50, true)}
            >
                Send Message
                <FaPaperPlane/>
            </motion.button>

        </form>

    )
}

export default ContactForm