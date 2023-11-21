import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import CreatePost from "./CreatePost/CreatePost";
import Search from "@mui/icons-material/Search";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [create, setCreate] = useState(false);
  const [posts, setPosts] = useState([
    {
      user: "MSD",
      postImage:
        "https://www.hindustantimes.com/ht-img/img/2023/03/26/550x309/raina_dhoni_1679820810885_1679820817255_1679820817255.jpg",
      likeCount: 54,
      timestamp: "Just now",
      postText: "Had a wonderful time with Raina",
      comments: [],
    },
    {
      user: "sureshraina3",
      postImage:
        "https://starsunzip.com/wp-content/uploads/2022/09/suresh-raina.jpg",
      likeCount: 432,
      timestamp: "A moment ago",
      postText: "That magical moment",
      comments: [],
    },
    {
      user: "I'mRo45",
      postImage:
        "https://im.rediff.com/cricket/2017/dec/14rohit2.jpg?w=670&h=900",
      likeCount: 140,
      timestamp: "5mins",
      postText: "My reply to haters",
      comments: [],
    },
    {
      user: "Mohammed Shami",
      postImage:
        "https://images.news18.com/ibnlive/uploads/2022/10/collage-maker-17-oct-2022-08.08-pm-166601750816x9.jpg",
      likeCount: 14,
      timestamp: "12mins",
      postText: "Here's my comeback",
      comments: [],
    },
    {
      user: "BumBumRa",
      postImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/indias-jasprit-bumrah-celebrates-the-wicket-of-sri-lankas-pathum-nissanka-ap-135700795-1x1_1.jpg?VersionId=.mC58vrINDUNLkCUaQsnRuQOPr6ZyX6b",
      likeCount: 14,
      timestamp: "1hr",
      postText: "What's more exiting than playing for the country",
      comments: [],
    },
    {
      user: "IamSiraj",
      postImage:
        "https://assets.telegraphindia.com/telegraph/2023/Sep/1695090800_siraj.gif",
      likeCount: 14,
      timestamp: "3hrs",
      postText: "Keep calm, speak with your actions",
      comments: [],
    },
    {
      user: "Sachin",
      postImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/11/03/2614150-untitled-design-2023-11-03t124737.718.jpg?im=Resize=(640,360)",
      likeCount: 14,
      timestamp: "8hrs",
      postText: "This kid is amazing",
      comments: [],
    },
    {
      user: "Gambhir",
      postImage:
        "https://img.mensxp.com/media/content/2022/Apr/header-credit-Twitter---BCCI_62483d25d1055.jpeg",
      likeCount: 14,
      timestamp: "14hrs",
      postText: "I can't get rid of this picture",
      comments: [],
    },
    {
      user: "Sara Tendulkar",
      postImage:
        "https://crickettimes.com/wp-content/uploads/2023/11/Shubman-Gill-Sara-Tendulkar-1-700x365.webp",
      likeCount: 14,
      timestamp: "1d",
      postText: "All the best Gill bhai",
      comments: [],
    },
    {
      user: "I'Ricky",
      postImage:
        "https://c.ndtvimg.com/2022-03/jtp9imco_ricky-ponting-twitter_625x300_26_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      likeCount: 14,
      timestamp: "2d",
      postText: "Niceee",
      comments: [],
    },
  ]);
  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  return (
    <BrowserRouter>
      <div className="App">
        {create && (
          <CreatePost posts={posts} setPosts={setPosts} setCreate={setCreate} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Home posts={posts} setCreate={setCreate} setPosts={setPosts} />
              ) : (
                <Login setLoggedIn={setLoggedIn} />
              )
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
