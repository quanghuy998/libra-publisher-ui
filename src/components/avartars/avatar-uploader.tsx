import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleUpload = (event: any) => {};
  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div
      className="position-relative"
      style={{ width: "200px", height: "200px" }}
    >
      <div
        className="bg-secondary rounded-circle"
        style={{ width: "100%", height: "100%" }}
      ></div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <div
        className="position-absolute bg-white rounded-circle border border-white"
        style={{
          width: "60px",
          height: "60px",
          bottom: 0,
          right: 0,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleDivClick}
      >
        <FontAwesomeIcon icon={faCamera} color="black"/>
      </div>
    </div>
  );
};

export default AvatarUploader;
