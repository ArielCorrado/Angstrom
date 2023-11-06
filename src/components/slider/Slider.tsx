import "./slider.css";

function Slider() {
    return (
        <div className="sliderHome flex">
            <div className="sliderTextsCont sliderTextsContIzq flex column"></div>
            <div className="sliderImgsCont">
                <img src="/images/blueprints/bp4.png" alt="Angstrom blueprint" className='sliderImg1 sliderImg1_AnimationOnEnter'/>
                <img src="/images/home/3b.jpg" alt="Angstrom team" className='sliderImg2 sliderImg2_AnimationOnEnter'/>
                <img src="/images/logos/compas.png" alt="Angstrom compas" className="sliderImgCompas sliderImgCompas_AnimationOnEnter"/>
            </div>
            <div className="sliderTextsCont flex column"> 
                <div className="sliderTextsCont2 sliderTextsCont2_AnimationOnEnter flex column">
                    <p className="sliderText1">Angström</p>
                    <p className="sliderText2">Técnica</p>
                    <p className="sliderText3">Somos una consultora de <br />documentación técnica <br />de la industria de la <br />construcción</p>
                    <button className="sliderButton flex">Conocer más</button>
                </div>
            </div>
        </div>
    )
}

export default Slider