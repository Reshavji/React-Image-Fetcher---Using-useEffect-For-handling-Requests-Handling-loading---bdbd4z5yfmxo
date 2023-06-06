import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [load, setLoad] = useState(false);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [flag, setFlag] = useState(false);
    const handleChagne = async(e) => {
        let id = e.target.value;
        if (id >=1 && id <= 5000) {
        setLoad(true);
        setFlag(false)
      
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

        const data = await response.json();
        setLoad(false);
        setTitle(data.title);
        setUrl(data.url)
        setFlag(true)
       
        console.log(data);
        }

    }

    return (
        <>
            <label>Id number</label>
            <input type='number' onChange={handleChagne}/>
            {load && <Loader/>}
            {flag && <PhotoFrame url={url} title={title}/>}
        </>
    )
}

export default App;
