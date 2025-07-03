'use client'

import { useState } from 'react';
import { GeometricPattern, WavePattern, CircuitPattern, HexagonPattern, FloatingElements } from './BackgroundSVGs';

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
    <div className="max-w-6xl mx-auto bg-white shadow-2xl print:shadow-none relative overflow-hidden">
      {/* Header with Gradient and Pattern */}
      <header className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white p-8 print:p-6 overflow-hidden">
        <GeometricPattern className="text-white opacity-20" />
        <FloatingElements />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-300 to-accent-400 rounded-full flex items-center justify-center text-primary-900 text-2xl font-bold shadow-lg">
                DH
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-100">
                  {resumeData.name}
                </h1>
                <h2 className="text-xl lg:text-2xl font-light text-primary-100">
                  {resumeData.title}
                </h2>
              </div>
            </div>
            <div className="hidden lg:block">
              <CircuitPattern className="text-primary-300 w-32 h-32" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm lg:text-base">
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {resumeData.contact.phone}
            </a>
            
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {resumeData.contact.email}
            </a>
            
            <div className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              {resumeData.contact.location}
            </div>
          </div>
        </div>
        <WavePattern className="text-primary-600 absolute bottom-0 left-0" />
      </header>

      <div className="p-8 print:p-6 space-y-12 relative">
        <FloatingElements />
        
        {/* Summary */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-700 bg-clip-text text-transparent">
              Professional Summary
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
          </div>
          <div className="relative p-6 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl border border-secondary-200 shadow-lg">
            <HexagonPattern className="text-primary-200 absolute inset-0" />
            <p className="text-secondary-700 leading-relaxed text-lg relative z-10">{resumeData.summary}</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-700 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <div key={category} className="relative group">
                <div className="p-6 bg-gradient-to-br from-white to-secondary-50 rounded-xl border border-secondary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-primary-400 to-primary-600' :
                      index % 3 === 1 ? 'from-accent-400 to-accent-600' :
                      'from-secondary-400 to-secondary-600'
                    }`}></div>
                    <h4 className="font-bold text-lg text-secondary-800">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          idx % 3 === 0 
                            ? 'bg-primary-100 text-primary-800 border border-primary-200 hover:bg-primary-200' 
                            : idx % 3 === 1
                            ? 'bg-accent-100 text-accent-800 border border-accent-200 hover:bg-accent-200'
                            : 'bg-secondary-100 text-secondary-800 border border-secondary-200 hover:bg-secondary-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-700 bg-clip-text text-transparent">
              Professional Experience
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
          </div>
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative group">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className={`w-4 h-4 rounded-full ${job.current ? 'bg-accent-500' : 'bg-primary-500'} ring-4 ring-white shadow-lg`}></div>
                    {index < resumeData.experience.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-primary-300 to-secondary-200 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="p-6 bg-gradient-to-br from-white to-secondary-50 rounded-xl border border-secondary-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold text-secondary-800">
                              {job.position}
                            </h4>
                            {job.current && (
                              <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-accent-400 to-accent-600 text-white rounded-full shadow-lg animate-pulse">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-primary-600 font-semibold text-lg mb-1">
                            {job.company}
                          </p>
                          <p className="text-secondary-500 font-medium">
                            {job.location}
                          </p>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 text-sm font-medium rounded-lg">
                            {job.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`transition-all duration-300 ${!expandedJobs[index] && index > 2 ? 'hidden print:block' : ''}`}>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-secondary-700 leading-relaxed">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {index > 2 && (
                        <button
                          onClick={() => toggleJobExpansion(index)}
                          className="mt-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 hover:scale-105 print:hidden shadow-lg"
                        >
                          {expandedJobs[index] ? '− Show Less' : '+ Show More'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-700 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl border border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-secondary-800 mb-1">{edu.degree}</h4>
                      <p className="text-primary-600 font-semibold">
                        {edu.school}
                      </p>
                      <p className="text-secondary-500 text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 text-sm font-medium rounded-lg">
                      {edu.duration}
                    </span>
                  </div>
                  {edu.additional && (
                    <div className="flex items-center gap-2 mt-3 p-2 bg-accent-50 rounded-lg border border-accent-200">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <p className="text-accent-700 text-sm font-medium">{edu.additional}</p>
                    </div>
                  )}
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