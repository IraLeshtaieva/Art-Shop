
import './footer.css'


const Footer = ({setFilter}) => {

    const active = setFilter === "all";
    const clazz = active? "btn btn-light" : "btn btn-outline-light";
    return (
        <div className="btn-group">
            <button 
                className={clazz}
                type="button"
                onClick={() => setFilter("all")}
                >
                    All pictures
            </button>
            <button 
                className={clazz}
                type="button"
                onClick={() => setFilter("magnet")}
                >
                    Magnets
            </button>
            <button 
                className={clazz}
                type="button"
                onClick={() => setFilter("painting")}
                >
                    Paintings 
            </button>
        </div>
    );
}

export default Footer;