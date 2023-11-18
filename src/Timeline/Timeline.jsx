import React, { useState } from "react";
import "./Timeline.css";
import Post from "./Post/Post";
import Stories from "./Stories/Stories";
import Suggestions from "./Suggestions/Suggestions";
const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "MSD",
      postImage:
        "https://www.hindustantimes.com/ht-img/img/2023/03/26/550x309/raina_dhoni_1679820810885_1679820817255_1679820817255.jpg",
      likes: 54,
      timestamp: "Just now",
    },
    {
      user: "sureshraina3",
      postImage:
        "https://starsunzip.com/wp-content/uploads/2022/09/suresh-raina.jpg",
      likes: 432,
      timestamp: "A moment ago",
    },
    {
      user: "I'mRo45",
      postImage:
        "https://im.rediff.com/cricket/2017/dec/14rohit2.jpg?w=670&h=900",
      likes: 140,
      timestamp: "5mins",
    },
    {
      user: "Mohammed Shami",
      postImage:
        "https://images.news18.com/ibnlive/uploads/2022/10/collage-maker-17-oct-2022-08.08-pm-166601750816x9.jpg",
      likes: 14,
      timestamp: "12mins",
    },
    {
      user: "BumBumRa",
      postImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/indias-jasprit-bumrah-celebrates-the-wicket-of-sri-lankas-pathum-nissanka-ap-135700795-1x1_1.jpg?VersionId=.mC58vrINDUNLkCUaQsnRuQOPr6ZyX6b",
      likes: 14,
      timestamp: "1hr",
    },
    {
      user: "IamSiraj",
      postImage:
        "https://assets.telegraphindia.com/telegraph/2023/Sep/1695090800_siraj.gif",
      likes: 14,
      timestamp: "3hrs",
    },
    {
      user: "Sachin",
      postImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/11/03/2614150-untitled-design-2023-11-03t124737.718.jpg?im=Resize=(640,360)",
      likes: 14,
      timestamp: "8hrs",
    },
    {
      user: "Gambhir",
      postImage:
        "https://img.mensxp.com/media/content/2022/Apr/header-credit-Twitter---BCCI_62483d25d1055.jpeg",
      likes: 14,
      timestamp: "14hrs",
    },
    {
      user: "Sara Tendulkar",
      postImage:
        "https://crickettimes.com/wp-content/uploads/2023/11/Shubman-Gill-Sara-Tendulkar-1-700x365.webp",
      likes: 14,
      timestamp: "1d",
    },
    {
      user: "I'Ricky",
      postImage:
        "https://c.ndtvimg.com/2022-03/jtp9imco_ricky-ponting-twitter_625x300_26_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      likes: 14,
      timestamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
