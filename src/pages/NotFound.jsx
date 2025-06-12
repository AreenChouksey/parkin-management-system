
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import '../styles.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f3f4f6' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#111827'
        }}>
          404
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#6b7280', 
          marginBottom: '1rem' 
        }}>
          Oops! Page not found
        </p>
        <a 
          href="/" 
          style={{ 
            color: '#2563eb', 
            textDecoration: 'underline' 
          }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
