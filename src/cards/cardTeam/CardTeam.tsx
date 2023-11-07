import "./cardTeam.css"
import {ReactNode, useState, useRef} from "react"

function CardTeam (props: {imgSrc: string, name: string, position: string}) {

    const [cardText, setCardText] = useState <ReactNode | null> (null);
    const imgRef = useRef <HTMLImageElement | null> (null);

    const showText = () => {
        setCardText(<p className="homeCardImg1Text textFadeInVertical flex">Ver Curriculum</p>)
        imgRef.current?.classList.remove("brightnessOn");
        imgRef.current?.classList.remove("brightnessOff");
        imgRef.current?.classList.add("brightnessOff");
    }

    const clearText = () => {
        setCardText(<p className="homeCardImg1Text textFadeOutVertical flex">Ver Curriculum</p>)
        imgRef.current?.classList.remove("brightnessOn");
        imgRef.current?.classList.remove("brightnessOff");
        imgRef.current?.classList.add("brightnessOn");
    }

    return (
        <div className="homeCardImg1Cont cardTeamCont flex" onMouseOver={showText} onMouseLeave={clearText}>
            <img src={props.imgSrc} alt="Angstrom card" className="homeCardImg1Img" ref={imgRef}/>
            <div className="cardTeamNameCont flex column">
                <p className="cardTeamName">{props.name}</p>
                <p className="cardTeamPosition cursiva">{props.position}</p>
            </div>
            {cardText}
        </div>
    )
}

export default CardTeam