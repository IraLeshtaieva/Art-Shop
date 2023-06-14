
import './footer.css'


const Footer = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All pictures
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Magnets
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Paintings 
            </button>
        </div>
    );
}

export default Footer;