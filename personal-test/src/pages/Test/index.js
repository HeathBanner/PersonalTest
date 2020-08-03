import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Introduction from '../../components/Test/Introduction';
import Code from '../../components/Test/Code';
import MultipleChoice from '../../components/Test/MultipleChoice';
import Checkbox from '../../components/Test/Checkbox';
import TestQuestions from './TestQuestions.json';

class Index extends Component {

    constructor(props) {
        super(props);
        this.param = this.props.match.params.test.toUpperCase();
        this.background = { 'backgroundImage': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)' };
        this.questionData = TestQuestions.test;
        this.state = {
            question: 7,
            correct: 0,
            incorrect: 0,
            checked: [],
            finished: false
        };
    };

    handleNext = async (guess) => {
        if (this.state.question === 0) {
            return this.setState((state) => ({ ...state, question: 1 }));
        }
        else if (this.state.question === 10) {
            return this.setState((state) => ({ ...state, finished: true }));
        }

        const answer = this.questionData[this.state.question - 1].answer;
        const type = this.questionData[this.state.question - 1].type;    
        let result;
        if (type === 'checkbox') {
            const { handleCheckbox } = await import('./services');
            result = handleCheckbox(answer, this.state);
        } else {
            const { handleMultiple } = await import('./services');
            result = handleMultiple(guess, answer, this.state);
        }
        
        this.setState(result);
    };

    handleCheckbox = (index) => {
        let newResult = this.state.checked;
        const checkedIndex = this.state.checked.indexOf(index);
        if (checkedIndex >= 0) {
            newResult.splice(checkedIndex, 1);
        } else {
            newResult = [...newResult, index];
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
            return 
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

    render = () =>
        <div className="centered-topped-container height-pin" style={this.background}>
            {this.componentSwitch()}

            <h1>Question: {this.state.question}</h1>
        </div>
};

export default withRouter(Index);