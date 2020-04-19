import React from "react";
// import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
// import FeatureSection from "./components/FeatureSection";
// import TeamsSection from "./components/TeamsSection";
// import PricingSection from "./components/PricingSection";
// import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
import FooterAlt from "./components/FooterAlt";
// import ProductSection from "./components/Product";

class Layout extends React.Component {
  componentDidMount() {
    document.getElementById("main_navbar").classList.add("navbar-light");
  }

  render() {
    return (
      <React.Fragment>
        {/* preloader */}
        {/* <Preloader /> */}

        {/* Navigation Menu */}
        <Navbar />

        {/* HomeSection Menu */}
        <Home />

        {/* ServiceSection Menu */}
        <ServiceSection />

        {/* AboutSection Menu */}
        <AboutSection />

        {/* FeatureSection Menu */}
        {/* <FeatureSection /> */}

        {/* PricingSection Menu */}
        {/* <PricingSection /> */}

        {/* TeamsSection Menu */}
        {/* <TeamsSection /> */}

        {/* BlogSection Menu */}
        {/* <BlogSection /> */}
        {/*<ProductSection />*/}

        {/* ContactSection Menu */}
        <ContactSection />

        {/* Footer Menu */}
        {/* <Footer /> */}

        {/* FooterAlt Menu */}
        <FooterAlt />
      </React.Fragment>
    );
  }
}

export default Layout;
