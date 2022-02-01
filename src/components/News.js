import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(null);
    
    useEffect(() => {
        Commen()
        document.title = `${props.title}`
        // eslint-disable-next-line
    }, [])

    const Commen = async ()=> {
        props.progress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pagS}&page=${page}`;
        setLoading(true)
        props.progress(30)
        let data = await fetch(url);
        props.progress(50)
        let parsedData = await data.json();
        props.progress(70)
        setArticles(parsedData.articles)
        setPage(page)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.progress(100)
    }


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pagS}&page=${page+1}`
        setPage(page+1)
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    };


    return (
        <div style={{ marginTop: "75px" }}>
            <h2 className="text-center text-danger my-3">{props.title}</h2>
            <hr style={{ border: "2px solid red" }} />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <div className="d-flex justify-content-center"> <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </button></div>}>
                <div className="container">
                    <div className="row">
                        {articles && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : "..."} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} source={element.source.name} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )

}
News.defaultProps = {
    country: "in",
    category: "general",
    pagS: 15
}

News.propsTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagS: PropTypes.number
}

export default News




