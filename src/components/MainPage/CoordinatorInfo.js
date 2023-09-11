import React from 'react';
import styled from 'styled-components';
import * as f from '../Common/CommonStyle';
import SmallStyleCategoryBox from "../../components/Common/SmallStyleCategoryBox";
import hanger from '../../assets/img/hanger.svg';
import star from '../../assets/img/star.svg';
import logo from '../../assets/img/logo.svg';

const CoordinatorInfos = styled.div`
    display: flex;
    margin-top: 2.36vh;
    margin-bottom: 3vh;
    color: #000;
`;

const CoordinatorImg = styled.img`
    width: 61px;
    height: 61px;
    border-radius: 45px;
`;

const CoordinatorSubInfo = styled.div`
    margin-left:14px;
`;

const CoordinatorName = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.08px;
    margin-right: 8px;
`;

const Hanger = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.048px;
    margin-right: 8px;
`;

const HangerImg = styled.img`
    margin-right: 5px;
`;

const Star = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.18px;
`;

const StarImg = styled.img`
    margin-right: 7px;
`;

const CategoryBox = styled.div`
    display: flex;
    margin-top: 1.18vh;
`
const CoordinatorInfo = () => {
    return(
        <CoordinatorInfos>
            <CoordinatorImg src={logo}></CoordinatorImg>
            <CoordinatorSubInfo>
                <f.Flex>
                <CoordinatorName>웜톤천재 아우터</CoordinatorName>
                <Hanger>
                    <HangerImg src={hanger}></HangerImg>
                    의뢰 13번
                </Hanger>
                <Star>
                    <StarImg src={star}></StarImg>
                    4.95
                </Star>
                </f.Flex>
                <CategoryBox>
                <SmallStyleCategoryBox content={'#미니멀'}></SmallStyleCategoryBox>
                <SmallStyleCategoryBox content={'#시티보이'}></SmallStyleCategoryBox>
                <SmallStyleCategoryBox content={'#비즈니스캐주얼'}></SmallStyleCategoryBox>
                </CategoryBox>
            </CoordinatorSubInfo>
        </CoordinatorInfos>
    )
}
export default CoordinatorInfo;