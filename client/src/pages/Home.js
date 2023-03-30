import { useRef, useEffect } from "react";
import Header from "../components/home-page/Header";
import Sections from "../components/home-page/Sections";

const Home = function () {
    
    const headerRef = useRef(null);
     
    // const scroller = function (e) {
    //    e.preventDefault();
    //    const id = e.target.getAttribute("href");
    //    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    //  };

    useEffect(() => {
    
    const nav = headerRef.current.children[0]
    const navHeight = nav.getBoundingClientRect().height;
  
        const obsCallBack = function (entries, observer) {
        entries.forEach((entry) =>
        !entry.isIntersecting ? nav.classList.add('sticky') : nav.classList.remove('sticky'),
        );
    };
    
      
  
  const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: - navHeight + 'px'
  };

      const header = headerRef.current
    const headerObserver = new IntersectionObserver(obsCallBack, obsOptions);
    if (header) {
        headerObserver.observe(header);
    }
    return () => {
      if (header) {
        headerObserver.unobserve(header);
      }
    };
  }, []);

  return (
    <>
      <Header ref={headerRef }  />
      <Sections />
      
    </>
  );
};

export default Home;
