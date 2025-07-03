'use client';

import { useState, useEffect } from 'react';
import { NeuralNetwork, AICircuitBoard, DataFlow, AIAgentPattern, MatrixRain, QuantumDots, AICodeBackground, FloatingAIOrbs, BrainNetwork } from './BackgroundPatterns';

export default function ModernResume() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'skills', 'education'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeData = {
    name: "Dino Horn",
    title: "Senior Full Stack Software Engineer",
    contact: {
      email: "dinohorn35@gmail.com",
      phone: "(913) 295-4219",
      location: "Overland Park, KS 66221",
      linkedin: "linkedin.com/in/dinohorn",
      github: "github.com/dinohorn"
    },
    summary: "Accomplished Senior Software Engineer and entrepreneur with extensive experience leading the end-to-end design, development, and deployment of innovative software solutions. A trusted team leader with a proven ability to manage projects, mentor high-performing teams, and collaborate effectively with cross-functional stakeholders to meet ambitious deadlines. Passionate about leveraging modern technologies like Next.js, React, and Node.js to drive productivity and growth.",
    experience: [
      {
        id: 1,
        position: "Systems Engineer, AI Lead",
        company: "AutoZone",
        location: "Memphis, TN",
        duration: "02/2021 – Present",
        current: true,
        highlights: [
          "Leading AI initiatives and implementing machine learning solutions to optimize business processes",
          "Architecting scalable systems to support enterprise-wide AI/ML deployments",
          "Collaborating with cross-functional teams to identify and implement AI-driven improvements"
        ]
      },
      {
        id: 2,
        position: "Sr. Software Engineer",
        company: "SnapIT",
        location: "Overland Park, KS",
        duration: "07/2021 – 12/2021",
        highlights: [
          "Provided technical mentorship to engineering teams, improving development workflows and coding practices",
          "Assisted in establishing and enforcing coding standards to enhance code quality and team efficiency"
        ]
      },
      {
        id: 3,
        position: "Sr. Software Engineer",
        company: "Enlightened Hire",
        location: "Overland Park, KS",
        duration: "01/2020 – 06/2021",
        highlights: [
          "Developed a full-stack Single Page Application (SPA) from the ground up using a modern JavaScript stack including Next.js, React, and Node.js",
          "Implemented secure user authentication with NextAuth.js and designed RESTful APIs to connect with a MongoDB Atlas database"
        ]
      },
      {
        id: 4,
        position: "Sr. Software Developer, Frontend Team Lead",
        company: "Walsworth Publishing",
        location: "Overland Park, KS",
        duration: "03/2013 – 10/2020",
        highlights: [
          "Led frontend development for a flagship yearbook design platform, a complex AngularJS application suite used by schools nationwide to create, manage, and submit yearbooks for publication",
          "UI development utilizing expert knowledge of AngularJS, creating several SPA applications",
          "Utilized Magento software in development and change requests on existing shopping carts",
          "Worked with cross-functional teams to translate initial designs and concepts into fully functional applications"
        ]
      },
      {
        id: 5,
        position: "Sr. Web Developer & Oracle Consultant",
        company: "EBS LLC",
        location: "Lenexa, KS",
        duration: "03/1999 – 02/2013",
        highlights: [
          "Spearheaded the complete project lifecycle for numerous clients, from initial requirements gathering and design through to development, deployment, and support",
          "Selected Projects: Burns & McDonnell, Scottrade, Travelport, JE Dunn, Verigy, British Columbia Attorney General and Pension Corp, City of Kansas City and Kansas City PD",
          "Designed and implemented comprehensive project plans, business analysis fundamentals and functional requirements in line with client needs and best practice principles",
          "Fostered client relationships to gather requirements, elicit feedback, and provide detailed guidance throughout the iterative development process"
        ]
      }
    ],
    skills: {
      "Front-End": ["Next.js", "React", "AngularJS", "JavaScript", "HTML5", "CSS3", "SASS/LESS", "TailwindCSS", "Material UI"],
      "Back-End": ["Node.js", "Express", "Java", "PL/SQL", "PHP"],
      "Databases": ["MongoDB", "MySQL"],
      "Cloud & DevOps": ["AWS (EC2, S3)", "Vercel", "Git", "SVN"],
      "Design": ["Adobe Creative Suite", "Photoshop", "Illustrator", "Premier Pro"]
    },
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
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background Patterns */}
      <NeuralNetwork className="text-gray-800 fixed inset-0 z-0" />
      <FloatingAIOrbs className="fixed inset-0 z-0" />
      <MatrixRain className="text-cyan-500 fixed inset-0 z-0 opacity-30" />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Sidebar */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-r-2xl p-4">
          {[
            { 
              id: 'about', 
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ), 
              label: 'About' 
            },
            { 
              id: 'experience', 
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ), 
              label: 'Experience' 
            },
            { 
              id: 'skills', 
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ), 
              label: 'Skills' 
            },
            { 
              id: 'education', 
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              ), 
              label: 'Education' 
            }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center w-full text-left py-3 px-4 mb-2 rounded-lg transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50'
                  : 'hover:bg-gray-800/50'
              }`}
            >
              <span className="mr-3">{section.icon}</span>
              <span className="text-sm font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <header id="about" className="min-h-screen flex items-center justify-center relative">
          <BrainNetwork className="text-blue-500 absolute inset-0" />
          <AIAgentPattern className="text-purple-500 absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
          
          <div className="relative z-10 text-center space-y-8">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700 overflow-hidden shadow-2xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Dino Horn"
                  className="w-full h-full object-cover"
                  style={{ transform: 'translateX(-10px)' }}
                  onError={(e) => {
                    e.target.src = '/images/profile.svg';
                  }}
                />
              </div>
            </div>

            {/* Name and Title */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {resumeData.name}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400">{resumeData.title}</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {Object.entries(resumeData.contact).map(([key, value]) => {
                const icons = {
                  email: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  phone: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  location: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  linkedin: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  github: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                };
                
                return (
                  <a
                    key={key}
                    href={key === 'email' ? `mailto:${value}` : key === 'phone' ? `tel:${value}` : key === 'linkedin' || key === 'github' ? `https://${value}` : '#'}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full hover:border-gray-700 transition-colors group"
                  >
                    <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{icons[key]}</span>
                    <span className="text-gray-400">{value}</span>
                  </a>
                );
              })}
            </div>

            {/* Summary */}
            <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              {resumeData.summary}
            </p>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <AICircuitBoard className="text-gray-800 absolute inset-0 opacity-50" />
          <DataFlow className="text-cyan-600 absolute inset-0 opacity-30" />
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10">
            Experience
          </h2>
          
          <div className="space-y-8 relative z-10">
            {resumeData.experience.map((job, index) => (
              <div key={job.id} className="relative">
                {/* Timeline Line */}
                {index < resumeData.experience.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-gray-800 to-transparent" />
                )}
                
                <div className="flex gap-4">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </div>
                  
                  {/* Job Content */}
                  <div className="flex-grow bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-100">{job.position}</h3>
                        <p className="text-lg text-blue-400">{job.company}</p>
                      </div>
                      <div className="text-right text-gray-400">
                        <p>{job.duration}</p>
                        <p className="text-sm">{job.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <AICodeBackground className="text-gray-800 absolute inset-0" />
          <QuantumDots className="text-purple-500 absolute inset-0" />
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-4 capitalize text-gray-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 pb-32 relative">
          <NeuralNetwork className="text-blue-800 absolute inset-0 opacity-30" />
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10">
            Education
          </h2>
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-100">{edu.degree}</h3>
                    <p className="text-lg text-blue-400">{edu.school}</p>
                  </div>
                  <div className="text-right text-gray-400">
                    <p>{edu.duration}</p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>
                {edu.additional && (
                  <p className="text-gray-400 mt-2">{edu.additional}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-gray-800 lg:hidden">
        <div className="flex justify-around py-2">
          {[
            { 
              id: 'about', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )
            },
            { 
              id: 'experience', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            },
            { 
              id: 'skills', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            { 
              id: 'education', 
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              )
            }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`p-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400'
              }`}
            >
              {section.icon}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}