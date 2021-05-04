import React from 'react'

export const SearchNasaItem = ( { id, camera, img, rover, date, status} ) => {
    // console.log(id, title, url);

    // 10. To create <div></div> tag with image and title of request.
    // 11. To return this div and GifGrid use it.
    return (
        <div className="card">
        <img className="card-img-top" src={img} alt={camera} style={{ maxWidth: 700}}/>
        <div className="card-body">
            <h5 className="card-title">
                { camera }
            </h5>
            <p className="card-text"> { rover } </p>
            <p className="card-text"> { status } </p>
            <p className="card-text">
                <small className="text-muted">{date}</small>
            </p>
        </div>

    </div>
    )
}
