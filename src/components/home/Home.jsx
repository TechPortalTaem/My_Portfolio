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
                    >Java Backend Developer</motion.h2>
                    <motion.p
                         initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={2}
                        variants={slideInVariants("left",0.6, 60, true)}
                    >
                     &nbsp; I’m a Java Backend Developer based in Berlin, specializing in web application development. 
                    My core expertise lies in Java and the Spring Framework,
                    with strong experience in working with relational databases such as MySQL and PostgreSQL.
                    I also have frontend knowledge with React, HTML, and CSS, and I’m proficient in version control using Git and GitHub.
                    Additionally, I use tools like Docker, Swagger (OpenAPI), and CI/CD pipelines to support modern development workflows.
                    I thrive in Agile environments, collaborating through Kanban boards, Jira, and Microsoft Teams.
                        
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
















