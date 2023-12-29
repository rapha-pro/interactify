import Share_option from "./Share_option";
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className="share w-100 rounded">
        <div className="share-wrapper p-3">
            <div className="share-top">
                <img className="share-profileImg" src="/assets/person/2.jpeg" alt="" />
                <input 
                    placeholder="what's in your mind today? " 
                    className="share-input" 
                />
            </div>
            <hr className="share-hr m-3"/>
            <div className="share-bottom d-flex align-items-center justify-content-between">
                <div className="share-options d-flex gap-2">
                    <Share_option icon={<PermMediaIcon htmlColor="tomato" className="share-icon" />} text={"Photos or videos"}/>
                    <Share_option icon={<LabelIcon htmlColor="blue" className="share-icon" />} text={"Tag"}/>
                    <Share_option icon={<RoomIcon htmlColor="green" className="share-icon" />} text={"Location"}/>
                    <Share_option icon={<EmojiEmotionsIcon htmlColor="gold" className="share-icon" />} text={"Feelings"}/>
                </div>
                <button className="share-button border-0 py-1 px-2 rounded ms-4 bg-success text-white fw-medium">share</button>
            </div>
        </div>
    </div>
  )
};

export default Share;