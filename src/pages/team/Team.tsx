import "./team.css";
import BgHome from "../../components/bgHome/BgHome";
import CardTeam from "../../cards/cardTeam/CardTeam";

function Team() {
    return (
        <div className="seccions seccionsWithPadding teamSeccion opacityOnCharge column flex">
            <h1 className="titles">Nuestro Equipo</h1>
            <div className="teamSeccionCardsCont flex wrap">
                <CardTeam imgSrc="/images/team/diego.jpg" name="Diego Corrado" position="Dibujante"/>
                <CardTeam imgSrc="/images/team/julia.jpg" name="Julia Dowley" position="Modelista"/>
            </div>
            <BgHome/>
        </div>
    )
}

export default Team