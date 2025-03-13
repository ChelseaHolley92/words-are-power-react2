import React from "react";

const SavedAffirmations = () => {
    const savedAffirmations = JSON.parse(localStorage.getItem("savedAffirmations")) || [];

    return (
        <div className="saved-affirmations">
            
            {savedAffirmations.length > 0 ? (
                <ul>
                    {savedAffirmations.map((affirmation, index) => (
                        <li key={index}>{affirmation}</li>
                        ))}
                        </ul>
                        ) : (
                            <p>No saved affirmations yet.</p>
                            )}
                          </div>
                          );
                        };

                        export default SavedAffirmations;