import React, { useState } from "react";

const NameInput = ({ onSave }) => {
    const [name, setName] = useState('');

const handleChange = (e) => {
    setName(e.target.value);
};

    const handleSave = () => {
        if (name.trim() !== "") {
            onSave(name);
            console.log("Saved Name:", name);
        } else {
            alert("Please enter your name.");
        }
    };
    
    return (
        <div className="name-input">
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            onBlur={handleSave}
            />
        </div>
    );
};

export default NameInput;