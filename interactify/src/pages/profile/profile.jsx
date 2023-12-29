import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; //PF: Public folder
  
  return (
    <>
        <Topbar/>
        <div className="profile-container d-flex">
            <Sidebar />
            <div className="profile-right">
                <div className="profile-rightTop">
                    <div className="profile-cover position-relative">
                        <img src={`${PF}post/3.jpeg`} alt="cover" className="profile-coverImg w-100" />
                        <img src={`${PF}person/2.jpeg`} alt="profile" className="profile-picture" />
                    </div>
                    <div className="profile-info d-flex flex-column align-items-center justify-content-center">
                        <h4 className="profile-infoName fs-2 fw-semibold">Jack Carret</h4>
                        <span className="profile-bio">Hello, World!</span>
                    </div>
                </div>
                <div className="profile-rightBottom d-flex">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
  )
};

export default Profile;