
import React, {useState, useEffect} from 'react';

import Card from './Card';


function Collection({Category}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        request();
    }, []);


    const request = async () => {
        const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(Category)}&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2`;


        const res = await fetch(URL);
        const { data } = await res.json();

        const pics = data.map(image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images?.downsized_medium.url
            };
        });

        console.log(pics);
        setData(pics);

    };


    return (
        <div>
            <h1> Collection </h1>
            <ol>

                {data.map(({ id, title}) => {
                    return <li key={id}>{title} </li>;
                })}

            </ol>

            <hr />

            {data.map(({ id, title, url}) => {
                    return <Card
                    key = {id}
                    title = {title} 
                    url = {url}
                    />
                })
            }

        </div>
    );
}

export default Collection;