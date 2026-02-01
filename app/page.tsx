import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SubHeroNarrative from "@/components/SubHeroNarrative";
import ThinkingFrame from "@/components/ThinkingFrame";
import CareerStats from "@/components/CareerStats";
import ImpactMetrics from "@/components/ImpactMetrics";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { getPersonSchema, getWebsiteSchema } from "@/lib/seo/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={getWebsiteSchema()} />
      <Header />
      <main id="main-content">
        <Hero />
        <SubHeroNarrative />
        <ThinkingFrame />
        <ImpactMetrics />
        <FeaturedCaseStudies />
        <CareerStats />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <div className="section-separator" aria-hidden />
      <Footer />
    </>
  );
}
