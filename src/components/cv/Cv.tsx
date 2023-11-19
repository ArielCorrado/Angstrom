import "./cv.css";

function Cv (props: {text: JSX.Element, imgSrc: string, hiddenCvFunction: () => void}) {
    return (
        <>
            <img src="/images/icons/close.png" alt="Close Icon" onClick={() => props.hiddenCvFunction()} className="cvCloseIcon" />
            <div className="cvCont flex">
                <div className="cvTextCont">
                    <img src={props.imgSrc} alt="CV team" className="cvImage" />
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default Cv