# Reddit Dog React App

### Created and developed by [Alex Morton](https://alexlsalt.github.io/) 

This is a simple React app that uses the Reddit API to fetch subreddits depending on the input inserted into the main form on the UI.

Built using React. Deployed with Netlify.

## How It Works

The app fetches data from Reddit using the fetch API and using whatever search term the user submits within the search box. The returned data (25 posts) is then sorted in descending order by the number of upvotes on each post ('ups').

```
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
```


## Ongoing considerations 

### - Limiting search to *only* dog categories

At the moment, a user can search any potential subreddit on Reddit and not just dog breeds (i.e. Mad Men, Reactjs, etc) I'd like to set a constraint that would allow for a valid dog breed to be searched. 
