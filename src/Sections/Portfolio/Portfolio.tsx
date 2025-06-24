export default function Portfolio(){
    return(
        <section className="portfolio" id="portfolio">

            <div className="portfolio__options">
                <h2 className="portfolio__title hidden" data-section="portfolio" data-value="title">
                    portafolio
                </h2>
                <ul className="portfolio__list hidden">
                    <li className="portfolio__item front" id="seleccion">Front End</li>
                    <li className="portfolio__item full" id="seleccion">Full Stack</li>
                    <li className="portfolio__item simple" id="seleccion" data-section="portfolio" data-value="option-others">Otros Proyectos</li>
                </ul>
            </div>

            <div className="portfolio__projects">

                {/* PROYECTOS FULL STACK */}

                {/* LUCAMO ( IMPOLUJOS LED ) */}
                <div className="portfolio__project-preview hidden fs">
                    <div className="portfolio__project-top hidden">
                        <span className="portfolio__project-text text-row">
                            Revisar
                        </span>
                        <img src="/images/icons/right_row.svg" alt="Flecha derecha" className="portfolio__project-row flipped" />
                    </div>
                    <div className="portfolio__project-decoration"></div>
                    <img src="/images/lucamo.png" alt="Proyecto IMPOLUJOS LED" className="portfolio__project-image" />
                </div>

                <div className="portfolio__project-info hidden data fe">
                    <h2 className="portfolio__project-title" data-section="portfolio" data-value="project1-title">
                        Lucamo - Proximamente Disponible
                    </h2>
                    <p className="portfolio__project-description" data-section="portfolio" data-value="project1-description">
                        Aún en desarrollo...
                    </p>
                    <ul className="portfolio__project-list">
                        <li className="portfolio__project-item">
                            <a href="#" className="portfolio__project-link signo">
                                +
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="#" className="portfolio__project-link" target="_blank" data-section="portfolio" data-value="project-item-repo">
                                Repositorio
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="#" className="portfolio__project-link" target="_blank">
                                Demo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* PROYECTOS FRONT END  */}

                {/* REACT APP - MI ORGANIZACION  */}
                <div className="portfolio__project-preview hidden fe">
                    <div className="portfolio__project-top hidden">
                        <span className="portfolio__project-text text-row">
                            Revisar
                        </span>
                        <img src="/images/icons/right_row.svg" alt="Flecha derecha" className="portfolio__project-row flipped" />
                    </div>
                    <div className="portfolio__project-decoration"></div>
                    <img src="/images/MiOrganizacion.png" alt="Proyecto Mi organización" className="portfolio__project-image" />
                </div>

                <div className="portfolio__project-info hidden data fe">
                    <h2 className="portfolio__project-title" data-section="portfolio" data-value="project3-title">
                        React App - Mi organización
                    </h2>
                    <p className="portfolio__project-description" data-section="portfolio" data-value="project3-description">
                        Puedes crear nuevos equipos de trabajo, agregar colaboradores según al equipo que pertenezcan, seleccionar tus colaboradores favoritos, eliminar colaboradores y editar las paletas de colores.
                    </p>
                    <ul className="portfolio__project-list">
                        <li className="portfolio__project-item">
                            <a href="#" className="portfolio__project-link signo">
                                +
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="https://github.com/julianddress/React_abstract" className="portfolio__project-link" target="_blank" data-section="portfolio" data-value="project-item-repo">
                                Repositorio
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="https://organization-julian-andres-mottas-projects.vercel.app/" className="portfolio__project-link" target="_blank">
                                Demo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* PROYECTOS SIMPLES */}

                {/* ENCRIPTADOR DE TEXTO - JAVASCRIPT */}
                <div className="portfolio__project-preview hidden sp">
                    <div className="portfolio__project-top hidden">
                        <span className="portfolio__project-text text-row">
                            Revisar
                        </span>
                        <img src="/images/icons/right_row.svg" alt="Flecha derecha" className="portfolio__project-row flipped" />
                    </div>
                    <div className="portfolio__project-decoration"></div>
                    <img src="/images/encriptador.png" alt="Proyecto encriptador" className="portfolio__project-image" />
                </div>

                <div className="portfolio__project-info hidden data sp">
                    <h2 className="portfolio__project-title" data-section="portfolio" data-value="project2-title">
                        Encriptador y Desencriptador de Texto
                    </h2>
                    <p className="portfolio__project-description" data-section="portfolio" data-value="project2-description">
                        Acá podrás enviar y recibir mensajes cifrados de tus amigos o familiares con un solo click, su interfaz es sencilla y práctica, pero sí tienes dudas puedes dar click en el signo + y encontrarás más información al detalle.
                    </p>
                    <ul className="portfolio__project-list">
                        <li className="portfolio__project-item">
                            <a href="#" className="portfolio__project-link signo">
                                +
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="https://github.com/julianddress/encryter" className="portfolio__project-link" target="_blank" data-section="portfolio" data-value="project-item-repo">
                                Repositorio
                            </a>
                        </li>
                        <li className="portfolio__project-item">
                            <a href="https://julianddress.github.io/encryter/" className="portfolio__project-link" target="_blank">
                                Demo
                            </a>
                        </li>
                    </ul>
                </div> 
                
            </div>
        </section>
    )
}