import React, { useState } from 'react';

const Resume = () => {
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJobExpansion = (index) => {
    setExpandedJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const resumeData = {
    name: "Dino Horn",
    title: "Senior Full Stack Software Engineer",
    contact: {
      phone: "(913) 295-4219",
      email: "dinohorn35@gmail.com",
      location: "Overland Park, KS 66221"
    },
    summary: "Accomplished Senior Software Engineer and entrepreneur with extensive experience leading the end-to-end design, development, and deployment of innovative software solutions. A trusted team leader with a proven ability to manage projects, mentor high-performing teams, and collaborate effectively with cross-functional stakeholders to meet ambitious deadlines. Passionate about leveraging modern technologies like Next.js, React, and Node.js to drive productivity and growth.",
    skills: {
      "Front-End": ["Next.js", "React", "AngularJS", "JavaScript", "HTML5", "CSS3", "SASS/LESS", "TailwindCSS", "Material UI"],
      "Back-End": ["Node.js", "Express", "Java", "PL/SQL", "PHP"],
      "Databases": ["MongoDB", "MySQL"],
      "Authentication": ["NextAuth.js"],
      "Cloud & DevOps": ["AWS (EC2, S3)", "Vercel", "Git", "SVN"],
      "Project Management": ["Agile", "Scrum", "Waterfall", "SDLC", "Jira", "Kanban", "Confluence", "Trello", "Basecamp", "MSProject"],
      "Design & Other": ["Adobe Creative Suite", "Photoshop", "Illustrator", "Premier Pro", "Oracle WebCenter", "Magento"]
    },
    experience: [
      {
        position: "Systems Engineer, AI Lead",
        company: "AutoZone",
        location: "Memphis, TN",
        duration: "02/2021 – Present",
        current: true,
        responsibilities: [
          "Leading AI initiatives and implementing machine learning solutions to optimize business processes",
          "Architecting scalable systems to support enterprise-wide AI/ML deployments",
          "Collaborating with cross-functional teams to identify and implement AI-driven improvements"
        ]
      },
      {
        position: "Sr. Software Engineer",
        company: "SnapIT",
        location: "Overland Park, KS",
        duration: "07/2021 – 12/2021",
        responsibilities: [
          "Provided technical mentorship to engineering teams, improving development workflows and coding practices",
          "Assisted in establishing and enforcing coding standards to enhance code quality and team efficiency"
        ]
      },
      {
        position: "Sr. Software Engineer",
        company: "Enlightened Hire",
        location: "Overland Park, KS",
        duration: "01/2020 – 06/2021",
        responsibilities: [
          "Developed a full-stack Single Page Application (SPA) from the ground up using a modern JavaScript stack including Next.js, React, and Node.js",
          "Implemented secure user authentication with NextAuth.js and designed RESTful APIs to connect with a MongoDB Atlas database"
        ]
      },
      {
        position: "Sr. Software Developer, Frontend Team Lead",
        company: "Walsworth Publishing",
        location: "Overland Park, KS",
        duration: "03/2013 – 10/2020",
        responsibilities: [
          "Led frontend development for a flagship yearbook design platform, a complex AngularJS application suite used by schools nationwide to create, manage, and submit yearbooks for publication",
          "UI development utilizing expert knowledge of AngularJS, creating several SPA applications",
          "Utilized Magento software in development and change requests on existing shopping carts",
          "Worked with cross-functional teams to translate initial designs and concepts into fully functional applications"
        ]
      },
      {
        position: "Sr. Web Developer & Oracle Consultant",
        company: "EBS LLC",
        location: "Lenexa, KS",
        duration: "03/1999 – 02/2013",
        responsibilities: [
          "Spearheaded the complete project lifecycle for numerous clients, from initial requirements gathering and design through to development, deployment, and support",
          "Selected Projects: Burns & McDonnell, Scottrade, Travelport, JE Dunn, Verigy, British Columbia Attorney General and Pension Corp, City of Kansas City and Kansas City PD",
          "Designed and implemented comprehensive project plans, business analysis fundamentals and functional requirements in line with client needs and best practice principles",
          "Fostered client relationships to gather requirements, elicit feedback, and provide detailed guidance throughout the iterative development process"
        ]
      },
      {
        position: "Founder & Lead Developer",
        company: "Premier Web Designs",
        location: "Overland Park, KS",
        duration: "1997 – 1999",
        responsibilities: [
          "Founded a web development consultancy from the ground up, managing all aspects of business operations, marketing, and client relations",
          "Acquired 38 clients within 18 months through targeted marketing and a strong portfolio of results",
          "Engineered and delivered custom full-stack web solutions, handling all front-end and back-end coding to meet diverse client needs"
        ]
      }
    ],
    education: [
      {
        degree: "Computer Science & GIS",
        school: "Northwest Missouri State University",
        location: "Maryville, MO",
        duration: "1993-1997",
        additional: "Athletics: Div. II Baseball"
      },
      {
        degree: "Associate of Arts",
        school: "Maple Woods, Longview Community College",
        location: "Lee's Summit, MO",
        duration: "1991-1993",
        additional: "Athletics: JC Div. II Baseball"
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Header */}
      <header className="bg-primary-800 text-white p-8 print:p-6">
        <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
        <h2 className="text-2xl font-light mb-4">{resumeData.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-1 hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {resumeData.contact.phone}
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-1 hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {resumeData.contact.email}
          </a>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {resumeData.contact.location}
          </span>
        </div>
      </header>

      <div className="p-8 print:p-6 space-y-8">
        {/* Summary */}
        <section>
          <h3 className="text-2xl font-bold text-primary-800 mb-3 border-b-2 border-primary-200 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-2xl font-bold text-primary-800 mb-4 border-b-2 border-primary-200 pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-700 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-bold text-primary-800 mb-4 border-b-2 border-primary-200 pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary-300 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {job.position}
                      {job.current && (
                        <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{job.duration}</span>
                </div>
                
                <div className={`mt-2 ${!expandedJobs[index] && index > 2 ? 'hidden print:block' : ''}`}>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
                
                {index > 2 && (
                  <button
                    onClick={() => toggleJobExpansion(index)}
                    className="mt-2 text-primary-600 hover:text-primary-800 text-sm font-medium print:hidden"
                  >
                    {expandedJobs[index] ? '- Show Less' : '+ Show More'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-primary-800 mb-4 border-b-2 border-primary-200 pb-2">
            Education
          </h3>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary-300 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-gray-600">
                      {edu.school} • {edu.location}
                    </p>
                    {edu.additional && (
                      <p className="text-primary-600 text-sm mt-1">{edu.additional}</p>
                    )}
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;