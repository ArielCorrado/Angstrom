import "./contact.css";
import Footer from "../../components/footer/Footer";
import BgHome from "../../components/bgHome/BgHome";

const Contact = () => {
    
    return (
        <>
            <div className='seccions seccionsWithPadding seccionToWaitImages flex'>
                <BgHome/>
                <div className='contFormContacto flex column'>
                    <form action="" className='form'>
                        <div className='tel-contacto fadeInTitles1 flex'>
                            <a href="https://wa.me/+5491150961206" target='_blank' rel="noreferrer" className='flex'>
                                <img src="/images/icons/ws.png" alt="phone" className='imgContactoPhone'/>
                                <h2>+54 9 11 50961206</h2>
                            </a>
                        </div>
                        <div className='email-contacto flex OoS'>
                            <a href="mailto:info@biweb.com.ar" className='fadeInTitles1 flex'>
                                <img src="/images/icons/email.png" alt="email" className='imgContactoEmail'/>
                                <h2>info@angstrom.com.ar</h2>
                            </a>
                        </div>
                        <div className='contTituloContacto flex'>
                            <h2 className='tituloContacto fadeInTitles1'>ENVIANOS TU CONSULTA</h2>
                        </div>
                        <input type="text" name="nombre" className='formNom OoS inputForm' placeholder='NOMBRE'/>
                        <input type="tel" name="telefono" className='formTel OoS inputForm' placeholder='TELÉFONO'/>
                        <input type="email" name="email" className='formEmail OoS inputForm' placeholder='E-MAIL'/>
                        <input type="text" name="empresa" className='formEmpresa OoS inputForm' placeholder='EMPRESA'/>
                        <textarea type="text" name="mensaje" className='formMsj OoS inputForm' placeholder='MENSAJE' rows="20" cols="45"/>
                    </form>
                    <div className='contBotonContacto flex'><button type="button" className='sliderButton boton-contacto'> Enviar </button></div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
