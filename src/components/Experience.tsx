// Your existing imports and interface
import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

// Import the images
import iiitLogo from '../IIIT_Bangalore_Logo.svg.png'; // Update the path as necessary
import pharmeasyLogo from '../pharmeasy.png'; // Update the path for PharmEasy logo
import catLogo from '../cat.png'; // Update the path for Caterpillar logo

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string[]; // Change description to an array of strings
  technologies: string[];
  logo: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    year: "JUN 2022 - SEPT 2022",
    role: "Research Intern",
    company: "IIIT-Bangalore",
    description: [
      'Reviewed an existing research paper titled "Classification Trees for Imbalanced Data: Surface-To-Volume Regularization"',
      "Understood the mathematical concepts used behind SVR trees.",
      "Performed literary review for better understanding of existing results.",
      "Proposed a solution to extend SVR trees for Multiclass classification of balanced and imbalanced datasets."
    ],
    technologies: ["Python", "TensorFlow", "Keras","SkLearn"],
    logo: iiitLogo, // Use the imported logo
  },
  {
    year: "DEC 2022 - JUN 2023",
    role: "Software Developer Intern",
    company: "PharmEasy",
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
    company: "Caterpillar",
    description: [
      "Working on Power Platform Component Framework using React.",
      "Power Apps and Power Automate Development.",
      "Working on Python Scripting for Power Platform."
    ],
    technologies: ["Python", "PowerApps", "PowerAutomate", "JavaScript", "Dataverse"],
    logo: catLogo, // Use the imported logo
  },
];

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section className="experience-section" ref={experienceRef}>
      <h2 className={`experience-heading ${isVisible ? 'fade-in' : 'fade-out'}`}>Experience</h2>
      <div className={`experience-list ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className={`experience-item ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="experience-year">
              <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
              <p className="experience-year-text">{exp.year}</p> {/* Update the class here */}
            </div>
            <div className="experience-details">
              <h2 className="experience-role">
                {exp.role} <br/>
                <span className="experience-company">{exp.company}</span>
              </h2>
              <ul className="experience-description">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>  // Render each description as a list item
                ))}
              </ul>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
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

export default Experience;
