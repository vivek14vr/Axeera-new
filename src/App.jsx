import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
// Pricing detail pages
import WebPricing from "./pages/pricing/WebPricing";
import AppPricing from "./pages/pricing/AppPricing";
import SEOPricing from "./pages/pricing/SEOPricing";
import PaymentPopup from "./pages/PaymentPopup";

// Service pages
import SEO from "./services/SEO";
import CRO from "./services/CRO";
import PPC from "./services/PPC";
import Ui_Ux from "./services/Ui_Ux";
import Virtual_Assistant from "./services/Virtual_Assistant";
import Web_Design from "./services/Web_Design";
import SocialMedia from "./services/SocialMedia";
import ORM from "./services/ORM";
import MobileApp from "./services/MobileApp";
import Software_Development from "./services/Software_Development";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/services" element={<Services />} />
      {/* Pricing detail routes */}
      <Route path="/pricing/web" element={<WebPricing />} />
      <Route path="/pricing/app" element={<AppPricing />} />
      <Route path="/pricing/seo" element={<SEOPricing />} />
      <Route path="/payment" element={<PaymentPopup />} />
      <Route path="/faq" element={<FAQ />} />
      
      {/* Service Routes */}
      <Route path="/services/seo" element={<SEO />} />
      <Route path="/services/ppc" element={<PPC />} />
      <Route path="/services/cro" element={<CRO />} />
      <Route path="/services/ui_ux" element={<Ui_Ux />} />
      <Route path="/services/virtual_assistant" element={<Virtual_Assistant />} />
      <Route path="/services/web_design" element={<Web_Design />} />
      <Route path="/services/social_media" element={<SocialMedia />} />
      <Route path="/services/orm" element={<ORM />} />
      <Route path="/services/mobile_app" element={<MobileApp />} />
      <Route path="/services/software_development" element={<Software_Development />} />
    </Routes>
  );
}

export default App;
