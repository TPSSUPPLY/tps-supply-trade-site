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
import Blog, { BlogPost } from "./pages/Blog";
import Contact from "./pages/Contact";
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
            <Route path="/blog/welcome" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
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
