import React from 'react';
import './Header.css';

interface HeaderProps {
  onShowDetails: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowDetails }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Conference Expense Planner</h1>
      </div>
      <div className="header-right">
        <button onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}>
          Venue
        </button>
        <button onClick={() => document.getElementById('addons')?.scrollIntoView({ behavior: 'smooth' })}>
          Add-ons
        </button>
        <button onClick={() => document.getElementById('meals')?.scrollIntoView({ behavior: 'smooth' })}>
          Meals
        </button>
        <button onClick={onShowDetails}>Show Details</button>
      </div>
    </header>
  );
};

export default Header;