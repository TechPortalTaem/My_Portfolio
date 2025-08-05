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
  <p>&nbsp;I’m a Java Backend Developer based in Berlin, specializing in web application development. My core expertise lies in Java and the Spring Framework, including Spring Boot, for building scalable and maintainable backend systems.</p>
           <br />
      <p>&nbsp;I have strong experience working with relational databases, including Oracle SQL, MySQL, and PostgreSQL. I’m also familiar with .NET Framework, allowing me to contribute to cross-platform development projects when needed.</p>
        <br />
      <p>&nbsp;On the frontend side, I have a working knowledge of HTML5, CSS, and Bootstrap, which helps me collaborate effectively with frontend teams.</p>
     <br />
      <p>&nbsp;In my daily workflow, I use tools such as Git, GitHub, Maven, Postman, Docker, and CI/CD pipelines. I'm comfortable working in development environments like Eclipse, IntelliJ IDEA, and Visual Studio, and I utilize Swagger (OpenAPI) for API documentation and testing.</p>
   <br />
      <p>&nbsp;I thrive in Agile environments, applying Scrum and Kanban methodologies. I regularly collaborate through JIRA, Microsoft Teams, and contribute to team productivity in both Linux and Windows operating systems.</p>
                        
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
















