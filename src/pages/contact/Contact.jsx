import "./contact.css";
import BgImage from "../../components/bgImage/BgImage";

const Contact = () => {
    
    return (
        <>
            <BgImage imgSrc="/images/backgrounds/contact3b.jpg" classFilter="" classImage="bgImageClassContact"/>
            <div className='seccions seccionsWithPadding seccionToWaitImages seccionContact fadeInTitles1 flex column'>
                <div className="telEmailCont flex wrap">
                    <div className='tel-contacto flex'>
                        <a href="https://wa.me/+5491150961206" target='_blank' rel="noreferrer" className='flex'>
                            <img src="/images/icons/ws2.png" alt="phone" className='imgContactoPhone' />
                            <h2>+549 11 50961206</h2>
                        </a>
                    </div>
                    <div className='email-contacto flex'>
                        <a href="mailto:info@biweb.com.ar" className='flex'>
                            <img src="/images/icons/email2.png" alt="email" className='imgContactoEmail' />
                            <h2>info@angstrom.com.ar</h2>
                        </a>
                    </div>
                </div>
                <div className='contFormContacto flex column'>
                    <form action="" className='form'>
                        <div className='contTituloContacto flex'>
                            <h2 className='titles tituloContacto'>ENVIANOS TU CONSULTA</h2>
                        </div>
                        <input type="text" name="nombre" className='formNom OoS inputForm' placeholder='NOMBRE' />
                        <input type="tel" name="telefono" className='formTel OoS inputForm' placeholder='TELÉFONO' />
                        <input type="email" name="email" className='formEmail OoS inputForm' placeholder='E-MAIL' />
                        <input type="text" name="empresa" className='formEmpresa OoS inputForm' placeholder='EMPRESA' />
                        <textarea type="text" name="mensaje" className='formMsj OoS inputForm' placeholder='MENSAJE' rows="20" cols="45" />
                    </form>
                    <div className='contBotonContacto flex'><button type="button" className='sliderButton boton-contacto'> Enviar </button></div>
                </div>
            </div>
        </>
    );
}

export default Contact;
