import React from 'react';

const AffirmationBox = ({ affirmation }) => {
    return (
        <div className="affirmation-box">
            {affirmation ? <p>{affirmation}</p> : <p>Your daily affimation will appear here.</p>}
            </div>
    );
};

export default AffirmationBox;   