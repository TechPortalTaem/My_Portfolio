import {
  portfolio_1,
  portfolio_2,
  portfolio_3,
  portfolio_4,
  portfolio_5,
  portfolio_6,
} from "../assets/images";




export const portfolioData = [
  {
    id: 1,
    title: "Employee Management System (Java + MySQL)",
    category: "Backend Development",
    imgSrc: portfolio_1,
    description:
      "Developed a RESTful API with Spring Boot to manage employee data. Integrated MySQL for persistence and documented endpoints using Swagger.",
  },
  {
    id: 2,
    title: "Task Tracker (Java + React)",
    category: "Full Stack",
    imgSrc: portfolio_2,
    description:
      "Built a full-stack application using Spring Boot and React to create, edit, and assign tasks. Included token-based auth and responsive UI.",
  },
  {
    id: 3,
    title: "Dockerized Microservice with PostgreSQL",
    category: "Microservices",
    imgSrc: portfolio_3,
    description:
      "Created a Spring Boot microservice containerized with Docker. Used PostgreSQL as a database and connected via Docker Compose.",
  },
  {
    id: 4,
    title: "API Documentation & Testing with Swagger",
    category: "API Development",
    imgSrc: portfolio_4,
    description:
      "Designed and documented multiple REST endpoints using Swagger UI and OpenAPI for fast testing and team integration.",
  },
  {
    id: 5,
    title: "Linux-Based DevOps Workflow",
    category: "DevOps",
    imgSrc: portfolio_5,
    description:
      "Set up a Git-based CI/CD flow for Java projects using bash scripts and Docker on Ubuntu. Automated builds and tested deployments.",
  },
  {
    id: 6,
    title: "Agile Project Dashboard",
    category: "Frontend UI",
    imgSrc: portfolio_6,
    description:
      "React dashboard for agile teams with sprint board, status filtering, and burndown charts. Connected to Spring Boot backend.",
  },
];
