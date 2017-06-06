/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styled from 'styled-components';
/* eslint-enable no-unused-vars */

const Panel = styled.div`
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    right: ${props => props.direction === 'right' ? 0 : 'auto' };
    left: ${props => props.direction === 'left' ? 0 : 'auto' };
    background-color: #3498db;
    color: #fff;
    text-align: center;
    padding: 30px;
    will-change: transform;
`;

export default class extends Component {
    getDom() {
        return this.el;
    }

    render() {
        return (
            <Panel innerRef={c => this.el = c} direction={this.props.direction}>Text</Panel>
        );
    }
}