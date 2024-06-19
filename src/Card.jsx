import { useState } from "react";
import {
  FcExpand,
  FcCollapse,
  FcComments,
  FcLike
} from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

const Card = () => {
  const [count, setCount] = useState(0);
  const [showItem, setShowItem] = useState(false);
  const [comments, setComment] = useState([]);
  const [input, setInput] = useState("");
  const [showInput, SetshowInput] = useState(false);
  const save = () => {
    setComment([...comments, input]);
    setInput("");
  };
  return (
    <>
      <div className="card">
        <br></br>
        <div className="header">
          <span className="prof">
            <CgProfile />
          </span>{" "}
          Hamim Thoyyib
        </div>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYuj-lxa6IeZjxLnHtKFvYJNX15nFbOxOAA&s"
        ></img>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>
            <FcLike /> {count > 0 && count}
          </button>
          <button onClick={() => SetshowInput(!showInput)}>
            <FcComments />
          </button>
          <button onClick={() => setShowItem(!showItem)}>
            {showItem ? <FcCollapse /> : <FcExpand />}
          </button>
        </div>
      </div>
      {showInput && (
        <div className="commentbox">
          <label>Add Comment &nbsp;</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          ></input>
          <button onClick={save}>Add</button>
        </div>
      )}
      {showItem && (
        <div className="more">
          <h1>Likes:{count}</h1>
          <ul>
            {comments.map((com, i) => (
              <li key={i}>{com}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Card;
