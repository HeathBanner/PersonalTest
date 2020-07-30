import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default ({ data }) => {
    return (
        <Link to={`/test${data.link}`} className="links">
            <Button variant="primary" className="buttons">
                {data.text}
            </Button>
        </Link>
    );
};