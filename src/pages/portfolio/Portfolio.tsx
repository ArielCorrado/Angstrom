import "./portfolio.css";
import CardImg1 from "../../cards/cardImg1/CardImg1";
import Carousel from "../../components/carousel/Carousel";
import {useState, useEffect} from "react";
import BgImage from "../../components/bgImage/BgImage";
import BgHome from "../../components/bgRule/BgRule";

function Portfolio() {

    const [carousel, setCarousel] = useState <JSX.Element | null> (null);
    
    useEffect(() => {

        const seccionZindexMax = (opc: boolean) => {
            const seccion = document.querySelector(".seccions") as HTMLDivElement;
            opc ?  seccion!.classList.add("zindex1100") : seccion!.classList.remove("zindex1100");
        }

        const showCarousel = (e: Event) => {
            const cardsImgs : NodeListOf<HTMLImageElement> = document.querySelectorAll(".homeCardImg1Img");
            const imgsRoutes : string[] = [];
            cardsImgs.forEach((card) => {
                imgsRoutes.push(card.src);
            });
            const imgSelect = e.target as HTMLDivElement;
            const imgSelectPos = imgSelect.getAttribute("pos");
            setCarousel(<Carousel imgsRoutes={imgsRoutes} imgSelectPos={imgSelectPos!} imgClass="g1ImgsAdjust" closeFunction={() => {setCarousel(null); seccionZindexMax(false)}}/>);
            document.body.style.overflow = "hidden";
        }
        
        const addListenners = () => {
            const cardsImgs = document.querySelectorAll(".homeCardImg1Cont");
            cardsImgs.forEach((card, index) => {
                card.setAttribute("pos", index.toString());
                card.addEventListener("click", (e: Event) => {
                    seccionZindexMax(true);                     /*Como el carousel esta dentro de seccions toma su z-index*/
                    showCarousel(e);                            /* aumentamos el z-index de seccion para que el carousel tape el navbar y el footer*/
                })
            })
        }

        addListenners();
                
    }, []);

    return (
        <div className="seccions seccionToWaitImages seccionsWithPadding flex column">
            {carousel}
            <BgImage imgSrc="/images/backgrounds/bg3.jpg" classImage="bgImageClassTeam" classFilter="bgImageFilterOpacityTeam"/>
            <BgHome/>
            <h1 className="titles portfolioTitle">Portfolio</h1>
            <div className="portfolio2ImgsCont flex wrap">
                <CardImg1 imgSrc="/images/portfolio/1.jpeg" cardClass="portfolioCards OoS" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/portfolio/4.jpeg" cardClass="portfolioCards OoS" text="Ampliar Imagen" />
            </div>
            <div className="portfolio2ImgsCont flex wrap">
                <CardImg1 imgSrc="/images/portfolio/3.jpeg" cardClass="portfolioCards OoS" text="Ampliar Imagen" />
                <CardImg1 imgSrc="/images/portfolio/2.jpeg" cardClass="portfolioCards OoS" text="Ampliar Imagen" />
            </div>
        </div>
    )
}

export default Portfolio