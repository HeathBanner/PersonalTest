import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface IDate {
    link : string,
    text : string
};

type Props = {
    data : IDate
};

export default class Links extends PureComponent<Props> {
    render() {
        return (
            <Link to={`/test${this.props.data.link}`} className="links">
                <Button variant="primary" className="buttons">
                    {this.props.data.text}
                </Button>
            </Link>
        );
    };
};