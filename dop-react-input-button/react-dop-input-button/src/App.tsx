import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './universalComponents/Button';

type dataType = {
    body: string
    id: number
    title: string
    userId: 1
}

function App() {
    const [data, setData] = useState<Array<dataType>>([]);
    console.log(data)
    const getMeData = () => {
       setData([])
    }

    useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))},[])

    return (
        <div className="App">
            <Button name={'CLEAN DATA'} callback={getMeData}/>
            <ul>
                {data.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
