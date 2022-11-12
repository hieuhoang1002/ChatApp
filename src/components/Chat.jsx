import React from "react";
import "../scss/Chat.scss";
import "../scss/responsive.scss";

import {
  IoVideocamSharp,
  IoPersonAdd,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const [showCall, setShowCall] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowInCall = () => {
    setShowCall(true);
    setShowAdd(false);
    setShowMore(false);
  };
  const handleShowOutCall = () => {
    setShowCall(false);
  };
  const handleShowInAdd = () => {
    setShowAdd(true);
    setShowCall(false);
    setShowMore(false);
  };
  const handleShowOutAdd = () => {
    setShowAdd(false);
  };
  const handleShowInMore = () => {
    setShowMore(true);
    setShowCall(false);
    setShowAdd(false);
  };
  const handleShowOutMore = () => {
    setShowMore(false);
  };

  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>

        <div className="chatIcons">
          <div
            className="icon"
            onMouseOver={handleShowInCall}
            onMouseOut={handleShowOutCall}
          >
            <IoVideocamSharp />
            {showCall && (
              <div className="call">
                <div className="content">Gọi video</div>
                <div className="taohinhtamgiac"></div>
              </div>
            )}
          </div>
          <div
            className="icon"
            onMouseOver={handleShowInAdd}
            onMouseOut={handleShowOutAdd}
          >
            <IoPersonAdd />
            {showAdd && (
              <div className="add">
                <div className="content">Bạn bè</div>
                <div className="taohinhtamgiac"></div>
              </div>
            )}
          </div>
          <div
            className="icon"
            onMouseOver={handleShowInMore}
            onMouseOut={handleShowOutMore}
          >
            <IoEllipsisHorizontalSharp />
            {showMore && (
              <div className="more">
                <div className="content">Xem thêm</div>
                <div className="taohinhtamgiac"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
