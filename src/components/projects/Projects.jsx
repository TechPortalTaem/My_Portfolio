import { Navigation, Pagination } from "swiper/modules";
import { projectsData } from "../../data/projectsData"
import "./Projects.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SectionTitle from "../sectionTitle/SectionTitle";


const Projects = () => {


  return (
    <section className="section projects " id="projects">
      <div className="container flex-center">
        <SectionTitle title="Projects" subtitle="Projects" />
        <div className="projects-wrapper">
          <Swiper modules={[Navigation, Pagination]} spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="projects-swiper"
          >
            {projectsData.map(projects => (
              <SwiperSlide key={projects.id}>
                <div className="swiper-slide swiper-projects-block">
                  <div className="projects-img">
 
                    <img src={projects.imgSrc} alt={projects.name} />
                     
                    
                  </div>
                  <div className="projects-details">
                    <p>
                      {projects.description}
                    </p>
                    <h3>{projects.name}</h3>
                     <p></p>
                    <span>{projects.position} </span>
                    
                   <a href={projects.url}  > <h3 className="projects_href_color">{projects.url }</h3></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  )
}

export default Projects