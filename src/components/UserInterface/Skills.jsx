import React from 'react';

// Define the styles
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  padding: '2rem',
};

const skillsSectionStyle = {
  background: 'linear-gradient(145deg, #e0f7fa, #b2ebf2)', // Light blue gradient
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  textAlign: 'center',
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#00796b', // Dark teal
};

const badgeStyle = {
  margin: '5px',
  display: 'inline-block',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const badgeHoverStyle = {
  ...badgeStyle,
  transform: 'scale(1.1)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
};

const Skills = () => {
  return (
    <section id="Skills" style={{ padding: '4rem', backgroundColor: '#ffebcd    ' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: '#007396' }}>
         CORE STRENGTHS 
        </h2>

        <div style={containerStyle}>
          {/* Frontend Section */}
          <div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Frontend Skills</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'JavaScript', color: 'F7DF1E', logoColor: 'black' },
      { skill: 'HTML5', color: 'E34F26', logoColor: 'white' },
      { skill: 'CSS3', color: '1572B6', logoColor: 'white' },
      { skill: 'React', color: '61DAFB', logoColor: 'black' }
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase()}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>





          {/* Backend Section */}
          <div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Backend Skills</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'Java', color: '007396' },
      { skill: 'Node.js', color: '8CC84B' },
      { skill: 'CSharp', color: '239120' },
      { skill: 'C++', color: '00599C' }
    ].map(({ skill, color }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
        alt={skill}
        title={skill} // Added title for accessibility
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: `2px solid #61dafb`, // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>




          {/* MERN Stack Section */}
          <div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>MERN Stack</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'MongoDB', color: '#47A248' },
      { skill: 'Express.js', color: '#000000' },
      { skill: 'React', color: '#61dafb' },
      { skill: 'Node.js', color: '#8CC84B' }
    ].map(({ skill, color }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color.replace('#', '')}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
        alt={skill}
        title={skill} // Added title for accessibility
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: `2px solid ${color}`, // Border matching the badge color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>



          {/* Additional Sections */}
          <div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Testing Skills</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'Selenium', color: '43B02A', logoColor: 'white' },
      { skill: 'JUnit', color: '25A162', logoColor: 'white' }
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase()}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Tools & Platforms</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'Git', color: 'F05032', logoColor: 'white' },
      { skill: 'GitHub', color: '181717', logoColor: 'white' },
      { skill: 'Docker', color: '2496ED', logoColor: 'white' },
      { skill: 'Visual Studio Code', color: '007ACC', logoColor: 'white' },
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase().replace(/ /g, '-').replace('_', '-')}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Database</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'MySQL', color: '4479A1', logoColor: 'white' },
      { skill: 'PostgreSQL', color: '336791', logoColor: 'white' },
      { skill: 'NoSQL', color: 'F2C94C', logoColor: 'black' },
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase().replace(/ /g, '-')}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Cloud & DevOps</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'AWS', color: 'FF9900', logoColor: 'white' }, // AWS badge color
      { skill: 'Azure', color: '0078D4', logoColor: 'white' }, // Azure badge color
      { skill: 'Jenkins', color: 'D24939', logoColor: 'white' }, // Jenkins badge color
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase()}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Operating Systems</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'Linux', color: 'FCC624', logoColor: 'black' }, // Linux badge color
      { skill: 'Unix', color: 'A8B400', logoColor: 'white' }, // Unix badge color
      { skill: 'Windows', color: '0078D4', logoColor: 'white' }, // Windows badge color
      { skill: 'Unix Shell Scripting', color: '4EAA1D', logoColor: 'white' }, // Unix Shell Scripting badge color
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Frameworks</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { skill: 'Spring Boot', color: '6DB33F', logoColor: 'white' }, // Spring Boot badge color
      { skill: 'Hibernate', color: '59666C', logoColor: 'white' }, // Hibernate badge color
      { skill: 'JDBC', color: '007396', logoColor: 'white' }, // JDBC badge color
      { skill: 'JSP', color: 'FF9E1B', logoColor: 'black' }, // JSP badge color
      { skill: 'Servlets', color: '007396', logoColor: 'white' }, // Servlets badge color
    ].map(({ skill, color, logoColor }) => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-${color}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=${logoColor}`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Web Technologies</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    <img
      src="https://img.shields.io/badge/-RESTful_API-007396?style=flat&logo=rest&logoColor=white"
      alt="RESTful API"
      style={{
        borderRadius: '8px', // Slightly rounded corners for badges
        transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
        filter: 'brightness(1)',
        cursor: 'pointer', // Pointer cursor for hover
        border: '2px solid #61dafb', // Border matching the title color
        padding: '5px', // Added padding for a more defined look
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
        e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale
        e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
      }}
    />
  </div>
</div>

          
         

<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Security</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {['Spring_Security'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Methodologies</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {['Agile', 'Scrum'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>


<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // More rounded corners for a softer look
  padding: '30px', // Increased padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Set a maximum width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>Microsoft .NET Technologies</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {[
      { name: 'ASP.NET_MVC_Core', color: '007396' }, 
      { name: 'NET_Core', color: '5c5e62' }, 
      { name: 'ADO.NET', color: '4c3f4a' }, 
      { name: 'CSharp', color: 'f34f29' }, 
      { name: 'Web_API', color: '007396' }, 
      { name: 'Entity_Framework', color: '00a4ef' }
    ].map(skill => (
      <img
        key={skill.name}
        src={`https://img.shields.io/badge/-${skill.name}-${skill.color}?style=flat&logo=${skill.name.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill.name}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>






<div style={{
  backgroundColor: '#282c34', // Dark background for contrast
  borderRadius: '15px', // Rounded corners for a softer look
  padding: '30px', // Padding for spaciousness
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for a lifted effect
  textAlign: 'center', // Center text alignment
  maxWidth: '600px', // Max width for better layout control
  margin: '20px auto', // Center the section on the page
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif', // Modern font for the title
    fontSize: '28px', // Increased font size for prominence
    color: '#61dafb', // Bright color for the title
    marginBottom: '20px', // Spacing below the title
  }}>PROJECT MANAGEMENT TOOLS</h3>
  <div style={{
    display: 'flex',
    gap: '15px', // Spacing between badges
    flexWrap: 'wrap', // Allow badges to wrap on smaller screens
    justifyContent: 'center', // Center the badges
  }}>
    {['JIRA', 'Postman'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
        alt={skill}
        style={{
          borderRadius: '8px', // Slightly rounded corners for badges
          transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions
          filter: 'brightness(1)',
          cursor: 'pointer', // Pointer cursor for hover
          border: '2px solid #61dafb', // Border matching the title color
          padding: '5px', // Added padding for a more defined look
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          e.currentTarget.style.filter = 'brightness(1.2)'; // Brighten on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
        }}
      />
    ))}
  </div>
</div>





        </div>
      </div>
    </section>
  );
};

export default Skills;
