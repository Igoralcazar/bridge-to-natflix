import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/natflix/Header";
import { Hero } from "@/components/natflix/Hero";
import {
  Benefits,
  Comparison,
  Modalities,
  Nutrition,
  Problem,
  Proof,
  Solution,
  Stats,
  Steps,
} from "@/components/natflix/Sections";
import { Pricing } from "@/components/natflix/Pricing";
import { Analysis, Faq, FinalCta, Transparency } from "@/components/natflix/Analysis";
import { Footer } from "@/components/natflix/Footer";
import { StickyCta } from "@/components/natflix/StickyCta";
import { faqs } from "@/components/natflix/data";

const TITLE = "Natflix Fitness: Treinos, Modalidades e Planos";
const DESCRIPTION =
  "Conheça a Natflix Fitness, uma plataforma fitness para mulheres com treinos em casa e academia, diferentes modalidades, organização de rotina e conteúdos de alimentação.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
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
        <Stats />
        <Problem />
        <Solution />
        <Benefits />
        <Comparison />
        <Modalities />
        <Steps />
        <Nutrition />
        <Proof />
        <Pricing />
        <Analysis />
        <Transparency />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
