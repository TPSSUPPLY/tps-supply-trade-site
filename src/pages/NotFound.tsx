import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="container-x py-32 text-center">
        <h1 className="font-serif text-7xl font-bold text-brand-blue">404</h1>
        <p className="mt-4 text-brand-charcoal">That page doesn't exist. Try the home page or call the counter.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="btn-primary">Home</Link>
          <a href="tel:+19735383662" className="btn-outline">Call 973-538-3662</a>
        </div>
      </section>
    </>
  );
}
