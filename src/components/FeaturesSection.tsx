
import React from 'react';
import { 
  Car, 
  Calendar, 
  CreditCard, 
  BarChart, 
  Smartphone, 
  Users 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Parking Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive solution provides everything you need to efficiently manage your parking facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
