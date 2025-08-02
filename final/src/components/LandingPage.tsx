import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: 'url(${background.Image})',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay-container">
        <div className="left">
          <h1>Conference Expense Planner</h1>
          <p>Plan your next major event with us!</p>
          <button onClick={() => navigate('/select')}>Get Started</button>
        </div>
        <div className="right">
          <p>
            Welcome to <strong>BudgetEase Solutions</strong>, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we understand the importance
            of effective budget planning and strive to provide intuitive, user-friendly solutions to
            meet the diverse needs of our clients.
          </p>

          <p>
            With a commitment to efficiency and innovation, we empower individuals and businesses to
            take control of their finances and achieve their goals with ease.
          </p>

          <p>
            Our mission is to make budgeting effortless and accessible for everyone—whether you're a
            small business owner, a busy professional, or an individual managing personal finances,
            we offer tailored tools to support your budgeting process.
          </p>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;