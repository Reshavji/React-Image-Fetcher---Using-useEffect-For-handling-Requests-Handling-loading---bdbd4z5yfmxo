import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';

const App = () => {
const [load, setLoad] = useState(false);
const [url, setUrl] = useState('');
const [title, setTitle] = useState('');
const [flag, setFlag] = useState(false);

const handleChagne = async (e) => {
let id = e.target.value;
if (id >= 1 && id <= 5000) {
setLoad(true);
setFlag(false);

scss
Copy code
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setUrl(data.url);
    setFlag(true);
  } catch (error) {
    console.error('Error fetching data:', error);
    setTitle('');
    setUrl('');
    setFlag(false);
  }

  setLoad(false);
}
};

useEffect(() => {
let timeoutId;

scss
Copy code
const handleLoaderTimeout = () => {
  timeoutId = setTimeout(() => {
    setLoad(false);
    console.error('Timed out retrying after 4000ms: Expected to find element: `#loader`, but never found it.');
  }, 4000);
};

if (load) {
  handleLoaderTimeout();
} else {
  clearTimeout(timeoutId);
}

return () => clearTimeout(timeoutId);
}, [load]);

return (
<>
<label>Id number</label>
<input type="number" onChange={handleChagne} />
{load && <Loader />}
{flag && <PhotoFrame url={url} title={title} />}
</>
);
};

export default App;
