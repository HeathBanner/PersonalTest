import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Introduction from '../../components/Test/Introduction';
import QnA from '../../components/Test/QnA';
import TestQuestions from './TestQuestions.json';

class Index extends Component {

    constructor(props) {
        super(props);
        this.param = this.props.match.params.test.toUpperCase();
        this.background = { 'backgroundImage': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)' };
        this.questionData = TestQuestions.test;
        this.state = {
            question: 0,
            correct: 0,
            incorrect: 0,
            checked: []
        };
    };

    handleNext = (guess) => {
        if (this.state.question === 0) {
            return this.setState((state) => ({ ...state, question: 1 }));
        }
        if (guess !== this.questionData[this.state.question - 1].answer) {
            return this.setState((state) => ({
                ...state,
                question: state.question++,
                incorrect: state.incorrect++,
                checked: []
            }));
        }

        this.setState((state) => ({
            ...state,
            question: state.question++,
            correct: state.correct++,
            checked: []
        }));
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

    render = () =>
        <div className="centered-topped-container height-pin" style={this.background}>
            {
                this.state.question === 0 ?
                <Introduction param={this.param} handleNext={this.handleNext} />
                :
                <QnA
                    questionData={this.questionData[this.state.question - 1]}
                    handleNext={this.handleNext}
                    handleCheckbox={this.handleCheckbox}
                    checked={this.state.checked}
                />    
            }

        <h1>Question: {this.state.question}</h1>
        <h1>Correct: {this.state.correct}</h1>
        <h1>Incorrect: {this.state.incorrect}</h1>
        </div>
};

export default withRouter(Index);