import './find-form.css';

import { useState } from 'react';

const FindForm = () => { 

    const [text, setText] = useState("");

    function  addText(e) {
        setText(text => e.target.value);
      }

    const validateInput = (text) => {
        return text.search(/\d/) >=0  //поиск цифр в набранном тексте 
    }

    const color = validateInput(text) ? 'text-danger' : null;  //стиль бутстрап для выделения текста красным


    return (
        <div className="commentFrame">
            <form>
                <span>Find picture by description</span>
                <input className= {`inputForm ${color}`}
                    type = "text" 
                    onChange={addText}
                    value ={text} />
            </form>
        </div>
    )

}

export default FindForm;

