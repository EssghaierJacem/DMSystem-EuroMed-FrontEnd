import React from 'react';

function Section({ children }) {
  return (
    <div>
      <section className="info-section section-b-space">
        <div className="container">
          {children}
        </div> 
      </section>
    </div>
  );
}

export default Section;
