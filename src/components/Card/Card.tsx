import React from 'react';
import './../../styles/card.scss';

type CardProps = {
  title: string;
  count: number;
  icon: string;
};

export const Card: React.FC<CardProps> = ({ title, count, icon }) => (
  <div className="card">
    <img src={icon} alt={`${title} icon`} className="card-icon" />
    
      <h4>{title}</h4>
      <p>{count.toLocaleString()}</p>
   
  </div>
);

const CardSection: React.FC = () => (
  <section className="card-section">
    <Card title="Users" count={2453} icon="/icon (1).png" />
    <Card title="Active Users" count={2453} icon="/icon (2).png" />
    <Card title="Users with Loans" count={12453} icon="/icon (3).png" />
    <Card title="Users with Savings" count={102453} icon="/icon (4).png" />
  </section>
);

export default CardSection;
