import React from 'react'
import PropTypes from 'prop-types'
import './SinglePost.css'
import { FaMailchimp } from "react-icons/fa";
import { FaLeanpub } from "react-icons/fa"
import { FcLike } from 'react-icons/fc'
import { AiOutlineComment } from 'react-icons/ai'


class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            url: '',
            author: '',
            type: '',
            score: 0
        }
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data);

                this.setState({
                    title: data.title,
                    url: data.url,
                    author: data.by,
                    type: data.type,
                    score: data.score,
                    comment: data.descendants
                })

            })
    }

    render() {
        return (
            <div className="SinglePost">
                <a href={this.state.url} target="_blank"><i><h3 className="SinglePost__title">{this.state.title}</h3></i></a>
                <div className="SinglePost__info">
                    <p className="SinglePost__info_author"><FaMailchimp /> {this.state.author}</p>
                    <p className="SinglePost__info_type"><b>Type:</b> {this.state.type} <FaLeanpub /></p>
                    <p className='SinglePost__info_like'><FcLike /> {this.state.score}</p>
                    <p className='SinglePost__info_comment'><AiOutlineComment /> Comment:{this.state.comment}</p>
                </div>
            </div>
        )

    }
}
export default SinglePost

SinglePost.propTypes = {
    id: PropTypes.number
}