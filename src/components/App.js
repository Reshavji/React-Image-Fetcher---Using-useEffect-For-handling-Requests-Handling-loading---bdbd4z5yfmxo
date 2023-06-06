import React, { useState } from 'react';
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';

const App = () => {
const [id, setId] = useState('');
const [loading, setLoading] = useState(false);
const [photoData, setPhotoData] = useState(null);

const fetchData = async () => {
setLoading(true);
try {
const response = await fetch(https://jsonplaceholder.typicode.com/photos/${id});
const data = await response.json();
setPhotoData(data);
setLoading(false);
} catch (error) {
console.log(error);
setLoading(false);
}
};

const handleInputChange = (event) => {
setId(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
fetchData();
};

return (
<div>
<form onSubmit={handleSubmit}>
<input type="number" value={id} onChange={handleInputChange} placeholder="Enter a number" />
<button type="submit">Submit</button>
</form>

php
Copy code
  {loading ? (
    <Loader />
  ) : (
    photoData && (
      <PhotoFrame url={photoData.url} title={photoData.title} />
    )
  )}
</div>
);
};

export default App;
