import { Component } from 'react'
import News from './News'
export class Home extends Component {
    constructor() {
        super();
        console.log("Hello constructor is now running");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=1&apiKey=8bb48334c44944f5b9ccf29e2da77b81`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })


    }
    prevbtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&apiKey=8bb48334c44944f5b9ccf29e2da77b81`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })


    }
    nextbtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=8bb48334c44944f5b9ccf29e2da77b81`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

    }



    render() {
        return (
            <>
                <div className="container mt-2">
                    <h3 className='text-center text-dark my-4'>Top New's Of Today....</h3>
                    <div className="row">
                        {this.state.articles.map((elm) => {
                            return <div className="col-12 col-md-4" key={elm.url}>
                                <News title={elm.title} description={elm.description} newsimg={elm.urlToImage} newsUrl={elm.url} />
                            </div>
                        })}


                    </div>

                </div>
                <div className="container d-flex justify-content-between">
                    <button className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.prevbtn}> &#8592;  Previous</button>
                    <button className='btn btn-dark' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.nextbtn}>Next &#8594;</button>
                </div>


            </>
        )
    }
}

export default Home

