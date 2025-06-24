export default function Contact(){
    return(
        
        <section className="contact" id="contact">

            <div className="circle-right"></div>
            <div className="circle-left"></div>

            <h2 className="contact__title hidden" data-section="contact" data-value="title">
                contacto
            </h2>
            <div className="contact__content">
                <div className="contact__media">
                    <h3 className="contact__subtitulo hidden" data-section="contact" data-value="mensaje1">
                        dejame un mensaje
                    </h3>
                    <span className="contact__parrafo hidden" data-section="contact" data-value="mensaje2">
                        Para procesos de contratación o proyectos personales no dudes en contactarme.
                    </span>
                    <ul className="contact__list">
                        <li className="contact__item hidden">
                            <a href="https://wa.me/573022478310?text=Hola!,%20me%20gustar%C3%ADa%20que%20pudieramos%20hablar%20sobre%20tu%20trabajo%20como%20desarrollador." target="_blank">
                                <img src="/images/icons/whatsapp.svg" alt="Icono de whatsapp" className="contact__icon" />
                            </a>
                            <span className="contact__icon-text">
                                Whatsapp
                            </span>
                        </li>
                        <li className="contact__item hidden">
                            <a href="mailto:andres.mtta1@gmail.com" target="_blank">
                                <img src="/images/icons/email.svg" alt="Icono de email" className="contact__icon" />
                            </a>
                            <span className="contact__icon-text" data-section="contact" data-value="icono-email">
                                Redactar Correo
                            </span>
                        </li>
                        <li className="contact__item hidden">
                            <a href="tel:+373022478310" target="_blank">
                                <img src="/images/icons/phone.svg" alt="Icono de un celular" className="contact__icon" />
                            </a>
                            <span className="contact__icon-text" data-section="contact" data-value="icono-phone">
                                Llamar
                            </span>
                        </li>
                    </ul>
                </div>

                <form action="" className="form hidden">
                    <fieldset>
                        <div className="input-container">
                            <input name="name" id="name" className="input" type="text" placeholder="Nombre" required data-tipo="nombre" />
                            <label className="input-label" htmlFor="name" data-section="form" data-value="label-name">
                                Nombre
                            </label>
                            <span className="input-message-error">Este campo no es valido</span>
                            {/* <span className="input-message-error">Este campo no es valido</span> */}
                        </div>
                        <div className="input-container">
                            <input name="email" id="email" className="input" type="email" placeholder="Email" required data-tipo="email" />
                            <label className="input-label" htmlFor="email">Email</label>
                            <span className="input-message-error">Este campo no es valido</span>
                            {/* <span className="input-message-error">Este campo no es valido</span> */}
                        </div>
                        <div className="input-container textarea">
                            <textarea name="mensaje" id="mensaje" className="input mensaje" placeholder="Mensaje" required data-tipo="mensaje"></textarea>
                            <label className="input-label" htmlFor="mensaje" data-section="form" data-value="label-mensaje">
                                Mensaje
                            </label>
                            <span className="input-message-error">Este campo no es valido</span>
                            {/* <span className="input-message-error">Este campo no es valido</span>  */}
                        </div>
                        <button type="button" className="contact__btn" data-section="form" data-value="btn-enviar" id="btn-enviar">
                            Enviar
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}