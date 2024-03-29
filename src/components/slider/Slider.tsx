import "./slider.css";
import BgHome from "../bgRule/BgRule";
import BgImage from "../bgImage/BgImage";
import { Link } from "react-router-dom";

function Slider() {
    return (
        <>
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <div className="sliderHome flex">
                <BgHome/>
                <div className="sliderTextsCont flex column"></div>
                <div className="sliderImgsCont">
                    <img src="/images/blueprints/bp4.png" alt="Angstrom blueprint" className='sliderImg1 sliderImg1_AnimationOnEnter'/>
                    <img src="/images/home/3b.jpg" alt="Angstrom team" className='sliderImg2 opacityOnCharge animation_duration250'/>
                    <img src="/images/logos/compas.png" alt="Angstrom compas" className="sliderImgCompas opacityOnCharge animation_duration250"/>
                </div>
                <div className="sliderTextsCont flex column"> 
                    <div className="sliderTextsCont2 flex column">
                        <p className="sliderText1 sliderTexts_AnimationOnEnter">Angström</p>
                        <p className="sliderText2 sliderTexts_AnimationOnEnter animation_delay025">Técnica</p>
                        <p className="sliderText3 sliderTexts_AnimationOnEnter animation_delay050">Somos una consultora de <br />documentación técnica <br />de la industria de la <br />construcción</p>
                        <Link to="/portfolio"><button className="sliderButton sliderTexts_AnimationOnEnter animation_delay075 flex">Conocer más</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider