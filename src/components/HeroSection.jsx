import { BackgroundCircles } from "../design/Hero";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center mt-6 lg:mt-20">
      <div className="absolute inset-0">
        <BackgroundCircles />
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-15 mb-10 z-10">
        Unleash Your Potential at our{" "}
        <span className="bg-gradient-to-r from-sky-500 to-indigo-700 text-transparent bg-clip-text">
          Upcoming Events
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mb-20 z-10 pb-10">
        Dive into a world of innovation and collaboration. Explore exciting
        workshops, tech talks, and networking opportunities with passionate
        individuals. Let’s shape the future together!
      </p>
      <div className="flex justify-center mt-5 mb-20 z-10">
        <a
          id="button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPDU7xdWwZ4FowMcWQEWELt7TUkQmfCIS2koFG30AJS_RHNw/viewform?usp=header"
          className="bg-gradient-to-r from-sky-500 to-indigo-700 py-3 px-4 mx-3 rounded-md"
        >
          Register Now
        </a>
        <Link 
          to="upcoming-events"
          smooth={true} 
          duration={500}
          offset={-110}
          id="button"
          className="py-3 px-4 mx-3 rounded-md border bg-black">
            View Schedule
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
