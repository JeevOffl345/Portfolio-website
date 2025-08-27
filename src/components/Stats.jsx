import React from "react";

function Stats({ stats }) {
  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <h3>{item.number}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
