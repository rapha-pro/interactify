import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axiosConfig from "../../axiosConfig";

function Feed() {

  const [posts, setPosts] = useState([]);
  
  useEffect(()=> {
    const fetchPosts = async() => {
      const res = await axiosConfig(`posts/timeline/6583e571d46eb1e03d9935cd`);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed-wrapper p-4">
        <Share />
        { posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
};

export default Feed;