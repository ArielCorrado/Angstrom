import "./cardTeam.css"
import {ReactNode, useState, useRef} from "react"

function CardTeam (props: {imgSrc: string, name: string, position: string, imgClass: string, showCvFunction: () => void}) {

    const [cardText, setCardText] = useState <ReactNode | null> (null);
    const filterRef = useRef <HTMLImageElement | null> (null);

    const showText = () => {
        setCardText(<p className="homeCardImg1Text textFadeInVertical flex">Ver Reseña</p>)
        filterRef.current?.classList.remove("cardTeamOpacityOff");
        filterRef.current?.classList.remove("cardTeamOpacityOn");
        filterRef.current?.classList.add("cardTeamOpacityOn");
    }

    const clearText = () => {
        setCardText(<p className="homeCardImg1Text textFadeOutVertical flex">Ver Reseña</p>)
        filterRef.current?.classList.remove("cardTeamOpacityOff");
        filterRef.current?.classList.remove("cardTeamOpacityOn");
        filterRef.current?.classList.add("cardTeamOpacityOff");
    }

    return (
        <div className="homeCardImg1Cont cardTeamCont fadeIn1 OoSwF flex" onMouseOver={showText} onMouseLeave={clearText} onClick={() => props.showCvFunction()}>
            <img src={props.imgSrc} alt="Angstrom card" className={`homeCardImg1Img ${props.imgClass}`}/>
            <div className="cardTeamFilter" ref={filterRef}></div>
            <div className="cardTeamNameCont flex column">
                <p className="cardTeamName">{props.name}</p>
                <p className="cardTeamPosition cursiva">{props.position}</p>
            </div>
            {cardText}
        </div>
    )
}

export default CardTeam