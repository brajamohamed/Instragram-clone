import React, { useState } from "react";
import "./Timeline.css";
import Post from "./Post/Post";
import Stories from "./Stories/Stories";
import Suggestions from "./Suggestions/Suggestions";
const Timeline = ({ posts, setPosts }) => {
  return (
    <div className="timeline">
      <div className="row d-flex justify-content-center">
        <div className="timeline__left col-xxl-6 col-xl-7">
          <div className="timeline__posts">
            <div className="story">
              <Stories className="story" />
            </div>
            {posts.map((post) => (
              <Post
                posts={posts}
                setPosts={setPosts}
                user={post.user}
                postImage={post.postImage}
                likeCount={post.likeCount}
                timestamp={post.timestamp}
                postText={post.postText}
                comments={post.comments}
              />
            ))}
          </div>
        </div>
        <div className="timeline__right col-xxl-5 d-xxl-block d-xl-none d-lg-none d-lg-none d-md-none d-sm-none  text-white">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
