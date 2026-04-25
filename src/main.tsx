import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// GA4 placeholder - measurement ID via env var VITE_GA4_ID
const GA4 = import.meta.env.VITE_GA4_ID;
if (GA4 && typeof window !== "undefined") {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4}`;
  document.head.appendChild(s);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA4);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode><App /></StrictMode>
);
