import "./cardImg1.css"
import {ReactNode, useState, useRef} from "react"

function HomeCardImg1 (props: {imgThumbnailSrc: string, text: string, cardClass: string}) {

    const [cardText, setCardText] = useState <ReactNode | null> (null);
    const filterRef = useRef <HTMLImageElement | null> (null);

    const showText = () => {
        setCardText(<p className="homeCardImg1Text textFadeInVertical flex">{props.text}</p>)
        filterRef.current?.classList.remove("cardTeamOpacityOff");
        filterRef.current?.classList.remove("cardTeamOpacityOn");
        filterRef.current?.classList.add("cardTeamOpacityOn");
    }

    const clearText = () => {
        setCardText(<p className="homeCardImg1Text textFadeOutVertical flex">{props.text}</p>)
        filterRef.current?.classList.remove("cardTeamOpacityOff");
        filterRef.current?.classList.remove("cardTeamOpacityOn");
        filterRef.current?.classList.add("cardTeamOpacityOff");
    }

    return (
        <div className={`homeCardImg1Cont flex ${props.cardClass}`} onMouseOver={showText} onMouseLeave={clearText}>
            <img src={props.imgThumbnailSrc} alt="Angstrom" className="homeCardImg1Img OoS"/>
            <div className="cardTeamFilter" ref={filterRef}></div>
            {cardText}
        </div>
    )
}

export default HomeCardImg1