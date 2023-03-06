import React, { useState } from 'react'
import axios from 'axios'
import Newscard from './Newscard';



function News() {
    const [news, setnews] = useState([])
    async function submit() {
        let response = await axios.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=5")
        console.log(response);
        setnews(response.data)
    }
    return (
        <div>
            <h1>Space News</h1>
            <button onClick={submit}>View News</button>
            {
                news.map((singlenews) => {
                    return (
                        // <h1>{singlenews.title}</h1>
                        <Newscard singlenews={singlenews}/>
                    )
                })
            }
        </div>
    )
}

export default News