import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button className="generate-btn" onClick={onClick}>
            Get New Affirmation
        </button>
    );
};

export default Button;  