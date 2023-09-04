import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${(props) => (props.isSelected ? '#000' : '#9A9A9A')};
    background: white;
    display: inline-flex;
    padding: 7px 16px;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    color: ${(props) => (props.isSelected ? '#000' : '#9A9A9A')};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.175px;
`

const BigStyleCategoryBox = (props) => {
    return (
        <Box isSelected={props.isSelected} onClick={props.onClick}>
            <Content isSelected={props.isSelected}>
                {props.content}
            </Content>
        </Box>
    )
}

export default BigStyleCategoryBox;
