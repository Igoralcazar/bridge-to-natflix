import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/natflix/Header";
import { Hero } from "@/components/natflix/Hero";
import { Benefits, Comparison, Problem, WhatIs } from "@/components/natflix/Sections";
import { Pricing } from "@/components/natflix/Pricing";
import { Analysis, Faq, FinalCta } from "@/components/natflix/Analysis";
import { Footer } from "@/components/natflix/Footer";
import { StickyCta } from "@/components/natflix/StickyCta";
import { faqs } from "@/components/natflix/data";

const TITLE = "Natflix Fitness vale a pena? Análise honesta e preços";
const DESCRIPTION =
  "Análise independente da Natflix Fitness: o que gostamos, o que considerar antes de assinar, preços e para quem a plataforma faz sentido.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatIs />
        <Analysis />
        <Benefits />
        <Comparison />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
