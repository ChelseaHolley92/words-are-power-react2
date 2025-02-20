import React from 'react';

const AffirmationBox = ({ affirmation }) => {
    return (
        <div className="affirmation-box">
            {affirmation ? affirmation : "Your daily affimation will appear here."}
            </div>
    );
};

export default AffirmationBox;   