/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
/* eslint-enable no-unused-vars */

const Button = styled.button`
    background: #1abc9c;
    padding: 15px 30px 15px 30px;
    color: #fff;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background 300ms ease;
    & + & {
        margin: 0 0 0 15px
    }

    &:hover {
        background: ${darken(0.05, '#1abc9c')};
    }

    &:active {
        background: ${darken(0.1, '#1abc9c')};
    }

    &:disabled {
        background: #bdc3c7;
        cursor: auto;
    }
`;

export default Button;
