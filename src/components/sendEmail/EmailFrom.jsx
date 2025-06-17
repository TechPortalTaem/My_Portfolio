// import React, { useState } from "react"
// import emailjs from '@emailjs/browser';
// const EmailFrom =() => {

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceId = 'service_1pxlulm';
//     const templateId = 'template_s8djo0u';
//     const publicKey = 'idz4HxQZcU7Y8h18b';

//         const templateParams = {
//         from_name: name,
//         from_email: email,
//         to_name:  'tech.portal.taem',
//         message: message,
//         };
//        emailjs.send(serviceId, templateId, templateParams, publicKey)
//         .then((response) => {
//         console.log('Email sent successfully!', response);
//         setName('');
//         setEmail('');
//         setMessage('');
//        } )
//         .catch((error) => {
//         console.error('Error sending email:', error);
//         } )

//   }

//   return (
   
//     <form onSubmit={handleSubmit} className='emailForm'>

//     <input
//     type="text"
//     placeholder="Name"
//     value= {name}
//     onChange={(e) => setName(e.target.value)} />

//     <input 
//     type="email" 
//     placeholder="Your Email"
//     value= {email}
//     onChange={(e) => setEmail(e.target.value)} />
    
//     <textarea
//     cols="30"
//     rows="10"
//     value= {message}
//     onChange={(e) => setMessage(e.target.value)}>
        
//    </textarea>

// <button type="submit">Send Email</button>
//   </form>

    
//   )
// }

// export default EmailFrom