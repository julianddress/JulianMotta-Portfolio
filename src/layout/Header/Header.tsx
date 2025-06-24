export default function Header() {
    return (
        
        <header>
            <nav className="menu">
                <div className="menu__contenido">
                    <span className="menu__logo">JM</span>
                    <div className="menu__options">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#cover" className="menu__item-link" 
                                data-section="menu" data-value="item-inicio"
                                >Inicio</a>
                            </li>
                            <li className="menu__item separador">|</li>
                            <li className="menu__item">
                                <a href="#about" className="menu__item-link"
                                data-section="menu" data-value="item-sobre-mi"
                                >Sobre mi</a>
                            </li>
                            <li className="menu__item separador">|</li>
                            <li className="menu__item">
                                <a href="#portfolio" className="menu__item-link"
                                data-section="menu" data-value="item-portafolio"
                                >Portafolio</a>
                            </li>
                            <li className="menu__item separador">|</li>
                            <li className="menu__item">
                                <a href="#contact" className="menu__item-link" 
                                data-section="menu" data-value="item-contacto"
                                >Contacto</a>
                            </li>
                        </ul>
                        <div className="menu__idiomas" data-language="es">
                            <img src="/images/lenguaje_espanol.png" alt="Idioma español" className="menu__img-es" />
                        </div>
                        <div className="menu__idiomas" data-language="en">
                            <img src="/images/lenguaje_ingles.png" alt="Idioma ingles" className="menu__img-en" />
                        </div>
                    </div>
                    <img src="/images/icons/menu.svg" alt="Icono del menu" className="menu__bar-img" />
                </div>
            </nav>
        </header>
        
    )
}