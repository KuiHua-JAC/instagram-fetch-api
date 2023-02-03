import "./App.css";
import InstagramCard from "./InstagramCard";
import { useState, useEffect } from "react";

function App() {
  const accessToken =
    "IGQVJWV2JYMktDejA1Sm1jNjBHeU9MR2xlZAm51QjFOb3Q1UlVmZAWFNVnplQUFRbGE0THVHX2lNZAmljbFIwOXB1V2QyX3h2VWFrMnhUN3ZABaHlueGRxRFNwTTJqMVdhaDNRNGk3NWNfYW5HOWRrVDlXWAZDZD";

  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const imagesToShow = 3;

  useEffect(() => {
    getUsername();
    getPostsImages();
  }, []);

  // Get the username of the user based on the accessToken
  async function getUsername() {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
    );
    const data = await response.json();
    setUsername(data.username);
  }

  // Get the posts of the user based on the accessToken
  async function getPostsImages() {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink&access_token=${accessToken}&limit=${imagesToShow}`
    );
    const data = await response.json();
    const posts = data.data;
    setPosts(posts);
  }

  return (
    <section>
      <div className="m-10">
        <h1 className="text-3xl font-bold text-center">
          Suivez nous sur Instagram!
        </h1>
      </div>
      <div className="m-10 flex justify-around">
        {posts.map((post) => (
          <InstagramCard
            key={post.id}
            imgSrc={post.media_url}
            caption={post.caption}
            link={post.permalink}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
