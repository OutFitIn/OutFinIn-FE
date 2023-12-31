import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import  { ModeChoice, UserInfo, InputEmail} from "./pages/Join";
import { UserMainPage, OuterProfile, PostDetail } from "./pages/Main";
import CoInfo from "./pages/Join/CoInfo";
import GetStyle from "./pages/Join/GetStyle";
import JoinSuccess from "./pages/Join/JoinSuccess";
import Login from "./pages/Join/Login";
import OuterMainPage from "./pages/Main/OuterMainPage";
import WriteNewPost from "./pages/NewPost/WriteNewPost";
import Search from "./pages/Search/Search";
import SearchFilter from "./pages/Search/SearchFilter";
import ChatList from "./pages/Chat/ChatList";
import UserChatList from "./pages/Chat/UserChatList";
import ChatRoom from "./pages/Chat/ChatRoom";
import OuterMyPage from "./pages/MyPage/OuterMyPage";
import UserMyPage from "./pages/MyPage/UserMyPage";
import EditCoProfile from "./pages/MyPage/EditCoProfile";
import EditUserProfile from "./pages/MyPage/EditUserProfile";
import OuterRankInfo from "./pages/MyPage/OuterRankInfo";
import CoAllCodies from "./pages/MyPage/CoAllCodies";
import CoReviews from "./pages/MyPage/CoReviews";
import LikeCodies from "./pages/MyPage/LikeCodies";
import UserChatRoom from "./pages/Chat/UserChatRoom";
// 소셜로그인
import Kakao from "./oauth/kakao.js"
import Naver from "./oauth/naver.js"
import Google from "./oauth/google.js"
import RegisterKakao from "./oauth/register/kakao.js"
import RegisterNaver from "./oauth/register/naver.js"
import RegisterGoogle from "./oauth/register/google.js"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
            <Route path="/inputemail" element={<InputEmail/>} />
            <Route path="/modechoice" element={<ModeChoice/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/usermainpage" element={<UserMainPage/>}/>
            <Route path="/outermainpage" element={<OuterMainPage/>}/>
            <Route path="/coinfo" element={<CoInfo/>}/>
            <Route path="/getstyle" element={<GetStyle/>}/>
            <Route path="/joinsuccess" element={<JoinSuccess />} />
            <Route path="/outerprofile/:coordinator_id" element={<OuterProfile />} />
            <Route path="/postdetail/:board_id" element={<PostDetail />} />
            <Route path="/writenewpost" element={<WriteNewPost />} />
            <Route path="/search" element={<Search />} />
            <Route path="/searchfilter" element={<SearchFilter />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/userchatlist" element={<UserChatList />} />
            <Route path="/chatroom/:chatRoomId/:myNickname/:otherNickname" element={<ChatRoom/>}/> {/* 추가 -준형 (chatRoomId 를 params 로 사용하기) */}
            <Route path="/userchatroom/:chatRoomId/:myNickname/:otherNickname" element={<UserChatRoom/>}/>
            <Route path="/outermypage" element={<OuterMyPage />} />
            <Route path="/usermypage" element={<UserMyPage />} />
            <Route path="/editcoprofile" element={<EditCoProfile />} />
            <Route path="/edituserprofile" element={<EditUserProfile />} />
            <Route path="/outerrankinfo" element={<OuterRankInfo/>}/>
            <Route path="/coallcodies" element={<CoAllCodies/>}/>
            <Route path="/coreviews" element={<CoReviews/>}/>
            <Route path="/likecodies" element={<LikeCodies/>}/>
            {/* 소셜 로그인 */}
            <Route path="/oauth/kakao" element={<Kakao/>} />
            <Route path="/oauth/naver" element={<Naver/>} />
            <Route path="/oauth/google" element={<Google/>} />
            <Route path="/oauth/register/kakao" element={<RegisterKakao/>} />
            <Route path="/oauth/register/naver" element={<RegisterNaver/>} />
            <Route path="/oauth/register/google" element={<RegisterGoogle/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
