import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import  { ModeChoice, UserInfo } from "./pages/Join";
import  MainPage from "./pages/Main/MainPage";
import CoInfo from "./pages/Join/CoInfo";
import GetStyle from "./pages/Join/GetStyle";
import CoUploadMainPicture from "./pages/Join/CoUploadMainPicture";
import UserGetRecommend from "./pages/Join/UserGetRecommend";
import JoinSuccess from "./pages/Join/JoinSuccess";


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<ModeChoice/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/coinfo" element={<CoInfo/>}/>
            <Route path="/getstyle" element={<GetStyle/>}/>
            <Route path="/couploadmainpicture" element={<CoUploadMainPicture />} />
            <Route path="/usergetrecommend" element={<UserGetRecommend />} />
            <Route path="/joinsuccess" element={<JoinSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
