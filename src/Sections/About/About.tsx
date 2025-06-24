

export default function About(){
    return(
        <section className="about" id="about">
            <div className="about__features">
                <img className="about__image hidden" src="/images/foto_portada.png" alt="Foto perfil 2" />
                <div className="about__info">
                    <ul className="about__list">
                        <li className="about__items one" data-section="about" data-value="item-sistemas">
                            Ingeniero en Sistemas en Proceso de Titulación
                        </li>
                        <li className="about__items two" data-section="about" data-value="item-desarrollador">
                            Desarrollador Front-End con experiencia Freelance
                        </li>
                        <li className="about__items three" data-section="about" data-value="item-tecnico">
                            Experiencia en Metodologías Ágiles y Scrum
                        </li>
                    </ul>
                </div>
            </div>

            <div className="about__description">
                <h2 className="about__title" data-section="about" data-value="item-titulo">
                    sobre mi
                </h2>
                <p className="about__resume" data-section="about" data-value="item-resumen">
                    Proximo ingenierio en sistemas enfocado en el desarrollo de software, esta industria es mi principal herramienta para adquirir conocimiento tanto en programación como en la experiencia de usuario. Acá encontrarás proyectos relevantes que he desarrollado para personas e incluso empresas de distintas áreas del mercado laboral.
                </p>
            </div>
        </section>
    )
}