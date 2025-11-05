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
                    >Web Developer</motion.h2>
                    <motion.p
                         initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={2}
                        variants={slideInVariants("left",0.6, 60, true)}
                    >
                      <p>&nbsp;I’m a Frontend and Java Developer based in Berlin with a strong background in building modern, responsive, and high-performance web applications. My frontend expertise includes JavaScript, React, HTML5, CSS, Bootstrap, and WordPress, allowing me to create dynamic, user-friendly, and visually engaging interfaces that enhance the user experience.</p>
                        <br />
                        <p>&nbsp;In addition to frontend development, I have solid experience in Java and the Spring Framework (Spring Boot) for designing and maintaining reliable backend systems. I’m also familiar with the .NET Framework, enabling me to contribute effectively to cross-platform and full-stack projects.</p>
                        <br />
                        <p>&nbsp;I have hands-on experience with relational databases such as Oracle SQL, MySQL, and PostgreSQL, as well as modern development tools including Git, GitHub, GitLab, Maven, Docker, and Postman. I work confidently in Visual Studio, Eclipse, IntelliJ IDEA, and Figma environments.</p>
                        <br />
                        <p>&nbsp;Thriving in Agile teams, I apply Scrum methodologies and collaborate efficiently through JIRA and Microsoft Teams. Comfortable working on both Linux and Windows, I focus on delivering clean, maintainable code and seamless digital solutions that combine strong functionality with elegant design.</p>
                        <br />
                        
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
















