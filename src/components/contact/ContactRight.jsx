import ContactForm from "./ContactForm"
import { slideInVariants } from "../../utils/animation"
import { motion } from "motion/react"
 

const ContactRight = () => {
  return (
                     <div className="contact-right">
                        <motion.p
                                
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={slideInVariants("top",0.5, 50, false)}
                        
                        >I'm always open to discussing product 
                            
                            <span>
                                Java Backend Developer.
                            </span>
                        
                        </motion.p>
                      <ContactForm/>
                      
                    </div>
  )
}

export default ContactRight
