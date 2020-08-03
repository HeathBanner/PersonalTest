import React from 'react';

export default function({ questionData, handleNext }) {
    return (
        <>
            <h3 className="centered-heading wt">
                {questionData.question}
            </h3>
            {questionData.options.map((option, index) => {
                return (
                    <button
                        key={`option${index}`}
                        onClick={() => handleNext(option)}
                        className="buttons code-buttons mb2 wt"
                    >
                        {option}
                    </button>
                )
            })}
        </>
    );
};