import React from 'react'
import SinglePost from '../SinglePost/SinglePost'
import "./News.css"

class News extends React.Component {
    constructor() {
        super()

        this.state = {
            ids: []

        }
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(resolve => resolve.json())
            .then(data => {

                this.setState({ ids: data.slice(0, 10) })
            })

    }

    render() {
        return (
            <div className="News">{
                this.state.ids.map((id, i) => <SinglePost key={i} id={id} />)
            }</div>
        )
    }
}
export default News