import React from 'react';

export default ({ questionData, handleNext }) => {
    return (
        <>
            {questionData.options.map((option) => {
                return (
                    <button onClick={() => handleNext(option)}>
                        {option}
                    </button>
                )
            })}
            <p>
                Testing next
            </p>
        </>
    );
};