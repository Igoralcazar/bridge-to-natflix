import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/natflix/Header";
import { Hero } from "@/components/natflix/Hero";
import { Benefits, Comparison, Problem, WhatIs } from "@/components/natflix/Sections";
import { Pricing } from "@/components/natflix/Pricing";
import { Analysis, Faq, FinalCta } from "@/components/natflix/Analysis";
import { Footer } from "@/components/natflix/Footer";
import { faqs } from "@/components/natflix/data";

const TITLE =
  "Natflix Fitness vale a pena? Preços, pontos positivos e limitações | Fitness na Prática";

const DESCRIPTION =
  "Natflix Fitness vale a pena? Veja nossa análise independente, preços, principais vantagens, limitações e para quem a plataforma pode fazer sentido.";

export const Route = createFileRoute("/natflix-fitness-vale-a-pena")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
  {
  property: "og:url",
  content: "https://fitnessnapratica.com.br/natflix-fitness-vale-a-pena",
},
      { name: "twitter:card", content: "summary_large_image" },
    ],
links: [
  {
    rel: "canonical",
    href: "https://fitnessnapratica.com.br/natflix-fitness-vale-a-pena",
  },
],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
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
    </div>
  );
}
