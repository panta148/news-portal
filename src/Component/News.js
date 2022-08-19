import React, { Component } from 'react'

export class News extends Component {
    render() {
        let { title, description, newsUrl, newsimg } = this.props;
        return (
            <div>
                <div className="card mycard my-2" style={{ height: '27rem' }}>
                    <img src={newsimg ? newsimg : "https://cdn.vox-cdn.com/thumbor/lP-U00zpvaKzXextbdxRHcV4Ka0=/0x0:4925x2579/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22833723/1301633930.jpg"} className="card-img-top img-fluid h-50" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 45) : title}...</h5>
                        <p className="card-text">{description ? description.slice(0, 88) : description}....</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm  btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default News
