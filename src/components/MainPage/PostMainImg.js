import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';
import heart from '../../assets/img/heart.svg';
import fillheart from '../../assets/img/fillheart.svg';
import whiteHeart from '../../assets/img/whiteHeart.svg';

const PostMainImgs = styled.div`
    position:relative;
    display: flex;
    cursor: pointer;
`;

const Heart = styled.img`
    position: absolute;
    top: 10px;
    right: 14px;
`

const Img = styled.img`
    position:relative;
    width: 200px;
    height: 221px;
    border-radius: 18px;
    object-fit: cover;
`;

const PostInfo=styled.div`
    position: absolute;
    left: 16px;
    bottom: 18px;
    display: flex;
    flex-direction: column;
    gap: 1px;
`

const Name=styled.div`
    width: 160px;
    color: #FFF;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.175px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CountContainer=styled.div`
    display: flex;
    align-items: center;
    gap: 4.22px;
`
const LikeIcon=styled.img`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
`

const Count=styled.div`
    color: #FFF;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.15px;
`

const PostMainImg = (props) => {
    return(
        <PostMainImgs>
            <Img src={props.image}/>
            {localStorage.getItem('mode') == 2 ? 
            (<Heart src={props.fillColor} 
                onClick={(e) => props.likeIncrease(props.fillColor, e)} />) 
            : null}
            <PostInfo>
                <Name>{props.name}</Name>
                {/* <CountContainer>
                    <LikeIcon src={whiteHeart}></LikeIcon>
                    {/* <Count>{props.like}</Count> 
                </CountContainer>*/}
            </PostInfo>
        </PostMainImgs>
    )
}
export default PostMainImg