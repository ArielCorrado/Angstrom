import React, { useState, useEffect, useRef } from 'react';
import "./carousel.css";

const Carousel = (props: {imgsRoutes: string[], imgSelectPos: string, imgClass: string, closeFunction: () => void}) => {
    
    const [imgSrc, setImgSrc] = useState <string> (props.imgsRoutes[parseInt(props.imgSelectPos)]);
    const [imgPos, setimgPos] = useState <number> (parseInt(props.imgSelectPos));
    const imgPosRef = useRef(imgPos);
   
    useEffect(() => {
                            
        /*********************************************************************/
        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;
        const elemento: HTMLElement | null = document.querySelector(".seccions");
        const start = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }

        const end = (e: TouchEvent) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            const Ax = endX - startX;
            const Ay = Math.abs(endY - startY);
            if (Ax > 50 && Ay < 100) {
                nextImage(false);
                // console.log("prev")
            } else if (Ax < -50 && Ay < 100) {
                nextImage(true);
                // console.log("next")
            }
        }

        elemento?.addEventListener("touchstart", start);
        elemento?.addEventListener("touchend", end);

        /*********************************************************************/
        
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (typeof imgPos === "number") {
            setImgSrc(props.imgsRoutes[imgPos]);
            imgPosRef.current = imgPos;
        }
    }, [imgPos])   

    const nextImage = (opc: boolean) => {
        if (opc) {
            if (imgPosRef.current === props.imgsRoutes.length - 1) {
                setimgPos(0);
                
            } else {
                setimgPos(imgPosRef.current + 1);
                
            }  
        } else {
            if (imgPosRef.current === 0) {
                setimgPos(props.imgsRoutes.length - 1);
                
            }  else {
                setimgPos(imgPosRef.current - 1);
                
            }
        }
    }    
    
    useEffect(() => {
        if (imgSrc) {
            const img = document.querySelector(".carouselActualImg") as HTMLImageElement;
            img.classList.remove("opacityOnCharge");
            setTimeout(() => {
                img.classList.add("opacityOnCharge");
            }, 100);
        }
       
        //eslint-disable-next-line
    }, [imgSrc]);
             
    return (
        <div className='carouselCont flex'>
            <img src="/images/icons/close.png" className='cvCloseIcon carouselCloseIcon' alt="Exit Icon" onClick={() => {props.closeFunction(); document.body.style.overflow = "initial"}}/>
            <img src="/images/icons/next.png" className='carouselNextIcon' alt="Next Icon" onClick={() => nextImage(true)}/>
            <img src="/images/icons/next.png" className='carouselPrevIcon' alt="Prev Icon" onClick={() => nextImage(false)}/>
            <img src={imgSrc!} className={`carouselActualImg ${props.imgClass}`} alt="Carousel Img" />
        </div>        
    );
}

export default Carousel;
