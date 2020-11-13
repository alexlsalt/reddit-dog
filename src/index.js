import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import Error from "./Error";
import Header from "./Header";
import "./index.css";


function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('Type here');
  const [searchTerm, setSearchTerm] = useState('dachshund');
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${searchTerm}.json`)
      .then((res) => res.json())
      .then((json) => {
        const postList = json.data.children.map((c) => c.data);
        postList.sort((a, b) => (a.ups < b.ups ? 1 : -1));
        setPosts(postList);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, [searchTerm]);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('.search-input-box').value = '';
  };

  const handleChange = (e) => {
    setValue(document.querySelector('.search-input-box').value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let term = document.querySelector('.search-input-box').value.replace(' ', '');
    
    setSearchTerm(term);
  }

  const handleNewSearch = () => {
    setError(false);
  }

  return (
    <div>

      {
        error &&
        <Error onClick={handleNewSearch} />
      }
      
      {
        !error &&
        <>
        <Header text="Welcome to Reddit Dog!" />
        <h2 className='heading'>Displaying top {searchTerm} posts from Reddit...</h2>
        <div className='search'>
        <h3>Search new category:</h3>
        <form>
          <input className='search-input-box' type='text' value={value} onClick={handleClick} onChange={handleChange}></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
       <div className="post-container">
       <ul>
         {posts.map((post) => (
           <li key={post.id}>
             <Post post={post} />
           </li>
         ))}
       </ul>
     </div>
    </>
      }
      
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
