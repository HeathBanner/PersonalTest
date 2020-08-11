import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';

type Props = {
    param : string,
    handleNext: (guess : string | number) => void
};

export default class Introduction extends PureComponent<Props> {
    render() {
        return (
            <>
                <Link to="/" className="back-button-ul">
                    <BsBoxArrowInLeft size="2.5em" />
                </Link>
                <h1 className="centered-absolute-heading">
                    {this.props.param}
                </h1>
    
                <div className="centered-paper">
                    <p className="centered-ptag">
                        This test uses {this.props.param} questions to help you better understand
                        future interview questions. You may re-take it as many times as you'd like. 
                        Just be sure that you're learning the material not the test. Thank you and have fun!
                    </p>
                    <h3 className="centered-heading">
                        Click to get started!
                    </h3>
                    <button onClick={() => this.props.handleNext} className="buttons testing">
                        START
                    </button>
                </div>
            </>
        );
    }
};
