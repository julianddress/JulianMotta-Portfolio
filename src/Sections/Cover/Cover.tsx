export default function Cover(){
    return(
        
        <section className="cover" id="cover">
            
            <div className="cover__profile">
                <div className="cover__overview">
                    <span className="cover__text-title"
                    data-section="cover" data-value="text-title">
                        ubicado en colombia
                    </span>
                    <h3 className="cover__text" 
                    data-section="cover" data-value="text">
                        Apasionado por la programación, la analítica, el diseño e Innovando para ser diseñador de videojuegos.
                    </h3>
                </div>

                <img src="/images/foto-perfil-background.png" alt="Foto de perfil" className="cover__image hidden" />                

                <div className="cover__greeting">
                    <h1 data-section="cover" data-value="name-h1">
                        Hola, Soy 
                    </h1>
                    <span className="cover__name" data-section="cover" data-value="name-span">
                        <br /> Julian Motta
                    </span>
                    <h3 className="cover__profession" data-section="cover" data-value="profession">Desarrollador Web</h3>
                    <button className="cover__btn-download-cv">
                        <a className="cover__row-text cover__row-image" href="/pdf/JulianMottaResume.pdf" data-section="cover" data-value="btn-text" target="_blank">
                            Descargar CV
                        </a>
                        <a className="cover__row-image" href="/pdf/JulianMottaResume.pdf" target="_blank">
                            <img className="cover__row-link" src="/images/row_cv.png" alt="Visualizar cv" />
                        </a>
                    </button>
                </div>
            </div>

        </section>
    )
}