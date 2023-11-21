import React from "react";
import "./Reels.css";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
const Reel = ({ video }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="mt-5 reel-post">
      <div>
        <iframe
          width="600"
          height="1100px"
          src={video.url}
          title="Cheeka Meets Sachin and Viv Richards in Wankade"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="reels-icon-container">
        <div className="d-flex flex-column reels-icon">
          {like ? (
            <FavoriteIcon
              className="heart-icon"
              onClick={() => setLike(!like)}
            />
          ) : (
            <FavoriteBorderIcon onClick={() => setLike(!like)} />
          )}
          <span className="reel-likes">{video.likes}</span>
        </div>
        <div className="d-flex flex-column reels-icon">
          <ChatBubbleOutlineIcon />
          <span className="reel-likes">{video.comments}</span>
        </div>
        <div className="d-flex flex-column reels-icon">
          <TelegramIcon />
        </div>
      </div>
    </div>
  );
};

export default Reel;
