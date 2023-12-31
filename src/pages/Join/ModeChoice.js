import React, {useState} from 'react';
import * as f from '../../components/Common/CommonStyle';
import ButtonNumbers from '../../components/Join/NumbersButton';
import QuestionMode from '../../components/Join/QuestionModeBox';
import BoxMode from '../../components/Join/BoxMode';
import {Link} from 'react-router-dom';

const ModeChoice = () =>{
    const [coordinate, setCoordinate] = useState(false);
    const [user, setUser] = useState(false);

    const choose = (x) => {
        if(x === 1){
            setUser(false);
            setCoordinate(true);
        }else{
            setUser(true);
            setCoordinate(false);
        }
    }

    return(
        <div>
            <f.Totalframe>
                <f.ScreenComponent>
                    <f.ScreenJoin>
                        <f.Flex>
                            <ButtonNumbers content={1} isSelected={true} />
                            <ButtonNumbers content={2}/>
                            <ButtonNumbers content={3}/>
                            <ButtonNumbers content={4}/>
                        </f.Flex>
                        <QuestionMode content={'어떤 모드로 시작할까요?'} marginBottom={'2.84vh'}/>
                        <Link to='/coinfo'>
                            <BoxMode
                                mode={'아우터 모드'} 
                                role={'코디네이터'}
                                choose={choose}
                                selected={coordinate}
                                describe={'나만의 코디를 업로드 하고 다른\n피터의 코디도 진행해보세요'}/>
                        </Link>
                        <Link to='/userinfo'>
                            <BoxMode
                                mode={'피터 모드'} 
                                role={'유저'}
                                choose={choose}
                                selected={user}
                                describe={'옷 고르기 힘들때 아우터에게\n도움을 요청해 보세요'}/>
                        </Link>
                    </f.ScreenJoin>
                </f.ScreenComponent> 
            </f.Totalframe>
        </div>
    )
}

export default ModeChoice;