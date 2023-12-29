import "./rightbar.css";
import { Users } from "../../dummyData"
import Friend from "../friends/Friend";

function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; //PF: Public folder

  const Advertisement = () => {
    return (
      <img src={`${PF}ad.png`} alt="ad" className="rightbar-ad w-100 rounded my-4" />
    );
  }
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container d-flex align-items-center gap-2">
          <img src={`${PF}gift.png`} alt="birthday icon" className="giftImg" />
          <span className="birthday-text">
            <b>your friend</b> and <b>3 other friends</b> have their birthday today
          </span>
        </div>
        <Advertisement />
        <div className="d-flex flex-column">
          <h6 className="rightbar-title fw-bold mb-3">Friends</h6>
          <ul className="rightbar-friendList">
            { Users.map((user) => (
              <Friend key={user.id} profile={PF+user.profilePicture} friendName={user.username} online={true}/>
            ))}
          </ul>
        </div>
      </>
    );
  }

  const ProfileInfoItem  = ({title, text}) => {
    return (
      <div className="rightbar-infoItem mb-2">
        <span className="rightbar-infoKey me-2">{title}: </span>
        <span className="rightbar-infoValue">{text}</span>
        <br />
      </div>
    );
  }

  const FollowingItem = ({profile, name}) => {
    return (
      <div className="rightbar-following d-flex flex-column mb-3 cursor-pointer">
        <img src={profile} alt="profile friend" className="rightbar-followingImg" />
        <span className="rightbar-following-name">{name}</span>
      </div>
    );
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title fs-5 fw-semibold">Personal Information</h4>
        <div className="rightbar-info mb-4">
          <ProfileInfoItem title={"City"} text={"New York"} />
          <ProfileInfoItem title={"From"} text={"Douala"} />
          <ProfileInfoItem title={"Relationship"} text={"Single"} />
        </div>
        <h4 className="rightbar-title">Friends</h4>
        <div className="rightbar-followings d-flex justify-content-between">
          <FollowingItem profile={`${PF}person/7.jpeg`} name={"Jaxk Keth"} />
          <FollowingItem profile={`${PF}person/3.jpeg`} name={"Jaxk Keth"} />
          <FollowingItem profile={`${PF}person/9.jpeg`} name={"Jaxk Keth"} />
          <FollowingItem profile={`${PF}person/2.jpeg`} name={"Jaxk Keth"} />
          <FollowingItem profile={`${PF}person/3.jpeg`} name={"Jaxk Keth"} />
          <FollowingItem profile={`${PF}person/7.jpeg`} name={"Jaxk Keth"} />
        </div>

      </>
    )
  }

   return (
    <div className="rightbar">
      <div className="rightbar-wrapper pt-3 pe-3">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
};

export default Rightbar;