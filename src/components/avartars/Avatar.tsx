import React from "react";

interface AvatarProps {
  /** The URL of the avatar image */
  avatarUrl?: string;
  /** The initials to show if no avatar image is provided */
  initials?: string;
  /** Size of the avatar (in pixels) */
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl, initials, size = 100 }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover" as const,
  };

  const initialsStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: size / 2,
    backgoundColor: "grey",
    fontWeight: "bold",
  };

  return (
    <div>
      {avatarUrl ? (
        <img src={avatarUrl} alt="avatar" style={avatarStyle} />
      ) : (
        <div style={initialsStyle}>{initials}</div>
      )}
    </div>
  );
};

export default Avatar;
