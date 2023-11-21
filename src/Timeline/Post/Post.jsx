import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState, useEffect } from "react";
import { useRef } from "react";
function Post({
  posts,
  setPosts,
  user,
  postImage,
  postText,
  likeCount,
  timestamp,
  comments,
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(true);
  const commentRef = useRef();

  let fewComments = [];
  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleAddComment = (user) => {
    setPosts(
      posts.map((post) => {
        if (post.user === user) {
          return {
            user: post.user,
            postImage: post.postImage,
            likeCount: post.likeCount,
            timestamp: post.timestamp,
            postText: post.postText,
            comments: [comment, ...post.comments],
          };
        } else {
          return post;
        }
      })
    );
  };
  const handleDeleteComment = () => {};

  useEffect(() => {
    setComment("");
  }, [posts]);
  return (
    <div className="post mt-5">
      <div className="post_title">
        <div className="post_userImg">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>
          {user} &bull; <span style={{ marginLeft: "5px" }}>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_image">
        <img src={postImage} alt="Post Image" className="img-fluid" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            {liked ? (
              <FavoriteIcon className="postIcon liked" onClick={handleLike} />
            ) : (
              <FavoriteBorderIcon className="postIcon" onClick={handleLike} />
            )}
            <ChatBubbleOutlineIcon className="postIcon " />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            {saved ? (
              <BookmarkIcon className="postIcon saved" onClick={handleSave} />
            ) : (
              <BookmarkBorderIcon className="postIcon" onClick={handleSave} />
            )}
          </div>
        </div>
        Liked by {liked ? likeCount + 1 : likeCount} people.
      </div>
      <div className="post-text">
        <span className="fw-bolder">{user}</span> <span>{postText}</span>
      </div>
      <div className="new-comment">
        <div className="form">
          <div className="input-group">
            <input
              type="text"
              className="comment-input"
              placeholder="Add a comment.."
              onChange={(e) => handleChange(e)}
              value={comment}
              ref={commentRef}
            />
            {comment ? (
              <button
                className="btn text-primary comment-btn"
                onClick={() => handleAddComment(user)}
              >
                Post
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {comments.length > 0 && showAllComments
        ? comments.map((comment) => {
            return (
              <div className="post-comments">
                <div className="post-comment">
                  <span className="fw-bolder me-2">Raja Mohamed</span>
                  <span>{comment}</span>
                </div>
                <div className="comment-delete">
                  <button
                    className="btn text-primary"
                    onClick={handleDeleteComment}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : fewComments.map((comment) => {
            return (
              <div className="post-comments">
                <div className="post-comment">
                  <span className="fw-bolder me-2">Raja Mohamed</span>
                  <span>{comment}</span>
                </div>
                <div className="comment-delete">
                  <button
                    className="btn text-primary"
                    onClick={handleDeleteComment}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Post;
