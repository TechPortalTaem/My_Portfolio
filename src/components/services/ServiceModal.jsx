import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ServiceModal = ({ item, isActive, closeModel }) => {
      console.log(isActive);
    return (
      
        <>
         

           <div className={`service-modal ${isActive ? "active" : ""}`}> 
           
                <div className="service-modal-body">
                    <FaXmark className="moda-close-btn marger:ri" onClick={closeModel}/>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>
                     {item.description}
                     </p>
                    <h4>{item.text}</h4>
                    <ul>
 
                        {item.list.map((item, index) => {
                            return (

                                <li key={index}>
                                    <FaCheckCircle/>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServiceModal