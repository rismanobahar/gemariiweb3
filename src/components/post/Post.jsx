
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2016/10/16/23/33/fashion-show-1746590__340.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">British</span>
          <span className="postCat">Style</span>
        </div>
        <span className="postTitle">European Fashion</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p>
      London's most central venue can accommodate up to 500 for a standard runway show, and has the flexibility of two contrasting spaces to choose from: 
      The Old Billiard Room; modern, white and a blank canvas or The Ballroom with double height ceilings, chandeliers and grandeur.
      There are Venues in London, and there is 8 Northumberland Avenue.
      </p>
    </div>
  );
}
