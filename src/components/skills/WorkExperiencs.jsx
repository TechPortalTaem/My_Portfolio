import { workExperiencs } from "../../data/workExperiencs"
import { slideInVariants } from "../../utils/animation"
import { motion } from "motion/react"

const WorkExperiencs = () => {
  return (

    <div className="education work-exp">
      <motion.h3 className="work-exp-title"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("top",0.7, 50, true)}
      
      >Work & Experience</motion.h3>
      <div className="skills-info">
        
           {workExperiencs.map((item,index)=>(

            <motion.div className="experience-card"
            key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("top",0.7, 50, true)}
            >
          <div className="upper">
            <h3>{item.title}</h3>
            <h5>{item.employmentType}</h5>
            <span>{item.period}</span>
          </div>
          <div className="hr"></div>
          <h4 className="label">{item.company}</h4>
          <p>{item.description}
          </p>
        </motion.div>

           ))} 


 
      </div>

    </div>
  )
}

export default WorkExperiencs