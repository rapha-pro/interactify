import "./friend.css";

function Friend({profile, friendName, online}) {
  return (
    <li className="sidebar-friend position-relative">
        <img src={profile} alt="profile" className="sidebar-friend-profile" />
        <span className={online ? `online-dot`: ""}></span>
        <span className="sidebar-friendName ms-2">{friendName}</span>
    </li>
  )
};

export default Friend;