import React, { useState } from 'react';
import './MealSelector.css';

interface MealSelectorProps {
  meals: Record<string, number>;
  setMeals: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const MealSelector: React.FC<MealSelectorProps> = ({ meals, setMeals }) => {
  const [numPeople, setNumPeople] = useState(0);
  const [selectedMeals, setSelectedMeals] = useState<Record<string, boolean>>({
    Breakfast: false,
    'High Tea': false,
    Lunch: false,
    Dinner: false,
  });

  const mealPrices: Record<string, number> = {
    Breakfast: 50,
    'High Tea': 25,
    Lunch: 65,
    Dinner: 70,
  };

  const handleCheckboxChange = (meal: string) => {
    const updated = {
      ...selectedMeals,
      [meal]: !selectedMeals[meal],
    };
    setSelectedMeals(updated);

    
    const updatedMeals: Record<string, number> = {};
    for (const key in updated) {
      if (updated[key]) {
        updatedMeals[key] = numPeople;
      }
    }
    setMeals(updatedMeals);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNumPeople(value);

    const updatedMeals: Record<string, number> = {};
    for (const key in selectedMeals) {
      if (selectedMeals[key]) {
        updatedMeals[key] = value;
      }
    }
    setMeals(updatedMeals);
  };

  const subtotal = Object.entries(meals).reduce(
    (acc, [meal, count]) => acc + count * mealPrices[meal],
    0
  );

  return (
    <div className="meal-selector">
      <h2>Meals Selection</h2>
      <div className="people-input">
        <label htmlFor="numPeople">Number of People:</label>
        <input
          type="number"
          id="numPeople"
          value={numPeople}
          onChange={handlePeopleChange}
          min={0}
        />
      </div>

      <div className="meal-options">
        <div className="meal-row">
          {['Breakfast', 'High Tea'].map((meal) => (
            <label key={meal} className="meal-option">
              <input
                type="checkbox"
                checked={selectedMeals[meal]}
                onChange={() => handleCheckboxChange(meal)}
              />
              {meal} – ${mealPrices[meal]}
            </label>
          ))}
        </div>

        <div className="meal-row">
          {['Lunch', 'Dinner'].map((meal) => (
            <label key={meal} className="meal-option">
              <input
                type="checkbox"
                checked={selectedMeals[meal]}
                onChange={() => handleCheckboxChange(meal)}
              />
              {meal} – ${mealPrices[meal]}
            </label>
          ))}
        </div>
      </div>

      <div className="meal-subtotal">
        <h3>Subtotal for Meals: ${subtotal.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default MealSelector;
