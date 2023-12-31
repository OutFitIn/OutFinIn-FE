import React, { useState } from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
    display: inline-block; /* Flexbox를 사용하여 자식 요소를 가로로 정렬합니다. */
    justify-content: center; /* 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
`

const Btn = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    margin-right: 10px;
    background: ${(props) => (props.isSelected ? '#4F44E2' : '#E4E1EC')};
`

const BtnIn = styled.div`
    color: #FFF;
    padding: 4px;
    text-align: center;
    line-height: normal;
    font-size: 12.706px;
    font-style: normal;
    font-weight: 700;
`

const ButtonNumbers = (props) => {
    return (
        <BtnContainer>
            <Btn isSelected={props.isSelected}>
                <BtnIn>
                    {props.content}
                </BtnIn>
            </Btn>
        </BtnContainer>
    );
};

export default ButtonNumbers;
