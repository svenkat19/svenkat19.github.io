import React, { useState, useEffect, useRef } from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiKubernetes, SiFlask, SiMongodb, SiPowerapps, SiPowerautomate, SiTypescript, SiTensorflow, SiKeras, SiMysql, SiOracle, SiDataverse, SiPython } from 'react-icons/si';
import './Skill.css'; // Import your CSS file

const Skills: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation
  const skillsRef = useRef<HTMLDivElement | null>(null); // Reference to the skills container

  const skills = [
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'Java', icon: <FaJava color="#007396" /> },
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
    { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'Oracle', icon: <SiOracle color="#F80F0F" /> },
    { name: 'PowerApps', icon: <SiPowerapps color="#742774" /> },
    { name: 'PowerAutomate', icon: <SiPowerautomate color="#0066FF" /> },
    { name: 'Dataverse', icon: <SiDataverse color="#44C460" /> },
    { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
    { name: 'Keras', icon: <SiKeras color="#D00000" /> },
    { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> }
  ];

  const handleClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the component is in view
        } else {
          setIsVisible(false); // Set visibility to false when the component is out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={skillsRef}
        className={`skills-container ${isVisible ? 'fade-in' : 'fade-out'}`} // Apply fade-in or fade-out class based on visibility
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
        <h2>Skills</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          {skills.slice(0, 8).map((skill, index) => (
            <div key={skill.name} style={{ textAlign: 'center' }} className={isVisible ? `bounce-${(index % 4) + 1}` : ''}>
              <div className="skill-card" onClick={() => handleClick(index)}>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    backgroundColor: 'rgba(47, 48, 48, 0.75)',
                    borderRadius: '10px',
                    border: '2px solid rgba(0, 0, 0, 0.5)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Front Side */}
                  <div className="front">
                    {React.cloneElement(skill.icon, {
                      style: { transition: 'filter 0.3s ease-in-out' },
                    })}
                  </div>
                  {/* Back Side */}
                  <div className="back">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          {skills.slice(8, 16).map((skill, index) => (
            <div key={skill.name} style={{ textAlign: 'center' }} className={isVisible ? `bounce-${((index + 8) % 4) + 1}` : ''}>
              <div className="skill-card" onClick={() => handleClick(index + 8)}>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: flippedIndex === index + 8 ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    backgroundColor: 'rgba(47, 48, 48, 0.75)',
                    borderRadius: '10px',
                    border: '2px solid rgba(0, 0, 0, 0.5)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Front Side */}
                  <div className="front">
                    {React.cloneElement(skill.icon, {
                      style: { transition: 'filter 0.3s ease-in-out' },
                    })}
                  </div>
                  {/* Back Side */}
                  <div className="back">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          {skills.slice(16).map((skill, index) => (
            <div key={skill.name} style={{ textAlign: 'center' }} className={isVisible ? `bounce-${((index + 16) % 4) + 1}` : ''}>
              <div className="skill-card" onClick={() => handleClick(index + 16)}>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    transform: flippedIndex === index + 16 ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    backgroundColor: 'rgba(47, 48, 48, 0.75)',
                    borderRadius: '10px',
                    border: '2px solid rgba(0, 0, 0, 0.5)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Front Side */}
                  <div className="front">
                    {React.cloneElement(skill.icon, {
                      style: { transition: 'filter 0.3s ease-in-out' },
                    })}
                  </div>
                  {/* Back Side */}
                  <div className="back">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
