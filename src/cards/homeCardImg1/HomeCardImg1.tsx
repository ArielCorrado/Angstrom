import "./homeCardImg1.css"
import {ReactNode, useState, useRef} from "react"

function HomeCardImg1 (props: {imgSrc: string, text: string}) {

    const [cardText, setCardText] = useState <ReactNode | null> (null);
    const imgRef = useRef <HTMLImageElement | null> (null);

    const showText = () => {
        setCardText(<p className="homeCardImg1Text textFadeInVertical flex">{props.text}</p>)
        imgRef.current?.classList.remove("brightnessOn");
        imgRef.current?.classList.remove("brightnessOff");
        imgRef.current?.classList.add("brightnessOff");
    }

    const clearText = () => {
        setCardText(<p className="homeCardImg1Text textFadeOutVertical flex">{props.text}</p>)
        imgRef.current?.classList.remove("brightnessOn");
        imgRef.current?.classList.remove("brightnessOff");
        imgRef.current?.classList.add("brightnessOn");
    }

    return (
        <div className="homeCardImg1Cont flex" onMouseOver={showText} onMouseLeave={clearText}>
            <img src={props.imgSrc} alt="Angstrom" className="homeCardImg1Img" ref={imgRef}/>
            {cardText}
        </div>
    )
}

export default HomeCardImg1