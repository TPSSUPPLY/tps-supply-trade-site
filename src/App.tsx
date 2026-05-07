import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Trade from "./pages/Trade";
import TradeDetail from "./pages/TradeDetail";
import CreditApplication from "./pages/CreditApplication";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import SameDayPipeDelivery from "./pages/blog/SameDayPipeDelivery";
import PressFittingsVsSweating from "./pages/blog/PressFittingsVsSweating";
import BoilerHydronicSupply from "./pages/blog/BoilerHydronicSupply";
import WholeHouseFiltration from "./pages/blog/WholeHouseFiltration";
import WhyOpenAt7am from "./pages/blog/WhyOpenAt7am";
import Top10PlumbingTools from "./pages/blog/Top10PlumbingTools";
import Contact from "./pages/Contact";
import InstallGuides from "./pages/InstallGuides";
import GeoCity from "./pages/GeoCity";
import NotFound from "./pages/NotFound";
import { CITIES } from "./data/site";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/trade/:slug" element={<TradeDetail />} />
            <Route path="/credit-application" element={<CreditApplication />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/same-day-pipe-delivery-morris-county-nj" element={<SameDayPipeDelivery />} />
            <Route path="/blog/press-fittings-vs-sweating-propress-megapress-propex" element={<PressFittingsVsSweating />} />
            <Route path="/blog/boiler-hydronic-heating-supply-northern-nj" element={<BoilerHydronicSupply />} />
            <Route path="/blog/whole-house-water-filtration-morris-county" element={<WholeHouseFiltration />} />
            <Route path="/blog/why-pros-open-7am-tps-supply-counter" element={<WhyOpenAt7am />} />
            <Route path="/blog/top-10-plumbing-tools-pro-2026" element={<Top10PlumbingTools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/install-guides" element={<InstallGuides />} />
            {CITIES.map(c => (
              <Route key={c.slug} path={`/plumbing-supply-${c.slug}-nj`} element={<GeoCity citySlug={c.slug} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
