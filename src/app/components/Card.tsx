import React from "react";
import "@/app/styles/Card.css";


// Define the type of props the component expects
export interface CardProps {
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Learn More</a>
        </div>
    );
};

export default Card;
