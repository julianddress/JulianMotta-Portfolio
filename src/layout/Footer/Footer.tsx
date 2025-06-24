export default function Footer(){
    return(
        <footer className="footer">
            <section className="footer-section">
                <div className="footer-container hidden">
                    <span className="logo">JM</span>
                    <p className="copyright">&copy Copyright Julian Motta</p>
                    <div className="social-medias">
                        <a href="https://github.com/julianddress" className="social-media-item" target="_blank">
                            <img src="/images/icons/github.svg" alt="logo github" className="social-media-img" />
                        </a>
                        <a href="https://www.linkedin.com/in/julianddres/" className="social-media-item" target="_blank">
                            <img src="/images/icons/linkedin.svg" alt="logo linkedin" className="social-media-img" />
                        </a>
                        <a href="https://www.instagram.com/julianddres/" className="social-media-item" target="_blank">
                            <img src="/images/icons/instagram.svg" alt="logo instagram" className="social-media-img" />
                        </a>
                    </div>
                </div>
            </section> 
        </footer>
    )
}