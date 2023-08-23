import React from 'react';
// import './Carousal.css'; // Import your CSS file for styling

export default function Carousal({ items }) {
  return (
    <div className="carousal-container">
        {/* <a href="#" class="previous">&#8249;</a> */}

      <div className="carousal-content">
        {items.map((item, index) => (
          <div key={index} className="carousal-slide">
            <a href={item.link}>
              <img src={item.imageSrc} alt={item.name} />
              <p>{item.name}</p>
            </a>
          </div>
        
        ))}
      </div>
      {/* <a href="#" class="next">&#8250;</a> */}
    </div>
  );
}
