import "./Home.css"
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants,slideInVariants } from "../../utils/animation";


const icons = [
    { id: 1, href: "https://facebook.com", icon: <FaFacebook /> },
    { id: 2, href: "https://instagram.com", icon: <FaInstagram /> },
    { id: 3, href: "https://github.com/TechPortalTaem", icon: <FaGithub /> },

];


const Home = () => {
    return (
        <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((item, index) => (

                        <motion.a
                            href={item.href}
                            key={item.id}
                            custom={index}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {item.icon}
                        </motion.a>
                    ))}

                </div>
                <div className="home-info">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={0}
                        variants={slideInVariants("left",0.5, 60, true)}
                    > Hello. My name is Giga  
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={1}
                        variants={slideInVariants("left",0.7, 60, true)}
                    >Full Stack Developer</motion.h2>
                    <motion.p
                         initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={2}
                        variants={slideInVariants("left",0.6, 60, true)}
                    >I am a freelance fullstack developer from Berlin specialize in web applications (Java, Spring, SQL Developer, MySQL, React , HTML und CSS, Git )
                    </motion.p>
                    <motion.a 
                        href="#contact"
                        className="home-info-link inner-info-link"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={3}
                        variants={slideInVariants("left",0.7, 60, true)}
                    >
                        Contact Me
                        < FaCircleArrowRight />
                    </motion.a>
                </div>
                <motion.div className="home-img"
                         initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                         variants={slideInVariants("right",0.8, 100, false)}
                
                >
                    <img src={mainImg} alt="man" />
                </motion.div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                < FaArrowDownLong />
            </a>
        </section>
    )
}

export default Home
















