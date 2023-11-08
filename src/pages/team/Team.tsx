import "./team.css";
import BgHome from "../../components/bgRule/BgRule";
import CardTeam from "../../cards/cardTeam/CardTeam";
import BgImage from "../../components/bgImage/BgImage";

function Team() {
    return (
        <>  
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="" classFilter="bgImageFilterOpacityTeam"/>
            <div className="seccions seccionsWithPadding seccionToWaitImages column flex">
                <h1 className="titles fadeInTitles1">Nuestro Equipo</h1>
                <div className="teamSeccionCardsCont flex wrap">
                    <CardTeam imgSrc="/images/team/diego.jpg" name="Diego Corrado" position="Dibujante"/>
                    <CardTeam imgSrc="/images/team/julia.jpg" name="Julia Dowley" position="Modelista"/>
                </div>
                <BgHome/>
            </div>
        </>
    )
}

export default Team