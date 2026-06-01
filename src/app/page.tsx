"use client";

import { PageProvider, usePage } from "@/lib/page-context";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingActions from "@/components/shared/FloatingActions";
import ProjectDrawer from "@/components/overlays/ProjectDrawer";
import UGCDrawer from "@/components/overlays/UGCDrawer";
import CareersDrawer from "@/components/overlays/CareersDrawer";

// Home sections
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import UGCVideos from "@/components/sections/UGCVideos";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";

import HowWeWork from "@/components/sections/HowWeWork";
import ProcessComparison from "@/components/sections/ProcessComparison";
import BuyerJourney from "@/components/sections/BuyerJourney";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

// Feature blocks
import { Features9 } from "@/components/blocks/features-9";

// Inner pages
import AboutPage from "@/components/pages/AboutPage";
import ServicesPage from "@/components/pages/ServicesPage";
import CaseStudiesPage from "@/components/pages/CaseStudiesPage";
import BlogPage from "@/components/pages/BlogPage";
import CareersPage from "@/components/pages/CareersPage";
import ContactPage from "@/components/pages/ContactPage";
import PrivacyPage from "@/components/pages/PrivacyPage";
import TermsPage from "@/components/pages/TermsPage";
import BlogDetailPage from "@/components/pages/BlogDetailPage";
import ServiceDetailPage from "@/components/pages/ServiceDetailPage";
import SitemapPage from "@/components/pages/SitemapPage";
import ErrorPage from "@/components/pages/ErrorPage";
import ThankYouPage from "@/components/pages/ThankYouPage";
import CaseStudyDetailPage from "@/components/pages/CaseStudyDetailPage";
import UGCPage from "@/components/pages/UGCPage";

import dynamic from "next/dynamic";

function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <LogoMarquee />
      <About />
      <Services />
      <Methodology />
      <UGCVideos />
      <CaseStudies />
      <WhyChooseUs />
      <Stats />

      <Features9 />
      <HowWeWork />
      <ProcessComparison />
      <BuyerJourney />
      <Testimonials />
      <Team />
      <BlogPreview />
      <FAQ />

      <CTA />
    </main>
  );
}

function PageRouter() {
  const { currentPage } = usePage();

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "ugc":
        return <UGCPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "blog":
        return <BlogPage />;
      case "careers":
        return <CareersPage />;
      case "contact":
        return <ContactPage />;
      case "privacy":
        return <PrivacyPage />;
      case "terms":
        return <TermsPage />;
      case "blog-detail":
        return <BlogDetailPage />;
      case "service-detail":
        return <ServiceDetailPage />;
      case "sitemap":
        return <SitemapPage />;
      case "error":
        return <ErrorPage />;
      case "thank-you":
        return <ThankYouPage />;
      case "case-study-detail":
        return <CaseStudyDetailPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {renderPage()}
      <Footer />
      <ProjectDrawer />
      <UGCDrawer />
      <CareersDrawer />
      <FloatingActions />
    </div>
  );
}

export default function Home() {
  return (
    <PageProvider>
      <PageRouter />
    </PageProvider>
  );
}
