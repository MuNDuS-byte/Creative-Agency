import {
    AboutUs,
    Header,
    Hero,
    OurServices,
    OurPortfolio,
    Testimonial,
    Collaboration,
    Footer,
} from './sections'
import './index.scss'

function App() {
    return (
        <main className="App">
            <Header />
            <Hero />
            <section>
                <AboutUs />
                <OurServices />
                <OurPortfolio />
                <Testimonial />
                <Collaboration />
            </section>
            <Footer />
        </main>
    )
}

export default App
