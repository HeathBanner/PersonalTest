import React from 'react';

export default function({ questionData, checked, handleNext, handleCheckbox }) {
    return (
        <>
            <h3 className="centered-heading wt">
                {questionData.question}
            </h3>
            {questionData.options.map((option, index) => {
                const isChecked = checked.indexOf(index) >= 0;
                if (questionData.hasCodedOptions) {
                    return (
                        <button
                            key={`option${index}`}
                            onClick={() => handleNext(option)}
                            className="buttons code-buttons mb2"
                        >
                            <pre className="wt">
                                <code className="fl tal">
                                    {option}
                                </code>
                            </pre>
                        </button>
                    );
                }
                return (
                    <button
                        key={`option${index}`}
                        className={`buttons mb2 wt ${isChecked ? 'code-buttons-checked': 'code-buttons'}`}
                        onClick={() => handleCheckbox(index)}
                    >
                        {option}
                    </button>
                );
            })}

            <button
                className='buttons mb2 wt code-buttons'
                onClick={handleNext}
            >
                Next
            </button>
        </>
    );
};