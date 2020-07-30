import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Introduction from '../../components/Test/Introduction';
import QnA from '../../components/Test/QnA';

const questionData = [
    {
        question: 'Who is president?',
        answer: 'Donald Trump',
        options: ['Donald Trump', 'Barack Obama', 'George W. Bush', 'Bill Clinton']
    },
    {
        question: 'How many fingers does the average human possess?',
        answer: 10,
        options: [3, 6, 8, 10]
    }
];

class Index extends Component {

    constructor(props) {
        super(props);
        this.param = this.props.match.params.test.toUpperCase();
        this.background = { 'background-image': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)' };
        this.state = {
            question: 0,
            correct: 0,
            incorrect: 0,
        };
    };

    handleNext = (guess) => {
        if (this.state.question === 0) {
            return this.setState((state) => ({ ...state, question: 1 }));
        }

        console.log(guess, questionData[this.state.question].answer);

        if (guess !== questionData[this.state.question - 1].answer) {
            return this.setState((state) => ({
                ...state,
                question: state.question++,
                incorrect: state.incorrect++,
            }));
        }

        this.setState((state) => ({
            ...state,
            question: state.question++,
            correct: state.correct++
        }));
    };

    render = () =>
        <div className="centered-topped-container height-pin" style={this.background}>
            {
                this.state.question === 0 ?
                <Introduction param={this.param} handleNext={this.handleNext} />
                :
                <QnA
                    questionData={questionData[this.state.question - 1]}
                    handleNext={this.handleNext}
                />    
            }

        <h1>Question: {this.state.question}</h1>
        <h1>Correct: {this.state.correct}</h1>
        <h1>Incorrect: {this.state.incorrect}</h1>
        </div>
};

export default withRouter(Index);