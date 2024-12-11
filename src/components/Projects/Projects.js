import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import roadAccident from "../../Assets/Projects/roadAccident.jpeg";
import vrindastore from "../../Assets/Projects/vrindastore.png";
import salessuperstore from "../../Assets/Projects/salessuperstore.png";
import walmartdata from "../../Assets/Projects/walmartdata.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={roadAccident}
              isBlog={false}
              title="Road Accident Dashboard"
              title1="Project Overview:"
              description1="Developed and executed a comprehensive Tableau project to analyze road accident data, 
              aiming to provide actionable insights for improving road safety and reducing accident rates. 
              The project utilized data visualization techniques to present complex information in an accessible 
              and informative manner." 
              title2="Project Impact:"
              description2="Increased awareness of road safety issues among stakeholders. 
              Facilitated evidence-based decision-making for implementing preventive measures. 
              Contributed to a reduction in accident rates in targeted areas through focused interventions."
              title3="Technologies Used:"
              description3="Tableau for data visualization and dashboard development. 
              This Tableau road accident analysis project served as a valuable tool for informed 
              decision-making and proactive road safety measures, ultimately contributing to the well-being of 
              the community and the reduction of accidents."
              ghLink="https://github.com/Dishant1993/Tableau-Road-Accident"

              // demoLink="https://www.youtube.com/watch?v=CeW1M_7AFOU&t=6097s"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={vrindastore}
              isBlog={false}
              title="Vrinda Store Data Analysis"
              title1="Project Overview:"
              description1=" Vrinda Store wants to create its annual sales report for 2022,
              so that they can understand their customers and increase more saes in 2023.
              Tool: Excel              
              In this end to end project I have worked on              
              Data Cleaning
              Data Processing
              Data Analysis
              Data Visualization
              Reporting
              Presented Insights to the client.                                  
              Through Slicers I can understand visually which month has more sales and these values 
              change accordingly."
              ghLink="https://github.com/Dishant1993/Dashboard-in-Excel"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={salessuperstore}
              isBlog={false}
              title="Sales Super store Dashboard"
              title1="Project Overview:"
              description1=" To contribute to the success of a business by utilizing data analysis techniques, 
              especially focusing on time series analysis, to provide valuable insights and accurate sales 
              forecasting  
              Conclusion: Incorporated data analysis techniques using Power BI, 
              specializing in time series analysis, to deliver valuable insights, 
              accurate sales forecasting, and interactive dashboard creation, driving business success."
              ghLink="https://github.com/Dishant1993/PowerBI-Sales-Superstore"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={walmartdata}
              isBlog={false}
              title="Walmart Data Analysis Project"
              title1="Project Overview:"
              description1="This project aims to explore the Walmart Sales data to understand top performing branches and products,
              sales trend of of different products, customer behaviour. 
              The aims is to study how sales strategies can be improved and optimized"
              title2="Technologies Used:"
              description2="SQL"
              title3="Tools Used:"
              description3="My Sql Work Bench"
              ghLink="https://github.com/Dishant1993/Walmart-SQL-Data-Analysis/blob/main/Walmart%20SQL%20Project.pptx"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
