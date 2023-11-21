import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import { useRef } from "react";
const CreatePost = ({ posts, setPosts, setCreate }) => {
  const urlRef = useRef();
  const textRef = useRef();
  const [url, setUrl] = useState();
  const [postText, setPostText] = useState("");
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handlePostText = (e) => {
    setPostText(e.target.value);
  };
  const handleCreate = () => {
    if (urlRef.current.checkValidity() && textRef.current.checkValidity()) {
      setPosts([
        {
          user: "Raja Mohamed",
          postImage: url,
          likeCount: 0,
          timestamp: "Just Now",
          postText: postText,
          comments: [],
        },
        ...posts,
      ]);
      setCreate(false);
    } else {
      document
        .getElementById("needs-validation")
        .classList.add("was-validated");
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <p className="fw-bolder text-black">Create Post</p>
          </div>
          <div className="modal-body">
            <div className="form my-3 p-3" id="needs-validation" noValidate>
              <div className="input-group">
                <span className="input-group-text">Enter URL</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the image URL"
                  onChange={handleChange}
                  value={url}
                  ref={urlRef}
                  required
                />
              </div>
              <div className="input-group mt-3">
                <span className="input-group-text">Description</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter post description"
                  onChange={(e) => handlePostText(e)}
                  value={postText}
                  ref={textRef}
                  required
                />
              </div>
            </div>
          </div>
          <div className="modal-footer mb-3">
            <button
              type="button"
              className="btn btn-create"
              onClick={handleCreate}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() => setCreate(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
