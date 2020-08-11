import * as React from 'react';
import { withRouter } from 'react-router-dom';

import Introduction from '../../components/Test/Introduction';
import Code from '../../components/Test/Code';
import MultipleChoice from '../../components/Test/MultipleChoice';
import Checkbox from '../../components/Test/Checkbox';
import GameOver from '../../components/Test/GameOver';
import TestQuestions from './TestQuestions.json';
import { IState, IQuestions } from './services/test';

class Index extends React.Component<any, IState> {

    private param: string;
    private background: Object;
    private questionData: IQuestions[];

    constructor(props: any) {
        super(props);
        this.param = this.props.match.params.test.toUpperCase();
        this.background = { 'backgroundImage': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)' };
        this.questionData = TestQuestions.test;
        this.state = {
            question: 0,
            correct: 0,
            incorrect: 0,
            review: [],
            reviewData: [],
            checked: [],
            finished: false
        };
    };

    handleNext = async (guess: string | number) => {
        if (this.state.question === 0) {
            return this.setState((state : IState) => ({ ...state, question: 1 }));
        }

        const type : string = this.questionData[this.state.question - 1].type;    
        let result : IState;
        if (type === 'checkbox') {
            const { handleCheckbox } = await import(/* webpackChunkName: "service" */ './services/test');
            result = handleCheckbox(this.state, this.questionData);
        } else {
            const { handleMultiple } = await import(/* webpackChunkName: "service" */ './services/test');
            result = handleMultiple(guess, this.state, this.questionData);
        }
        
        this.setState(result);
    };

    handleCheckbox = (index: number): void => {
        let newResult : number[] = [];
        const checkedIndex = this.state.checked.indexOf(0);
        if (checkedIndex >= 0) {
            newResult.splice(checkedIndex, 1);
        } else {
            newResult = this.state.checked.concat(index);
        }

        this.setState((state) => ({
            ...state,
            checked: newResult
        }));
    };

    componentSwitch = () => {
        if (this.state.question === 0) {
            return <Introduction param={this.param} handleNext={this.handleNext} />;
        }
        else if (this.state.finished) {
            return <GameOver />;
        }

        const data = this.questionData[this.state.question - 1];
        switch (data.type) {
            case 'code':
                return <Code questionData={data} handleNext={this.handleNext} />;
            case 'multiple-choice':
                return <MultipleChoice questionData={data} handleNext={this.handleNext} />;
            case 'checkbox':
                return <Checkbox
                    questionData={data}
                    checked={this.state.checked}
                    handleNext={this.handleNext}
                    handleCheckbox={this.handleCheckbox}
                />;
            default:
                return "";
        }
    };

    render() {
        return (
            <div className="centered-topped-container height-pin" style={this.background}>
                {this.componentSwitch()}
    
                <h1>Question: {this.state.question}</h1>
            </div>
        );
    }
};

export default withRouter(Index);