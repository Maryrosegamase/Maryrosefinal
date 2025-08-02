import React from 'react';
import './AddOnSelector.css';
import SpeakersImg from '../assets/Speakers.jpeg';
import MicrophonesImg from '../assets/Microphones.jpeg';
import WhiteboardsImg from '../assets/Whiteboards.jpeg';
import ProjectorsImg from '../assets/Projectors.jpeg';
import SignageImg from '../assets/Signage.jpeg';

interface Props {
  addons: Record<string, number>;
  setAddons: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const AddOnSelector: React.FC<Props> = ({ addons, setAddons }) => {
  const addonOptions = [
    { name: 'Speakers', price: 35, img: SpeakersImg },
    { name: 'Microphones', price: 45, img: MicrophonesImg },
    { name: 'Whiteboards', price: 80, img: WhiteboardsImg },
    { name: 'Projectors', price: 200, img: ProjectorsImg },
    { name: 'Signage', price: 80, img: SignageImg },
  ];

  const handleChange = (name: string, delta: number) => {
    setAddons((prev) => {
      const qty = Math.max(0, (prev[name] || 0) + delta);
      return { ...prev, [name]: qty };
    });
  };

  const subtotal = addonOptions.reduce(
    (total, { name, price }) => total + (addons[name] || 0) * price,
    0
  );

  return (
    <div className="addon-selector">
      <h2>Add-ons Selection</h2>
      <div className="addon-grid">
        {addonOptions.map(({ name, price, img }) => (
          <div key={name} className="addon-card">
            {img && <img src={img} alt={name} />}
            <h3>{name}</h3>
            <p>${price} </p>
            <div className="addon-controls">
              <button onClick={() => handleChange(name, -1)}>-</button>
              <span>{addons[name] || 0}</span>
              <button onClick={() => handleChange(name, 1)}>+</button>
            </div>
            <p className="addon-total">
              Total: ${((addons[name] || 0) * price).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="addon-subtotal">
        <h3>Subtotal for Add-ons: ${subtotal.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default AddOnSelector;
