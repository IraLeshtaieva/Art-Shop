
import './footer.css'


const Footer = ({setFilter, filter}) => {

    
    return (
        <div className="btn-group">
            <button 
                className={filter==="all"? "btn btn-light": "btn btn-outline-light"}
                type="button"
                onClick={() => setFilter("all")}
                >
                    All pictures
            </button>
            <button 
                className={filter==="magnet"? "btn btn-light": "btn btn-outline-light"}
                type="button"
                onClick={() => setFilter("magnet")}
                >
                    Magnets
            </button>
            <button 
                className={filter==="painting"? "btn btn-light": "btn btn-outline-light"}
                type="button"
                onClick={() => setFilter("painting")}
                >
                    Paintings 
            </button>
            <button 
                className={filter==="postcard"? "btn btn-light": "btn btn-outline-light"}
                type="button"
                onClick={() => setFilter("postcard")}
                >
                    Postcards 
            </button>
        </div>
    );
}

export default Footer;