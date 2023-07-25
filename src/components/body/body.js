import { useState } from 'react';
import './body.css';

const Body = (props) => {

    const [comment, setComment] = useState('');
    const [visitors, setVisitors] = useState(0);
    const [likes, setLikes] = useState(0);
 
    const likeUs = () => {
        setLikes(likes => likes + 1);
    } 

    const addComment = (e) => {
        setComment(comment => e.target.value);
    }

    const addVisitor = () => {
        setVisitors(visitors => visitors + 1);
    } 

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
                        onChange={addComment}
                        value ={comment} />
                </form>
                
                <button className="like" 
                    onClick={likeUs}
                    data-value={likes}
                    onMouseEnter={addVisitor}>     
                    <i className="fa-solid fa-heart fa-beat colored"> {counter}</i></button> 
                    
            </div>
        )
        }


export default Body;