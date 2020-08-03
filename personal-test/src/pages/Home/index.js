import React, { Component } from 'react';
import Links from '../../components/Home/Links';

const linkData = [
    {
        text: 'JavaScript',
        link: '/javascript'
    },
    {
        text: 'Node JS',
        link: '/nodejs'
    },
    {
        text: 'C#',
        link: '/c#'
    },
    {
        text: '.NETCORE',
        link: '/netcore'
    }
];

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.background = { 'backgroundImage': 'linear-gradient(60deg, #96deda 0%, #50c9c3 100%)' };
    };

    increment = () => {
        this.setState((state) => ({ counter: state.counter + 1 }));
    };
    decrement = () => {
        this.setState((state) => ({ counter: state.counter - 1 }));
    };

    render = () =>
        <div className="centered-container height-pin" style={this.background}>
              {linkData.map((link) => (
                <Links data={link} key={`${link.text} link`} />)
              )} 
        </div>
};