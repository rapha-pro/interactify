import "./sidebar.css";

function Sidebar_item({icon, title}) {
  return (
    <li className="sidebar-list-item">
        {icon}
        <span className="sidebar-list-item-text text-capitalize">{title}</span>
    </li>
  )
};

export default Sidebar_item;