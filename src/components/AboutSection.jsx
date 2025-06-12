
import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';
import '../styles.css';

const AboutSection = () => {
  const stats = [
    { number: '1000+', label: 'Parking Lots Managed' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security of your data and transactions with enterprise-grade encryption.'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Our real-time monitoring ensures accurate space availability and seamless operations.'
    },
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Recognized as the leading parking management solution with numerous industry awards.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'We build our solutions around your needs with dedicated support and continuous innovation.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About At Parkkin</h2>
          <p className="about-subtitle">
            We're revolutionizing parking management with innovative technology and user-centric design.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="story-grid">
          <div className="story-text">
            <h3 className="story-title">Our Story</h3>
            <p className="story-paragraph">
              Founded in 2025, At Parkkin emerged from a simple observation: parking management was stuck in the past. 
              Traditional systems were inefficient, user-unfriendly, and failed to leverage modern technology.
            </p>
            <p className="story-paragraph">
              Our team of engineers, designers, and parking industry experts came together to create a solution that 
              would transform how parking facilities operate. Today, we're proud to serve over 1000 parking lots worldwide, 
              helping them optimize operations and improve customer satisfaction.
            </p>
            <p className="story-paragraph">
              We believe that great parking management should be invisible to users while providing powerful insights 
              and control to operators. That's why we've built At Parkkin to be intuitive, reliable, and scalable.
            </p>
          </div>
          <div className="mission-card">
            <h4 className="mission-title">Our Mission</h4>
            <p className="mission-text">
              To make parking management effortless and efficient through innovative technology, 
              empowering businesses to focus on what matters most while we handle the complexities of parking operations.
            </p>
            <div className="vision-card">
              <div className="vision-label">Vision 2025</div>
              <div className="vision-text">Smart cities with zero parking hassles</div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">
                  <value.icon />
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
