import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);

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
                    <img src={Users.filter((user)=> user.id === post.id)[0].profilePicture} alt="" className="post-profileImg" />
                    <span className="post-username fw-medium me-3">{Users.filter((user)=> user.id === post.id)[0].username}</span>
                    <span className="post-date">{post.date}</span>
                </div>
                <div className="post-topRight">
                    <MoreVertIcon className="post-icon cursor-pointer" />
                </div>
            </div>
            <div className="post-center my-3">
                <span className="post-text">{post?.desc}</span>
                <img src={post.photo} alt="a post" className="postImg mt-3 w-100" />
            </div>
            <div className="post-bottom d-flex align-items-center justify-content-between">
                <div className="post-bottomLeft d-flex align-items-center w-50">
                    <img src="/assets/like.png" alt="like icon" className="likeIcon" onClick={likeHandler}/>
                    <img src="/assets/heart.png" alt="heart icon" className="likeIcon" onClick={likeHandler}/>
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