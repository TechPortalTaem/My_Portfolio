import { ImArrowUpRight } from "react-icons/im";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { slideInVariants } from "../../utils/animation"
import { motion } from "motion/react"

const ServiceItem = ({services}) =>{
    const [activeIndex, setActiveIndex ] = useState(null);

            const openModal = index => {  setActiveIndex(index) }

             const closeModel=()=> {setActiveIndex(null) }


    return (
        <>
           {services.map((item,index)=>(

            <motion.li className="services-container" 
            key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2}}
                        variants={slideInVariants("top",0.5, 50, true)}
            >
                <div className="service-card">
                    <item.icon className="services-icon"/>
                    <h3>{item.title}</h3>
                    <div className="learn-more-btn" onClick={()=> openModal(index)}>
                        Learn More
                        <ImArrowUpRight className="learn-more-icon"/>
                    </div>
                </div>
                 <ServiceModal item={item} isActive={activeIndex === index} closeModel={closeModel}/>
            </motion.li>
           ))}

        </>
    )
}

export default ServiceItem