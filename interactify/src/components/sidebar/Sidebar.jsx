import "./sidebar.css";
import Sidebar_item from "./Sidebar_item";
import Friend from "../friends/Friend.jsx";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper p-4">
        <ul className="sidebar-list m-0 p-0 d-flex flex-column justify-content-center gap-3">
          <Sidebar_item icon={<RssFeedIcon className="sidebar-icon"/>} title="feed" />
          <Sidebar_item icon={<ChatIcon className="sidebar-icon"/>} title="chat" />
          <Sidebar_item icon={<OndemandVideoIcon className="sidebar-icon"/>} title="videos" />
          <Sidebar_item icon={<GroupsIcon className="sidebar-icon"/>} title="groups" />
          <Sidebar_item icon={<BookmarkAddIcon className="sidebar-icon"/>} title="bookmark" />
          <Sidebar_item icon={<HelpOutlineIcon className="sidebar-icon"/>} title="questions" />
          <Sidebar_item icon={<WorkIcon className="sidebar-icon"/>} title="jobs" />
          <Sidebar_item icon={<EventIcon className="sidebar-icon"/>} title="events" />
          <Sidebar_item icon={<SchoolIcon className="sidebar-icon"/>} title="school" />
        </ul>
        <button className="sidebar-button text-capitalize border-0 rounded mt-3 py-2 px-4 fw-medium">show more</button>
        <hr className="sidebar-hr mt-4" />
        <h6 className="mb-3 fw-bold">Online</h6>
        <ul className="sidebar-friendlist m-0 p-0 list-unstyled">
          <Friend profile="/assets/person/9.jpeg" friendName="Melina cell" online={true}/>
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;