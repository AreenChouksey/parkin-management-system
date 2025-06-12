
import React from 'react';
import { 
  Car, 
  Calendar, 
  CreditCard, 
  BarChart, 
  Smartphone, 
  Users 
} from 'lucide-react';
import '../styles.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: 'Real-time Space Monitoring',
      description: 'Track parking space availability in real-time with intuitive visual indicators.'
    },
    {
      icon: Calendar,
      title: 'Reservation System',
      description: 'Allow customers to reserve parking spots in advance for guaranteed availability.'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment integration with multiple payment methods and automated billing.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics to optimize pricing and understand usage patterns.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Fully responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage different user roles with customizable permissions and access levels.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Powerful Features for Modern Parking Management
          </h2>
          <p className="features-subtitle">
            Our comprehensive solution provides everything you need to efficiently manage your parking facilities.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
