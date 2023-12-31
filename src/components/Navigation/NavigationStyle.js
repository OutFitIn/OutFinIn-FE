import styled from "styled-components";

export const TotalNavigation = styled.div`
    display:flex;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    padding: 13px 40px 5px 40px;
    width: 390px;
    height: 15.40vh;
    border-top: 1px solid #C4C4C4;
    position: fixed;
    bottom: 0;
    background-color: #fff;
`

export const SubNavigation = styled.div`
    display:flex;
    flex-direction:column;
    color: ${(props) => (props.isSelected ? '#4F44E2' : '#C8C5D0')};
    font-size: 12px;
    align-items: center;
    font-weight: 400;
    letter-spacing: 0.048px;
    width: 40px;
    cursor: pointer;
    margin-right: ${props => props.marginRight};
`

export const IconText = styled.div`
    margin-top:5px;
`
