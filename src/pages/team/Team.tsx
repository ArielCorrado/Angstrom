import "./team.css";
import BgHome from "../../components/bgRule/BgRule";
import CardTeam from "../../cards/cardTeam/CardTeam";
import BgImage from "../../components/bgImage/BgImage";
import { ReactNode, useState } from "react";
import Cv from "../../components/cv/Cv";

function Team() {

    const cvDiegoText = 
    <div className="cvText">
        <p>Mi nombre es Diego Corrado soy un apasionado profesional con una trayectoria de 28 años en el fascinante mundo del dibujo técnico y unos 16 años en la industria del mármol y el granito, así como en el sector de la construcción.</p>
        <p>Mi viaje en el dibujo técnico comenzó hace 28 años, y desde entonces he dedicado mi vida a perfeccionar mis habilidades y adquirir un profundo conocimiento en esta disciplina.</p>
        <p>Mi experiencia abarca una amplia gama de proyectos, desde diseño arquitectónico hasta planos detallados, siempre buscando la excelencia y la precisión en cada trazo.</p>
        <p>Con orgullo, puedo afirmar que he contribuido significativamente a la industria del mármol y el granito durante los últimos 16 años.
           No solo en el dibujo y desarrollo de ingeniería de trabajos complejos si no también en el desarrollo de procesos en base a programas CAD-CAM avanzados.</p>
        <p>Mi experiencia en este sector me ha permitido trabajar en proyectos emocionantes, desde la selección de materiales hasta la planificación y ejecución de instalaciones, brindando soluciones creativas y estéticas a cada desafío.</p>
        <p>Además, he tenido el privilegio de sumar 8 años de experiencia en el mundo de la construcción, donde he participado en diversas empresas, aportando mi experiencia en la coordinación de proyectos y asegurando la implementación exitosa de diseños y conceptos.</p>
        <p>A lo largo de mi carrera, he cultivado un compromiso inquebrantable con la calidad y la eficiencia en cada tarea que emprendo. Mi enfoque no solo se centra en la ejecución técnica, sino también en comprender las necesidades específicas de cada proyecto y cliente, buscando siempre superar expectativas.</p>
        <p>Explora mi portafolio y descubre la fusión única de mi experiencia en dibujo técnico, la industria del mármol y el granito, así como en la construcción.</p>
    </div>
    
    const [showCv, setShowCv] = useState <boolean> (false);
    const [cv, setCv] = useState <ReactNode | null> (null);

    const showCvFunction = (texto: JSX.Element, imgSrc: string) => {
        setShowCv(true);
        setCv(<Cv text={texto} imgSrc={imgSrc} hiddenCvFunction={hiddenCvFunction}/>)
    }

    const hiddenCvFunction = () => {
        setShowCv(false);
        setCv(null);
        window.scrollTo({top: 1});      //Movemos el scroll para que funcione el OoS y aparezcan las cards
        window.scrollTo({top: 0});
    }

    return (
        <div className="seccionToWaitImages">  
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <div className="seccions seccionsWithPadding column flex">
                {
                    !showCv 
                    &&   
                    <>
                        <h1 className="titles">Nuestro Equipo</h1>
                        <div className="teamSeccionCardsCont flex wrap">
                            <CardTeam imgSrc="/images/team/diego.jpg" name="Diego Corrado" position="Dibujante" showCvFunction={() => showCvFunction(cvDiegoText, "/images/team/diego.jpg")}/>
                            <CardTeam imgSrc="/images/team/julia.jpg" name="Julia Dowley" position="Modelista" showCvFunction={() => showCvFunction(cvDiegoText, "/images/team/diego.jpg")}/>
                        </div>
                    </>
                }
                {cv}
                <BgHome/>
            </div>
        </div>
    )
}

export default Team