import { Component } from 'react';
import './body.css';

class Body extends Component {
    constructor (props) {
        super(props);
        this.state = {
            saled: 0,
            items: 25,
            comment: '',
            visitors: 0,
        }
    }

    goToBasket = () => {
        this.setState(state => ({
            saled: state.saled + 1,
            items: state.items - 1,

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
        const {items, saled, comment, visitors} = this.state;
        const {itemsPutedBasket} = this.props;
        return(
            <div className="body">
                <h5>Общее количетсво изделий: {items} </h5>
                <h5>Сегодня мы продали: {saled} </h5>
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
                
                <button className="basket" 
                    onClick={this.goToBasket}
                    onMouseEnter={this.addVisitor}>     
                    <i className="fa-solid fa-cart-plus fa-beat color"> {itemsPutedBasket}</i></button>
            </div>
        )
        }
}

export default Body;