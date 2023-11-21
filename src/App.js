import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Navigation from "./Navigation/Navigation";
import SmallBar from "./Navigation/SmallBar";
import Timeline from "./Timeline/Timeline";
import Search from "./Search/Search";
import Explore from "./Explore/Explore";
import Reels from "./Reels/Reels";
import CreatePost from "./CreatePost/CreatePost";
import Profile from "./Profile/Profile";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState(false);
  const [create, setCreate] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1400);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
  const videos = [
    {
      likes: "51.3k",
      comments: 7856,
      url: "https://youtube.com/embed/t9taDzQ9ETM",
      userName: "Madan Gowri",
      text: "Only one left ",
    },
    {
      likes: "5k",
      comments: 452,
      url: "https://www.youtube.com/embed/6xfc3ybbx1Y",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "53k",
      comments: 874,
      url: "https://www.youtube.com/embed/vAKmkn3eIcQ",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "1.3k",
      comments: 521,
      url: "https://www.youtube.com/embed/sNFPOQmjaU4",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "3.2k",
      comments: 785,
      url: "https://www.youtube.com/embed/MlVgvmQvXPY",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "756",
      comments: 127,
      url: "https://www.youtube.com/embed/awxZu-s_fHE",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "30k",
      comments: 1002,
      url: "https://www.youtube.com/embed/MtNmD8JPrJY",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "55",
      comments: 5,
      url: "https://www.youtube.com/shorts/6NETeyCzWJg",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "952",
      comments: 123,
      url: "https://www.youtube.com/shorts/bb-cZTWeTbo",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "97",
      comments: 8,
      url: "https://www.youtube.com/embed/3DAdfKHuClg",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "21.3k",
      comments: 552,
      url: "https://www.youtube.com/embed/N_sqPZLV69M",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "1.2k",
      comments: 420,
      url: "https://www.youtube.com/embed/YR75Zzz74js",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "256",
      comments: 78,
      url: "https://www.youtube.com/embed/mPrdLqmQt5g",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "512",
      comments: 225,
      url: "https://www.youtube.com/embed/B8LwRfd8sRs",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "221",
      comments: 52,
      url: "https://www.youtube.com/embed/_UJOE73oZwE",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "700",
      comments: 745,
      url: "https://www.youtube.com/embed/hxpjPqs-3lg",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "3k",
      comments: 523,
      url: "https://www.youtube.com/embed/GC-X9t2sQXI",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "51.3k",
      comments: 785,
      url: "https://www.youtube.com/embed/i_tc3VsLXfA",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "513k",
      comments: 25,
      url: "https://www.youtube.com/embed/IQT_vHrWt-M",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "53k",
      comments: 75,
      url: "https://www.youtube.com/embed/C6gOoD79R3g",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
    {
      likes: "7.2k",
      comments: 1400,
      url: "https://www.youtube.com/embed/kWapZjhzHzc",
      userName: "Junglee Music Tamil",
      text: "Periyappa romba rasiyana aalu ",
    },
  ];
  return (
    <BrowserRouter>
      <div className="App app-container">
        {create && (
          <CreatePost posts={posts} setPosts={setPosts} setCreate={setCreate} />
        )}
        {search && <Search setSearch={setSearch} />}
        {loggedIn && (
          <div className="navigation-section">
            {isSmallScreen ? (
              <SmallBar
                setCreate={setCreate}
                setSearch={setSearch}
                setLoggedIn={setLoggedIn}
              />
            ) : (
              <Navigation
                setCreate={setCreate}
                setSearch={setSearch}
                setLoggedIn={setLoggedIn}
              />
            )}
          </div>
        )}
        <div className="content-section">
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? (
                  <Timeline posts={posts} setPosts={setPosts} />
                ) : (
                  <Login setLoggedIn={setLoggedIn} />
                )
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/explore"
              element={<Explore videos={videos} setCreate={setCreate} />}
            />

            <Route path="/reels" element={<Reels videos={videos} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
