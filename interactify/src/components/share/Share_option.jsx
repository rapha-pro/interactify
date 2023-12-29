import "./share.css";

function Share_option({icon, text}) {
  return (
    <div className="share-option d-flex align-items-center ms-2 cursor-pointer">
        {icon}
        <span className="share-option-text ps-1 fw-medium">{text}</span>
    </div>
    )
};

export default Share_option;