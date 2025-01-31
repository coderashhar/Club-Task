import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import PreviousEvents from "./PreviousEvents"
import Timeline from "./Timeline"
import { events } from "../constants"
import Footer from "./Footer"
import SponsorsSection from "./SponsorSection"

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <section id="home" className="section" >
                <HeroSection/>
            </section>
            <section id="upcoming-events" className="section">
                <Timeline events={events}/>
            </section>
            <section id="highlights" className="section">
                <PreviousEvents/>
            </section>
            <section id="sponsors" className="section">
                <SponsorsSection/>
            </section>
        </div>
        <Footer/>
        </>
    )

}
