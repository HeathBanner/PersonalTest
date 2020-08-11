import React, { PureComponent } from 'react';
import { IQuestions } from '../../services/testServices';

type Props = {
    questionData: IQuestions,
    handleNext: (guess : number | string) => void
};

export default class Code extends PureComponent<Props> {
    render() {
        let options : string[] | number[] = this.props.questionData.options;
        const mappableOptions = options as (string | number)[];
        
        return (
            <>
                <h3 className="centered-heading wt">
                    {this.props.questionData.question}
                </h3>
                <pre className="centered-container paper mb2">
                {this.props.questionData.codedQuestion?.map((question: string, index: number) => {
                    return (
                        <code key={`question${index}`} className="mb1 fl cq">
                            {question}
                        </code>
                    );
                })}
                </pre>
                {mappableOptions.map((option: string | number, index: number) => {
                    return (
                        <button
                            key={`option${index}`}
                            onClick={() => this.props.handleNext(option)}
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
};