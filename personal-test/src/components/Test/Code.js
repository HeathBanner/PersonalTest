import React from 'react';

export default function({ questionData, handleNext }) {
    return (
        <>
            <h3 className="centered-heading wt">
                {questionData.question}
            </h3>
            <pre className="centered-container paper mb2">
            {questionData.codedQuestion.map((question, index) => {
                return (
                    <code key={`question${index}`} className="mb1 fl cq">
                        {question}
                    </code>
                );
            })}
            </pre>
            {questionData.options.map((option, index) => {
                return (
                    <button
                        key={`option${index}`}
                        onClick={() => handleNext(option)}
                        className="buttons code-buttons mb2"
                    >
                        <pre className="wt">
                            <code className="fl">
                                {option}
                            </code>
                        </pre>
                    </button>
                )
            })}
        </>
    );
};