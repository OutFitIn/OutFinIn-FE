// '다음' or '로그인' 버튼.js
import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: flex;
    width: 354px;
    height: 60px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #D8D9DA;
    border: 1px solid #D8D9DA;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.08px;
<<<<<<< Updated upstream
    margin-bottom:37px;
    margin-top: 40px;
=======
    position:relative;
    bottom: 31px;
>>>>>>> Stashed changes
    text-decoration: none;
    position: absolute;
    bottom: 0px;
`

const ButtonBottom = (props) => {
    return (
        <Btn>
            {props.content}
        </Btn>
    );
};

export default ButtonBottom;
