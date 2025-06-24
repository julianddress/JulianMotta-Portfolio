import Header from "@/layout/Header/Header"
import About from "@/Sections/About/About"
import Cover from "@/Sections/Cover/Cover" 
import Portfolio from "@/Sections/Portfolio/Portfolio"
import Contact from "@/Sections/Contact/Contact"
import Footer from "@/layout/Footer/Footer"

export default function HomePage() {
    return <>
    
            <Header />
                <Cover />
                <About />
                <Portfolio />
                <Contact />
            <Footer />
    
    </>
}
