import { contactData } from "../../data/contactData"
import { slideInVariants } from "../../utils/animation"
import { motion } from "motion/react"

contactData

const ContactLeft = () => {
  return (
                       <div className="contact-left">
                        <motion.h2 
                       
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={slideInVariants("top",0.5, 50, false)}
                        
                        >Let's discuss your project</motion.h2>
                        <ul className="contact-list">
                            {contactData.map((item, index) =>(
                            <motion.li
                            key={item.id}
                                 custom={index}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: false, amount: 0.2 }}
                                  variants={slideInVariants("top",0.5, 50, true)}
                             > 
                                <h3>
                                    <item.icon/> {item.title}
                                 </h3>
                                <span>
                                    <a href={item.link}>{item.value}</a>
                                </span>
                            </motion.li>

                            ))}
                        </ul>
                    </div>
  )
}

export default ContactLeft