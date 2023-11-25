import ReCAPTCHA from "react-google-recaptcha";
import "./recaptcha.css";

function Recaptcha (props: {callBackFunction: () => void, closeCaptcha: () => void}) {
    return (
        <div className="recaptcha flex">
            <img src="/images/icons/close.png" alt="Close" className="cvCloseIcon" onClick={props.closeCaptcha}/>
            <ReCAPTCHA 
                sitekey="6LcM4RspAAAAANHHnVdXAyr3RApcMw_2r8lzr23r" 
                onChange={props.callBackFunction} 
            />
        </div>
    )
}

export default Recaptcha