import React from 'react';

export default ({ questionData, handleNext, handleCheckbox, checked }) => {
    
    if(questionData.type === 'code') {
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
    }
    if(questionData.type === 'multiple-choice') {
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
    }
    if (questionData.type === 'checkbox') {
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
    }
};