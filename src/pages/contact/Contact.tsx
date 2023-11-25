import "./contact.css";
import BgImage from "../../components/bgImage/BgImage";
import { useRef, useContext, useState, ReactNode } from "react";
import "./contact.css";
import { SpinnerContext } from "../../context/spinnerContext";
import { swalPopUp } from "../../utils/swal";
import Recaptcha from "../../components/recaptcha/Recaptcha";

type formValues = {
    nombre: string;
    telefono: string;
    email: string;
    empresa: string;
    mensaje: string;
}

const Contact = () => {

    const [captcha, setCaptcha] = useState <ReactNode | null> (null);
    const {showSpinner} = useContext(SpinnerContext)
    const formRef = useRef <HTMLFormElement | null> (null);
            
    const validateForm = async () => {
                            
        const formData = new FormData(formRef.current as HTMLFormElement);
        const data = Object.fromEntries(formData) as formValues;

        if (data.nombre.trim() !== "" && data.telefono.trim() !== "" && data.email.trim() !== "" && data.empresa.trim() !== "" && data.mensaje.trim() !== "") {

            setCaptcha(
                <Recaptcha 
                    callBackFunction={sendForm} 
                    closeCaptcha={() => setCaptcha(null)}
                />
            )

        } else {
            swalPopUp("Ops!", "Falta Ingresar Algún Dato", "warning");       
        }
    }    

    const sendForm = async () => {

        setCaptcha(null)

        const formData = new FormData(formRef.current as HTMLFormElement);
        const data = Object.fromEntries(formData) as formValues;

        try {
            showSpinner(true);
            const respJSON = await fetch ("/sendmail.php", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const respOBJ = await respJSON.json();
            showSpinner(false);
            if (respOBJ.msg.includes("Error")) {
                swalPopUp("Ops!", `${respOBJ.msg}, Intente otra vez`, "error");
            } else {
                const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputsForm");
                inputs.forEach((input) => input.value = "");
                // contactAds();           //Llamada a funcion de conversion de google ads
                swalPopUp("Enviado!", "Mensaje enviado con éxito, gracias por contactarnos!", "success");
            } 
            
        } catch (err: unknown) {
            showSpinner(false); 
            swalPopUp("Ops!", err instanceof Error ? `Error al enviar el mensaje: ${err.message}` : `Error al enviar el mensaje: problema desconocido`, "error");
        }
    }
          
    return (
        <>
            {captcha}
            <div className="seccionToWaitImages">
                <BgImage imgSrc="/images/backgrounds/contact3b.jpg" classFilter="" classImage="bgImageClassContact"/>
                <div className='seccions seccionsWithPadding seccionContact OoSwF flex column'>
                    <div className="telEmailCont flex wrap">
                        <div className='tel-contacto flex'>
                            <a href="https://wa.me/+5491150961206" target='_blank' rel="noreferrer" className='flex'>
                                <img src="/images/icons/ws2.png" alt="phone" className='imgContactoPhone' />
                                <h2>+549 11 50961206</h2>
                            </a>
                        </div>
                        <div className='email-contacto flex'>
                            <a href="mailto:info@angstrom.com.ar" className='flex'>
                                <img src="/images/icons/email2.png" alt="email" className='imgContactoEmail' />
                                <h2>info@angstrom.com.ar</h2>
                            </a>
                        </div>
                    </div>
                    <div className='contFormContacto flex column'>
                        <form action="" className='form' ref={formRef}>
                            <div className='contTituloContacto flex'>
                                <h2 className='titles tituloContacto'>ENVIANOS TU CONSULTA</h2>
                            </div>
                            <input type="text" name="nombre" className='formNom OoS inputForm' placeholder='NOMBRE' />
                            <input type="tel" name="telefono" className='formTel OoS inputForm' placeholder='TELÉFONO' />
                            <input type="email" name="email" className='formEmail OoS inputForm' placeholder='E-MAIL' />
                            <input type="text" name="empresa" className='formEmpresa OoS inputForm' placeholder='EMPRESA' />
                            <textarea name="mensaje" className='formMsj OoS inputForm' placeholder='MENSAJE' rows={20} cols={45} />
                        </form>
                        <div className='contBotonContacto flex'><button type="button" className='sliderButton boton-contacto' onClick={validateForm}> Enviar </button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
