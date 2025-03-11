import {
    AboutUs,
    Header,
    Hero,
    OurServices,
    OurPortfolio,
    Testimonial,
    Collaboration,
    Footer,
} from './sections';
import './index.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutUs />
            <OurServices />
            <OurPortfolio />
            <Testimonial />
            <Collaboration />
            <Footer />
        </div>
    );
}

export default App;
