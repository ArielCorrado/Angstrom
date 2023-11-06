import "./slider.css";

function Slider() {
    return (
        <div className="sliderHome flex">
            <div className="sliderTextsCont flex column"></div>
            <div className="sliderImgsAndTextCont">
                <img src="/images/blueprints/bp4.png" alt="Angstrom blueprint" className='sliderImg1'/>
                <img src="/images/home/3b.jpg" alt="Angstrom team" className='sliderImg2'/>
                <img src="/images/logos/compas.png" alt="Angstrom compas" className="sliderImgCompas"/>
            </div>
            <div className="sliderTextsCont flex column"> 
                <div className="sliderTextsCont2 flex column">
                    <p className="sliderText1">Angstrom</p>
                    <p className="sliderText2">Técnica</p>
                    <p className="sliderText3">Somos una consultora de <br />documentacion técnica <br />de la industria de la <br />construcción</p>
                    <button className="sliderButton flex">Conocer más</button>
                </div>
            </div>
        </div>
    )
}

export default Slider