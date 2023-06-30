import { Component } from 'react';
import './body.css';

class Body extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comment: '',
            visitors: 0,
            likes: 0
        }
    }

    likeUs = () => {
        this.setState(state => ({
            likes: state.likes + 1
        }))
    } 

    addComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    addVisitor = () => {
        this.setState(state => ({
            visitors: state.visitors + 1
        }))
    } 
    render() {
        const {likes, comment, visitors} = this.state;
        const counter = (likes>0) ? likes : "";
        return(
            <div className="body">
                <h5>Сегодня мы порадовали: {likes} <i className="fa-solid fa-user"></i> </h5>
                <h5>Сегодня нас посетили: {visitors} </h5>
                    <div className='comment'>Елена: Каждый день радует магнит на холодильнике</div>
                    <div className='comment'>{comment}</div>
                <form>
                    <span>Write your comment </span>
                    <input className='inputForm' 
                        type = "text" 
                        onChange={this.addComment}
                        value ={comment} />
                </form>
                
                <button className="like" 


                    onClick={this.likeUs}
                    data-value={likes}
                    onMouseEnter={this.addVisitor}>     
                    <i className="fa-solid fa-heart fa-beat colored"> {counter}</i></button> 
                    
            </div>
        )
        }
}

export default Body;