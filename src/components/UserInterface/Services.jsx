import React from 'react';
import frontendImg from "../../assets/images/front-end.png";

const Services = () => {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        {/* Education Section */}
        <SectionHeader title="Education" />

        <TimelineContainer>
          <TimelineCard
            title="CDAC"
            icon="ri-graduation-cap-fill"
            description="PG-DAC, IACSD, Pune"
            date="March 2024 – August 2024"
            additionalInfo="60.38%"
            imageSrc={frontendImg}
            animation="fade-left"
          />
          <TimelineCard
            title="Internship"
            icon="ri-robot-2-fill"
            description="Machine Learning Intern, Aiverient, Pune"
            date="June 2022 – February 2023"
            imageSrc={frontendImg}
            animation="fade-right"
          />
          <TimelineCard
            title="B.Tech"
            icon="ri-graduation-cap-fill"
            description="Mechanical Engineering, DKTE Textile and Engineering Institute, Ichalkaranji"
            date="2016 – 2020"
            additionalInfo="7.78 CGPA"
            imageSrc={frontendImg}
            animation="fade-left"
          />
          <TimelineCard
            title="HSC"
            icon="ri-school-fill"
            description="A.K. Junior College, Atpadi"
            date="2014 – 2016"
            additionalInfo="67.54%"
            imageSrc={frontendImg}
            animation="fade-right"
          />
          <TimelineCard
            title="SSC"
            icon="ri-school-fill"
            description="Shree Bhavnai Vidyalaya, Atpadi"
            date="2014"
            additionalInfo="90.60%"
            imageSrc={frontendImg}
            animation="fade-left"
          />
        </TimelineContainer>

        {/* Projects Section */}
        <SectionHeader title="Projects" />

        <div style={styles.projectsContainer}>
          <ProjectCard
            title="AgroMaart - Online Agriculture Marketplace"
            description={
              <ProjectDescription
                githubLink="https://github.com/Akshaybalte1998/AgroMart-Project.git"
                description="Developed a user-friendly web-based application to streamline the management of fertilizer shops, facilitating better communication and efficiency among shop owners, farmers, and delivery personnel."
                features={[
                  "Role-Based Access: Implemented a role-based system for shop owners, farmers, and delivery personnel, providing specific access and functionalities for each user group.",
                  "Inventory and Order Management: Enabled shop owners to manage inventory, view orders, and oversee deliveries. Farmers can browse fertilizers, check prices, place orders, and track delivery status.",
                  "Real-Time Updates: Delivery personnel can update delivery status in real-time, enhancing transparency and communication between stakeholders.",
                  "Data Security: Utilized Spring Security to ensure secure user authentication and data protection.",
                  "Impact: Improved the efficiency of fertilizer distribution by connecting all stakeholders on a single platform, reducing manual effort and increasing operational transparency."
                ]}
              />
            }
            technologies="React, HTML, CSS, Bootstrap (Frontend); Spring Boot, Spring Security, Hibernate (Backend); MySQL (Database)."
            imageSrc={frontendImg}
            animation="fade-right"
          />
          <ProjectCard
            title="Music Recommendation System"
            description="A personalized music recommendation system designed to suggest songs 
            based on user preferences and listening history. The system uses machine learning 
            models to analyze user behavior and provide tailored recommendations. By integrating 
            the Spotify API, the application fetches real-time music data and enhances the accuracy 
            of suggestions"
            technologies="Python, Flask, TensorFlow, Spotify API"
            imageSrc={frontendImg}
            animation="fade-left"
          />
          <ProjectCard
            title="Drug Review Using NLP"
            description="A drug review analysis tool that interprets and categorizes user reviews to
             provide insights into drug effectiveness, side effects, and overall user experience.
              Utilizing natural language processing (NLP) techniques, the system extracts meaningful
               patterns from unstructured text data. TensorFlow is employed to build and train models 
               that classify reviews based on sentiment and key medical aspects."
            technologies="Python, Flask, NLP, TensorFlow"
            imageSrc={frontendImg}
            animation="fade-right"
          />
        </div>
      </div>
    </section>
  );
};

/* Section Header Component */
const SectionHeader = ({ title }) => (
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionTitle}>{title}</h2>
  </div>
);

/* Timeline Container Component */
const TimelineContainer = ({ children }) => (
  <div style={styles.timelineContainer}>
    <div style={styles.timelineLine}></div>
    <div style={{ ...styles.timelineContent, marginTop: '3rem' }}>
      {children}
    </div>
  </div>
);

/* Project Description Component */
const ProjectDescription = ({ githubLink, description, features }) => (
  <p>
    <strong>GitHub:</strong> <a href={githubLink} style={styles.link}>{githubLink}</a> <br />
    <strong>Description:</strong> {description} <br />
    <strong>Key Features:</strong> <br />
    {features.map((feature, index) => (
      <span key={index} style={styles.featureItem}>
        <strong>{feature.split(':')[0]}:</strong> {feature.split(':')[1]} <br />
      </span>
    ))}
  </p>
);

/* Timeline Card Component */
const TimelineCard = ({ title, icon, description, date, additionalInfo, imageSrc, animation }) => (
  <div style={styles.cardContainer}>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
    <div style={styles.cardContent}>
      <div data-aos={animation} data-aos-duration="1200" style={styles.timelineCard}>
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`}></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {date && <p style={styles.cardDate}>{date}</p>}
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  </div>
);

/* Project Card Component */
const ProjectCard = ({ title, description, technologies, imageSrc, animation }) => (
  <div style={styles.projectCardContainer}>
    <div style={styles.projectCardContent}>
      <div data-aos={animation} data-aos-duration="1200" style={styles.projectCard}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDescription}>{description}</p>
        <p style={styles.cardTechnologies}><b>Technologies:</b> {technologies}</p>
      </div>
    </div>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
  </div>
);

/* CSS-in-JS Styles */
const styles = {
  section: {
    padding: '2rem',
    backgroundColor: '#708090',
    color: '#2c3e50',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  sectionTitle: {
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  timelineContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  timelineLine: {
    position: 'absolute',
    width: '5px',
    height: '100%',
    backgroundColor: '#FFFFF0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  timelineContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  projectsContainer: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  cardContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#FFA500',
    borderRadius: '0.5rem',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    padding: '1.5rem',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
    },
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  timelineCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease-in',
    cursor: 'pointer',
  },
  projectCardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#FFFFF0',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease-in',
  },
  projectCardContent: {
    flex: 1,
    paddingRight: '1rem',
  },
  projectCard: {
    marginBottom: '1rem',
  },
  iconContainer: {
    width: '50px',
    height: '50px',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#2980b9',
    fontSize: '1.25rem',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#34495e',
  },
  cardDate: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
  },
  cardAdditionalInfo: {
    fontSize: '0.9rem',
    color: '#27ae60',
  },
  link: {
    color: '#3498db',
    textDecoration: 'underline',
  },
  featureItem: {
    display: 'block',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  cardTechnologies: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginTop: '1rem',
  },
};

export default Services;
