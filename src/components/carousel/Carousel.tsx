import React, { useState, useEffect, useRef } from 'react';
import "./carousel.css";

const Carousel = (props: {imgsRoutes: string[], imgSelectPos: string, imgClass: string, closeFunction: () => void}) => {
    
    const [imgPos, setimgPos] = useState <number> (parseInt(props.imgSelectPos));
    const imgPosRef = useRef(imgPos);       //Usamos ref sino el carousel falla al cambiar imagenes con el touch. En el codigo sin ref los eventos touch llaman a la funcion
                                            // "nextImage" con un valor de "imgPos" que no es el actual 
    useEffect(() => {                       //Seteamos eventos touch
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
            } else if (Ax < -50 && Ay < 100) {
                nextImage(true);
            }
        }

        elemento?.addEventListener("touchstart", start);
        elemento?.addEventListener("touchend", end);
        // eslint-disable-next-line
    }, []);

    const imgPosAdjust = (pos: number) => {                  //Corrije la posicion en el array de rutas de imagenes por si salimos se los limites
        if (pos >= props.imgsRoutes.length) return 0;
        if (pos < 0) return props.imgsRoutes.length - 1;
        return pos;
    }

    const resetImages = (opc: boolean) => {                 
        const imgs : NodeListOf<HTMLImageElement> = document.querySelectorAll(".carouselImg");
        imgs.forEach((img) => {                             //Evita que por un instante cambie la imagen del centro al hacer "clearAnimations();"
            opc ? img.src = props.imgsRoutes[imgPosAdjust(imgPosRef.current + 1)] : img.src = props.imgsRoutes[imgPosAdjust(imgPosRef.current - 1)];
        })
        clearAnimations();
        setPos(opc)
    }

    const waitAnimationsAsync2 = (opc:boolean) => {         //Esperamos a que la animacion actual se termine para poder pasar las imagenes nuevamente
        return new Promise((resolve) => {
            const animations = document.querySelector(".carouselCont")?.getAnimations({subtree: true});
            const animationsCount = animations?.length;
            let count = 0;
            animations?.forEach((animation) => {
                if(animation.playState === "finished") {
                    count ++
                    if (count >= animationsCount!) resolve(resetImages(opc));
                } else if (animation.playState === "running") {
                    animation.addEventListener("finish", () => {
                        count ++;
                        if (count >= animationsCount!) resolve(resetImages(opc));
                    });
                }
            });
        })
    }

    const waitAnimationsAsync = () => {                    //Esperamos a que la animacion anterior se termine para poder pasar las imagenes nuevamente
        return new Promise((resolve) => {
            const animations = document.querySelector(".carouselCont")?.getAnimations({subtree: true});
            const animationsCount = animations?.length;
            let count = 0;
            animations?.forEach((animation) => {
                if(animation.playState === "finished") {
                    count ++
                    if (count >= animationsCount!) resolve(true);
                } else if (animation.playState === "running") {
                    animation.addEventListener("finish", () => {
                        count ++;
                        if (count >= animationsCount!) resolve(true);
                    });
                }
            });
        })
    }

    const setPos = (opc: boolean) => {
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

    const disableScreen = () => {
        document.body.classList.add("disableScreen")
    }

    const enableSacreen = () => {
        document.body.classList.remove("disableScreen")
    }
 
    const nextImage = async (opc: boolean) => {
        disableScreen();
        await waitAnimationsAsync();
        const centerImg = document.querySelector(".carouselCenterImg") as HTMLImageElement;
        const leftImg = document.querySelector(".carouselLeftImg") as HTMLImageElement;
        const rightImg = document.querySelector(".carouselRightImg") as HTMLImageElement;
        centerImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOp");
        if (opc) {
            rightImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOp");
            centerImg.classList.add("carouselOpOff", "moveCenterToLeft", "transitionOp");
            rightImg.classList.add("carouselOpOn", "moveRightToCenter", "transitionOp");
        } else {
            leftImg.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOp");
            centerImg.classList.add("carouselOpOff", "moveCenterToRight", "transitionOp");
            leftImg.classList.add("carouselOpOn", "moveLeftToCenter", "transitionOp");
        } 
        await waitAnimationsAsync2(opc);
        enableSacreen();
    }
        
    const clearAnimations = () => {
        const imgs = document.querySelectorAll(".carouselImg");
        imgs.forEach((img) => {
            img.classList.remove("carouselOpOn", "carouselOpOff", "moveLeftToCenter", "moveRightToCenter", "moveCenterToRight", "moveCenterToLeft", "transitionOp");
        });
    }
    
    useEffect(() => {
        if (typeof imgPos === "number") imgPosRef.current = imgPos;                    
        //eslint-disable-next-line
    }, [imgPos]);
             
    return (
        <div className='carouselCont flex'>
            <img src="/images/icons/close.png" className='cvCloseIcon carouselCloseIcon' alt="Exit Icon" onClick={() => {props.closeFunction(); document.body.style.overflow = "initial"}}/>
            <img src="/images/icons/next.png" className='controlIcon carouselNextIcon' alt="Next Icon" onClick={() => nextImage(true)}/>
            <img src="/images/icons/next.png" className='controlIcon carouselPrevIcon' alt="Prev Icon" onClick={() => nextImage(false)}/>
            <img src={props.imgsRoutes[imgPosAdjust(imgPos - 1)]} className={`carouselImg carouselLeftImg ${props.imgClass}`} alt="Carousel Img" />
            <img src={props.imgsRoutes[imgPos]} className={`carouselImg carouselCenterImg ${props.imgClass}`} alt="Carousel Img" />
            <img src={props.imgsRoutes[imgPosAdjust(imgPos + 1)]} className={`carouselImg carouselRightImg ${props.imgClass}`} alt="Carousel Img" />
        </div>        
    );
}

export default Carousel;
