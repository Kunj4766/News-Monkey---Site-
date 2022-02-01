import React from 'react'

function NewsItem(props) {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } = props;
    return (
        <div className="my-3">
            <div className="card text-white bg-dark">
                <div style={{ display: "flex", right: "0", position: "absolute" }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imgUrl ? "https://images.moneycontrol.com/static-mcnews/2021/09/Midcaps-770x433.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{title}</h5>
                    <p className="card-text text-light">{description}</p>
                    <p className="card-text "><small className="text-light">By {author} On {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-info">Read More</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem




