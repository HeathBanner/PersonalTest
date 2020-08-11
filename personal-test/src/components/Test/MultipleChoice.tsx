import React, { PureComponent } from 'react';
import { IQuestions } from '../../services/testServices';

type Props = {
    questionData: IQuestions,
    handleNext: (guess: string | number) => void
};

export default class MultipleChoice extends PureComponent<Props> {
    render() {
        let options : string[] | number[] = this.props.questionData.options;
        const mappableOptions = options as (string | number)[];

        return (
            <>
                <h3 className="centered-heading wt">
                    {this.props.questionData.question}
                </h3>
                {mappableOptions.map((option, index) => {
                    return (
                        <button
                            key={`option${index}`}
                            onClick={() => this.props.handleNext(option)}
                            className="buttons code-buttons mb2 wt"
                        >
                            {option}
                        </button>
                    );
                })}
            </>
        );
    }
};