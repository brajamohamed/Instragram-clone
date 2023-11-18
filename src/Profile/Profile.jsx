import React from "react";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import Post from "../Timeline/Post/Post";
const Profile = () => {
  return (
    <div>
      <ProfileDetails />
      {/* <Post /> */}
    </div>
  );
};

export default Profile;
