import "./cv.css";

function Cv (props: {text: JSX.Element, imgSrc: string, hiddenCvFunction: () => void, name: string, position: string}) {

    window.scrollTo({top: 0});

    return (
        <>
            <img src="/images/icons/close.png" alt="Close Icon" onClick={() => props.hiddenCvFunction()} className="cvCloseIcon" />
            <div className="cvCont flex">
                <div className="cvTextCont">
                    <div className="cvImageAndNameCont">
                        <img src={props.imgSrc} alt="CV team" className="cvImage opacityOnCharge opacityOnCharge1s5" />
                        <div className="cardTeamNameCont cardCvNameCont flex column">
                            <p className="cardTeamName">{props.name}</p>
                            <p className="cardTeamPosition cursiva">{props.position}</p>
                        </div>    
                    </div>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default Cv