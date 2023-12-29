import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import { format } from "timeago.js";

function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setisLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER; //PF: Public folder

  useEffect(()=> {
    const fetchUser = async() => {
      const res = await axiosConfig(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    if(!isLiked) {
        setLike(like+1);
        setisLiked(!isLiked);
    }
  }
  return (
    <div className="post w-100 my-5">
        <div className="post-wrapper p-2">
            <div className="post-top d-flex align-items-center justify-content-between">
                <div className="post-topLeft d-flex align-items-center">
                    <img src={user.profilePicture || PF+"post/3.jpeg"} alt="" className="post-profileImg" />
                    <span className="post-username fw-medium me-3">{user.username}</span>
                    <span className="post-date">{format(post.createdAt)}</span>
                </div>
                <div className="post-topRight">
                    <MoreVertIcon className="post-icon cursor-pointer" />
                </div>
            </div>
            <div className="post-center my-3">
                <span className="post-text">{post?.description}</span>
                <img src={PF+post.image} alt="a post" className="postImg mt-3 w-100" />
            </div>
            <div className="post-bottom d-flex align-items-center justify-content-between">
                <div className="post-bottomLeft d-flex align-items-center w-50">
                    <img src={`${PF}like.png`} alt="like icon" className="likeIcon" onClick={likeHandler}/>
                    <img src={`${PF}heart.png`} alt="heart icon" className="likeIcon" onClick={likeHandler}/>
                    <span className="post-like-counter">{like} people like it</span>
                </div>
                <div className="post-bottomRight">
                    <span className="post-commentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Post;