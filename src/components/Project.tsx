// Your existing imports and interface
import React, { useState, useEffect, useRef } from 'react';
import './Project.css';

// Import the images
import alzhnet from '../Alzhnet.png'; // Update the path as necessary
import pharmeasyLogo from '../pharmeasy.png'; // Update the path for PharmEasy logo
import catLogo from '../cat.png'; // Update the path for Caterpillar logo

interface ProjectItem {
  year: string;
  role: string;
  description: string[]; // Change description to an array of strings
  technologies: string[];
  logo: string;
}

const PROJECTS: ProjectItem[] = [
  {
    year: "JUL 2024",
    role: "MRI-based Automated Diagnosis of Alzheimer’s Disease using Alzh-Net Deep Learning Model",
    description: [
      'Developed a CNN-based model, Alzh-Net, to aid in diagnosing and segmenting Alzheimer’s disease symptoms through image analysis.',
      "Designed and implemented a dual CNN architecture, Alzh-Net Upper and Lower, for multi-scale feature extraction.",
      "Captured global patterns and broad perspectives in input images by employing convolutional layers with varied strides and max-pooling layers.",
    ],
    technologies: ["Python", "TensorFlow", "Keras","SkLearn",'Pandas','Numpy'],
    logo: alzhnet, // Use the imported logo
  },
  {
    year: "DEC 2022 - JUN 2023",
    role: "Software Developer Intern",
    description: [
      "Worked on the Front End of the Surgicare website.",
      "Implemented features like Auto Coupon Application, Graded Coupons, and PSI enhancements, fostering a 13% increase in order completion, 30% surge in average order value, and 3X organic traffic.",
      "Worked on docker build optimization."
    ],
    technologies: ["React", "TypeScript", "Python", "Docker", "Bootstrap"],
    logo: pharmeasyLogo, // Use the imported logo
  },
  {
    year: "JUL 2024 - CURRENT",
    role: "Application Developer",
    description: [
      "Working on Power Platform Component Framework using React.",
      "Power Apps and Power Automate Development.",
      "Working on Python Scripting for Power Platform."
    ],
    technologies: ["Python", "PowerApps", "PowerAutomate", "JavaScript", "Dataverse"],
    logo: catLogo, // Use the imported logo
  },
];

const Project: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <section className="project-section" ref={projectRef}>
      <h2 className={`project-heading ${isVisible ? 'fade-in' : 'fade-out'}`}>Projects</h2>
      <div className={`project-list ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {PROJECTS.map((proj, index) => (
          <div key={index} className={`project-item ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="project-year">
              <img src={proj.logo} alt={`${proj.logo} Logo`} className="project-logo" />
              <p className="project-year-text">{proj.year}</p> {/* Update the class here */}
            </div>
            <div className="project-details">
              <h2 className="project-role">
                {proj.role} <br/>
              </h2>
              <ul className="project-description">
                {proj.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>  // Render each description as a list item
                ))}
              </ul>
              <div className="project-technologies">
                {proj.technologies.map((tech, idx) => (
                  <span key={idx} className="technology-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
