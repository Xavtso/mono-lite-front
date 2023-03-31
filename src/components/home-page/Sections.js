
import Features from "./Features";
import '../../styles/home-page/Sections.css'
import Operations from "./Operations";
import Testimonial from './Testimonial';
import Footer from './Footer';


const Sections = function () {

    
    return (
        <>
        <Features/>
            <Operations />
            <Testimonial />
            <Footer></Footer>
        </>
        

    )
}

export default Sections;