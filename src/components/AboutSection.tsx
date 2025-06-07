
import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About At Parkkin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing parking management with innovative technology and user-centric design.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, At Parkkin emerged from a simple observation: parking management was stuck in the past. 
              Traditional systems were inefficient, user-unfriendly, and failed to leverage modern technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of engineers, designers, and parking industry experts came together to create a solution that 
              would transform how parking facilities operate. Today, we're proud to serve over 1000 parking lots worldwide, 
              helping them optimize operations and improve customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that great parking management should be invisible to users while providing powerful insights 
              and control to operators. That's why we've built At Parkkin to be intuitive, reliable, and scalable.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-blue-100 leading-relaxed mb-6">
              To make parking management effortless and efficient through innovative technology, 
              empowering businesses to focus on what matters most while we handle the complexities of parking operations.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-sm font-medium text-blue-100">Vision 2025</div>
              <div className="text-lg font-semibold">Smart cities with zero parking hassles</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
