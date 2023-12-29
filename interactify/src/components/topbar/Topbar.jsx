import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Topbar() {
  return (
    <div className="topbar-container d-flex align-items-center sticky-top">
        <div className="topbar-left text-white">
          <span className="logo ms-5 fw-bold">Interactify</span>
        </div>

        <div className="topbar-center">
          <div className="searchbar rounded-pill bg-white d-flex align-items-center">
            <SearchIcon className="searchIcon ms-3"/>
            <input placeholder="Search for friends, posts or videos" className="searchInput ms-2" />
          </div>
        </div>

        <div className="topbar-right d-flex align-items-center justify-content-around text-white">
          <div className="topbar-links d-flex gap-3">
            <span className="topbar-link">Homepage</span>
            <span className="topbar-link">Timeline</span>
          </div>
          <div className="topbar-icons d-flex gap-3">
            <div className="topbar-icon-item">
              <PersonIcon />
              <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icon-item">
              <ChatIcon />
              <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icon-item">
              <NotificationsIcon />
              <span className="topbar-icon-badge">1</span>
            </div>
          </div>
          <img src="/assets/person/2.jpeg" alt="profile" className="topbar-img" />
        </div>
    </div>
  )
};

export default Topbar;