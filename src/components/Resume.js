import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumeData = {
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe"
    },
    summary: "Experienced Full Stack Developer with 5+ years building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about creating efficient, user-friendly solutions and mentoring junior developers.",
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Full Stack Developer",
        duration: "2021 - Present",
        responsibilities: [
          "Led development of microservices architecture serving 1M+ users",
          "Mentored team of 5 junior developers and conducted code reviews",
          "Reduced API response time by 40% through optimization",
          "Implemented CI/CD pipeline reducing deployment time by 60%"
        ]
      },
      {
        company: "Digital Innovations Co.",
        position: "Full Stack Developer",
        duration: "2019 - 2021",
        responsibilities: [
          "Developed RESTful APIs and responsive front-end applications",
          "Collaborated with cross-functional teams in Agile environment",
          "Integrated third-party payment systems and APIs",
          "Improved application performance by 35% through code refactoring"
        ]
      },
      {
        company: "StartUp Labs",
        position: "Junior Developer",
        duration: "2018 - 2019",
        responsibilities: [
          "Built and maintained web applications using React and Node.js",
          "Participated in daily stand-ups and sprint planning",
          "Wrote unit tests achieving 80% code coverage",
          "Assisted in database design and optimization"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        year: "2018",
        gpa: "3.8/4.0"
      }
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
      frontend: ["React", "Redux", "Vue.js", "HTML5", "CSS3", "Sass"],
      backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
      tools: ["Git", "Docker", "AWS", "Jenkins", "Jira", "Webpack"]
    },
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        link: "github.com/johndoe/ecommerce-platform"
      },
      {
        name: "Task Management System",
        description: "Collaborative project management tool with real-time updates",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        link: "github.com/johndoe/task-manager"
      }
    ]
  };

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <div className="contact-info">
          <span>{resumeData.contact.email}</span>
          <span>{resumeData.contact.phone}</span>
          <span>{resumeData.contact.location}</span>
        </div>
        <div className="social-links">
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="resume-section">
        <h3>Professional Summary</h3>
        <p>{resumeData.summary}</p>
      </section>

      <section className="resume-section">
        <h3>Experience</h3>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="job-header">
              <h4>{job.position}</h4>
              <span className="duration">{job.duration}</span>
            </div>
            <h5>{job.company}</h5>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="edu-header">
              <h4>{edu.degree}</h4>
              <span>{edu.year}</span>
            </div>
            <p>{edu.school}</p>
            <p className="gpa">GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3>Technical Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Languages</h4>
            <p>{resumeData.skills.languages.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h4>Frontend</h4>
            <p>{resumeData.skills.frontend.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <p>{resumeData.skills.backend.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <p>{resumeData.skills.tools.join(", ")}</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3>Projects</h3>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="project-item">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p className="tech-stack">Technologies: {project.technologies.join(", ")}</p>
            <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;