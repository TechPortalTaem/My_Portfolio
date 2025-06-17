import { aboutImg, atomnie_privichki } from "../../assets/images"
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import  "./Aboutme.css"
 import { FaDownload } from "react-icons/fa";
import { slideInVariants } from "../../utils/animation";
import { proflist } from "../../data/proflist";

 proflist
const Aboutme = () => {
  return (
        <section className="about section" id="about">
            <div className="container flex-center">
             <SectionTitle title="About me" subtitle="About me"/>
                <div className="about-wrapper">
                    <motion.div className="about-img"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                         variants={slideInVariants("left",0.8, 100, false)}
                    >
                      
                      <img src={aboutImg}/>
                      
                      </motion.div>
                    <div className="about-info">
                        <div className="description">
                            <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("right",0.6, 50, true)}
                            >My name is Giga </motion.h3>
                            <motion.h4
                         initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("right",0.7, 70, true)}
                            
                            > <span>  Front-end </span> &<span>  Back-end </span> Developer <span>in Berlin</span></motion.h4>
                            <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("right",0.9, 70, true)}
                            
                            >
                                I like to make things online.
                                My passion in web development began in 2021 when
                                I made the decision to learn how to create websites a web applications.  
                                Today, having completed many personal projects building accessible web aplications a digital experiences for various projects is currently my primary emphasis. 
                            </motion.p>
                        </div>
                        <ul className="professional-list">
                            {profList.map((item, index)=>(

                               <motion.li className="list-item" 
                               key={item.id} 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    custom={index}
                                    variants={slideInVariants("right",0.6, 40, true)}
                               
                               >
                                <span className="number">{item.number}</span>
                                <span className="text">{item.text}</span>
                            </motion.li>

                            ))}
                        </ul>
                        <motion.a href={atomnie_privichki} target="atomnie_privichki" className="inner-info-link"
                         custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={slideInVariants("bottom",0.6, 60, true)}
                        
                        >Download
                          <FaDownload/> 
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Aboutme