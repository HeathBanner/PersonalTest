import React, { PureComponent } from 'react';
import { IQuestions } from '../../services/testServices';

type Props = {
    questionData : IQuestions,
    checked : any[],
    handleNext : (guess : number | string) => void;
    handleCheckbox : (index : number) => void;
};

export default class Checkbox extends PureComponent<Props> {
    render() {
        let options : string[] | number[] = this.props.questionData.options;
        const mappableOptions = options as (string | number)[];
        return (
            <>
                <h3 className="centered-heading wt">
                    {this.props.questionData.question}
                </h3>
                {mappableOptions.map((option, index) => {
                    const isChecked = this.props.checked.indexOf(index) >= 0;
                    if (this.props.questionData.hasCodedOptions) {
                        return (
                            <button
                                key={`option${index}`}
                                onClick={() => this.props.handleCheckbox(index)}
                                className={`buttons mb2 wt ${isChecked ? 'code-buttons-checked': 'code-buttons'}`}
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
                            onClick={() => this.props.handleCheckbox(index)}
                        >
                            {option}
                        </button>
                    );
                })}
    
                <button
                    className='buttons mb2 wt code-buttons'
                    onClick={() => this.props.handleNext('null')}
                >
                    Next
                </button>
            </>
        );
    }
};