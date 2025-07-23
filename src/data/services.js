import{FaJava  , FaUsersGear } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
    

export const services =[


{
  icon: FaJava ,
title: "Java Development",
subtitle: "What is Java Development ?",
description:
"The process of building software and applications using the Java programming language.",
list: [
    "Java code writing",
    "Code testing & debugging",
    "Application improvement & optimization"
  ],
},

{
icon: GrSystem ,
title: "System Design",
subtitle: "What is System Design?",
description:
"The process of defining the architecture, components, modules, interfaces, and data of a system to meet specific requirements...",
list: [
"Software Architecture Design",
"System Blueprint Creation",
"omponent & Module Mapping",
"System Interaction Planning", ],
},
 
{
icon: FaUsersGear,
title: "Team Collaboration",
subtitle: "What is Collaboration in Development?",
description:  "Working with developers, designers, and product managers to build better software....",
list: ["Team communication", "Cross-functional planning", "Collaborative problem-solving"],

},
{
icon: FaTools,
title: "Maintenance & Support",
subtitle: "What is Maintenance & Support?",
description: "Ongoing care to ensure stable performance of Java applications by identifying and fixing issues.",
list:  ["Bug fixing", "Performance monitoring", "System updates"],

}

]
