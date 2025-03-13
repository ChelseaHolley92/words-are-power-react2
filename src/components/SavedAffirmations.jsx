import React from "react";

const SavedAffirmations = () => {
    const savedAffirmations = JSON.parse(localStorage.getItem("savedAffirmations")) || [];

    return (
        <div className="saved-affirmations">
          {savedAffirmations.length === 0 && <p>No saved affirmations yet.</p>}

          {savedAffirmations.length > 0 && (
                <ul>
                    {savedAffirmations.map((affirmation, index) => (
                        <li key={index}>{affirmation}</li>
                        ))}
                        </ul>
                        )}
                        </div>
    )
                    };

                        export default SavedAffirmations;