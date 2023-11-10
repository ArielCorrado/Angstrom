const waitAllImagesCharged = () : Promise <boolean> => {
    return new Promise((resolve) => {
        const images = document.querySelectorAll("img");
                
        const checkIfAllImagesCharged = () => {
            const imagesStatus : boolean[] = [];
            images.forEach((image) => {
                image.complete? imagesStatus.push(true) : imagesStatus.push(false);     //Generamos un array de booleanos false: la imagen no se cargó, true: la imagen se cargó
                image.addEventListener("error", () => {                                 //Si alguna imagen no se puede cargar permitimos la visualizacion de todas pero sin chequear
                    resolve(true);                                                      // si estan todas cargadas completamente por no haber un metodo para verificar error en un momento        
                })                                                                      // dado
            })
            if (imagesStatus.every((imageStatus) => imageStatus)) {                     //Si todo el array tiene true es porque ya se cargaron todas las imagenes
                resolve(true);                                                          //El resove(true) es para devolver algo, sino no deja compilar    
            } 
        }

        const waitImagesToCharge = () => {                                              //Cada vez que una imagen se termina de cargar verificaos si se cargaron todas
            images.forEach((image) => {
                image.addEventListener("load", () => {
                    checkIfAllImagesCharged();
                })
            })
        }

        checkIfAllImagesCharged();
        waitImagesToCharge();
        checkIfAllImagesCharged();                                                      //Ponemos esta linea a lo ultimo por si se completaron todas la imagenes 
    })                                                                                  // despues de "checkIfAllImagesCharged" y antes de empezar a cargar eventos "load"
}                                                                                       


export default waitAllImagesCharged;