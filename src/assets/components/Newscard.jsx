import React from 'react'

function Newscard(props) {
    return (
        // <div class="container">
        //     <div class="card">
        //         <div class="face face1">
        //             <div class="content">
        //                 <div class="icon">
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="face face2">
        //             <div class="content">
        //                 <h4>{props.singlenews.title}</h4>
        //                 <p>{props.singlenews.summary}</p>
        //                 <p>{props.singlenews.publishedAt}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // 2
        <div>
            <figure>
                <img src={props.singlenews.imageUrl} alt="image" width={300} />
                <figcaption className='fig cap'>{props.singlenews.title}
                    <p className='fig sum'>{props.singlenews.summary}</p>
                </figcaption>
                <figcaption className='fig pub'>{props.singlenews.publishedAt}</figcaption>
            </figure>
        </div>

    )
}

export default Newscard